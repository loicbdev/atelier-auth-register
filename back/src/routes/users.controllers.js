const express = require('express');
const bcrypt = require('bcrypt');
const connection = require('../../database');

const router = express.Router();


router.post('/auth', (request, response) => {
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
                                response.sendStatus(200);
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