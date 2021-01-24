const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const connection = require('../../database');

const router = express.Router();

const { JWT_SECRET } = process.env;


router.post('/login', (request, response) => {
            const {
                email,
                password
            } = request.body;
            connection.query(
                'SELECT * FROM user WHERE email=?',
                email,
                (error, result) => {
                    if (error) {
                        response.status(500).json(error);
                    } else if (result.length > 0) {
                        const compareTo = result[0].password;
                        // asynchronous version
                        bcrypt.compare(password, compareTo, (err, res) => {
                            if (err) {
                                response.status(500).json(err);
                            } else if (res) {
                                const token = jwt.sign({ userId: result[0].id }, 
                                JWT_SECRET, { 
                                    expiresIn: '15d',
                                });
                                response.status(200).json({
                                    user: {
                                        ...result[0],
                                        password: '',
                                },
                                token,
                            });
                            } else {
                                response.status(403).json({
                                    errorMessage: 'password incorrect',
                                });
                            }
                        });
                    } else {
                        response.status(403).json({
                            errorMessage: 'email incorrect',
                        });
                    }
                });
            });
            
            
module.exports = router;