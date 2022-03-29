import { Request, Response, NextFunction } from "express";

import connection from '../../data/database';

const userValidate = async (req: Request, res: Response, next: NextFunction) => {

    const { nickname, email, password, confirm } = req.body;

    let queryValidateNickName = `SELECT * FROM users WHERE nickname='${nickname}'`;
    let queryValidateEmail = `SELECT * FROM users WHERE email='${email}'`;

    var invalidCharactersNickname = ["<", ">", ",", ";", ":", ".", "-", "_", "-", "{", "}", "[", "]", "^", "`", "´", "¨", "+", "*", "~", "|", "°", "¬", "!", '"', "#", "$", "%", "&", "/", "(", ")", "=", "?", "'", "¡", "¿", "@"]

    try {

        if(!nickname || !email || !password || !confirm) {
            return res.status(400).json({ message: "There are incomplet characters." })
        }

        if(password.length < 6) {
            return res.status(400).json({ message: "Password must be more than 5 characters." })
        }

        if(password !== confirm) {
            return res.status(400).json({ message: "Passwords do not match." })
        }

        if(nickname.length >= 20) {
            return res.status(400).json({ message: "The nickname must be less than 20 characters." })
        }

        for(var i = 0; i < invalidCharactersNickname.length; i++) {
            for(var j = 0; j < nickname.length; j++) {
                if(nickname[j] == invalidCharactersNickname[i]) {
                    return res.status(401).json({ message: `Symbols like ${nickname[j]} are not permitted in the nickname.` })
                }
            }
        }

        const showNicknames = await connection.query(queryValidateNickName)
        const showEmails = await connection.query(queryValidateEmail)

        if(showNicknames.rowCount != 0) {
            return res.status(401).json({ message: "That nickname already exists." })
        }
        if(showEmails.rowCount != 0) {
            return res.status(401).json({ message: "That email already exists." })
        }

        const emailToValid = validateEmail(email)
        if(!emailToValid){
            return res.status(401).json({ message: "The email is not valid." })
        }
        
        next();
        
    } catch (error) {
        console.log(error);
    }

}

const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

export default userValidate;
