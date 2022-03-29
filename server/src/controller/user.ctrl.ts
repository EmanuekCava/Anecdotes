import { Request, Response } from "express";
import { QueryResult } from "pg";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import connection from '../data/database';

const { JWT } = process.env;

export const users = async (req: Request, res: Response): Promise<Response> => {

    let query = "SELECT * FROM users";

    try {

        const showUsers: QueryResult = await connection.query(query)

        const rows = showUsers.rows;
        const amountOfUsers = showUsers.rowCount;

        return res.status(200).json({
            users: rows,
            amount: amountOfUsers
        })
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const user = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;

    let query = `SELECT * FROM users WHERE id=${id}`;

    try {

        const showUser = await connection.query(query)

        const row = showUser.rows

        return res.status(200).json(row[0])
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const register = async (req: Request, res: Response): Promise<Response> => {

    const { nickname, email, password } = req.body;

    const salt = await bcrypt.genSalt(8)
    const pass = await bcrypt.hash(password, salt)

    let query = `INSERT INTO users (nickname, email, password, date) 
    VALUES ('${nickname}', '${email}', '${pass}', NOW())`;

    try {

        await connection.query(query)

        let queryId = `SELECT * FROM user WHERE email=${email}`;

        const userRegistered: QueryResult = await connection.query(queryId)

        const token: string = jwt.sign({id: userRegistered.rows[0].id}, `${JWT}`, {
            expiresIn: '24h'
        })

        return res.status(200).json({
            message: "Welcome",
            user: userRegistered.rows[0],
            token
        })
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const login = async (req: Request, res: Response): Promise<Response> => {

    const { email, password } = req.body;

    let queryEmail = `SELECT * FROM users WHERE email='${email}'`;

    const user: QueryResult = await connection.query(queryEmail)

    if(user.rowCount == 0) {
        return res.status(400).json({ message: "User does not exists." })
    }

    const validation = await bcrypt.compare(password, user.rows[0].password)

    if(!validation) {
        return res.status(400).json({ message: "The fields do not match." })
    }

    try {

        const token: string = jwt.sign({ id: user.rows[0].id }, `${JWT}`, {
            expiresIn: '7d'
        })

        return res.status(200).json({
            message: "Welcome",
            user: user.rows[0],
            token
        })
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const removeUser = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;

    let query = `DELETE FROM users WHERE id=${id}`;

    try {

        await connection.query(query)

        return res.status(200).json({
            message: "User was removed"
        })
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const updateProfile = async (req: Request, res: Response) => {

    const { id } = req.params;

    const { nickname, state } = req.body;

    let query = `UPDATE users SET
        state='${state}',
        nickname='${nickname}'
        WHERE id=${id}
    `;

    try {

        await connection.query(query)

        let queryGetUser = `SELECT * FROM users WHERE id=${id}`;

        const user = await connection.query(queryGetUser)

        return res.status(200).json({
            message: "Profile was updated.",
            user: user.rows[0]
        })
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}