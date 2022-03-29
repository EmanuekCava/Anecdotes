import { Request, Response } from "express";
import { QueryResult } from "pg";

import connection from '../data/database';

export const anecdotes = async (req: Request, res: Response): Promise<Response> => {

    let query = "SELECT * FROM anecdote";
    
    try {

        const showAnecdotes: QueryResult = await connection.query(query)

        const rows = showAnecdotes.rows;
        const amountOfAnecdotes = showAnecdotes.rowCount;

        return res.status(200).json({
            anecdotes: rows,
            amount: amountOfAnecdotes
        })
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const myAnecdotes = async (req: any, res: Response): Promise<Response> => {
    
    let query = `SELECT * FROM anecdote WHERE userid=${req.user}`;
    
    try {

        const showMyAnecdotes: QueryResult = await connection.query(query)

        const amountOfAnecdotes = showMyAnecdotes.rowCount;
        const rows = showMyAnecdotes.rows;

        return res.status(200).json({
            anecdotes: rows,
            amount: amountOfAnecdotes
        })
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const userAnecdotes = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;
    
    let query = `SELECT * FROM anecdote WHERE userid=${id}`;
    
    try {

        const showAnecdotesOfUser = await connection.query(query)

        const amountOfAnecdotes = showAnecdotesOfUser.rowCount;
        const rows = showAnecdotesOfUser.rows
        
        return res.status(200).json({
            anecdotes: rows,
            amount: amountOfAnecdotes
        })
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}



export const anecdote = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;

    let query = `SELECT * FROM anecdote WHERE id=${id}`;
    
    try {

        const showAnecdote: QueryResult = await connection.query(query)

        const row = showAnecdote.rows;

        return res.status(200).json(row[0])
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const createAnecdote = async (req: any, res: Response): Promise<Response> => {

    const { title, subtitle, history } = req.body;

    let query = `INSERT INTO anecdote(title, subtitle, history, userid, date) 
    VALUES ("${title}", "${subtitle}", "${history}", ${req.user}, NOW())`;
    
    try {

        await connection.query(query)

        let queryNewAnecdote = `SELECT * FROM anecdote WHERE userid=${req.user}`;

        const newAnecdote = await connection.query(queryNewAnecdote)
        
        const last = newAnecdote.rows.slice(-1)[0]

        return res.status(200).json({
            message: "Anecdote was created.",
            anecdote: last
        })
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const removeAnecdote = async (req: any, res: Response): Promise<Response> => {

    const { id } = req.params;

    let query = `DELETE FROM anecdote WHERE id=${id}`;

    let queryAnecdote = `SELECT * FROM anecdote WHERE id=${id}`;
    
    try {

        const anecdote = await connection.query(queryAnecdote)

        if(anecdote.rows[0].userid == req.user) {
            await connection.query(query)
            return res.status(200).json({
                message: "Anecdote was removed."
            })
        } else {
            return res.status(401).json({ message: "You cannot remove it." })
        }
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const updateAnecdote = async (req: any, res: Response): Promise<Response> => {

    const { title, subtitle, history } = req.body;

    const { id } = req.params;

    let query = `UPDATE anecdote SET 
        title='${title}',
        subtitle='${subtitle}',
        history='${history}'
        WHERE id=${id}`;

    let queryAnecdote = `SELECT * FROM anecdote WHERE id=${id}`;
    
    try {

        const anecdote = await connection.query(queryAnecdote)

        if(anecdote.rows[0].title == title && anecdote.rows[0].subtitle == subtitle && anecdote.rows[0].history == history) {
            return res.status(400).json({ message: "You hadn't changed anything" })
        }

        if(anecdote.rows[0].userid == req.user) {
            await connection.query(query)
            return res.status(200).json({ 
                message: "Anecdote was updated.",
                anecdote: anecdote.rows[0]
            })
        } else {
            return res.status(401).json({ message: "You cannot update it." })
        }
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}
