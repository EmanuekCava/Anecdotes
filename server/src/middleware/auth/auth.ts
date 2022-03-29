import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'

import connection from '../../data/database'

const { JWT } = process.env;

interface IValidation {
    exp: number,
    iat: number,
    id: number
}

const auth = async (req: any, res: Response, next: NextFunction) => {

    try {

        const token = req.headers.authorization?.split(' ')[1]     

        if(!token) {
            return res.status(401).json({ message: "Token does not exists." })
        }

        const validation = jwt.verify(token, `${JWT}`) as IValidation

        if(!validation) {
            return res.status(401).json({ message: "Tokes is not valid." })
        }

        req.user = validation.id;

        let queryAuth = `SELECT * FROM users WHERE id=${req.user}`;

        const user = await connection.query(queryAuth)

        if(user.rowCount == 0) {
            return res.status(401).json({ message: "User does not exists." })
        }

        next();
        
    } catch (error) {
        console.log(error);
    }

}

export default auth