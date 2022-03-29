import { Request, Response, NextFunction } from "express";

import connection from '../../data/database'

const updateValidate = async (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.params;
    const { nickname, state } = req.body;

    let queryGetUser = `SELECT * FROM users WHERE id=${id}`

    try {

        if(!nickname) {
            return res.status(400).json({ message: "You have to complete a nickname" })
        }

        if(nickname.length >= 20) {
            return res.status(400).json({ message: "The nickname must be less than 20 characters." })
        }

        if(state.length >= 200) {
            return res.status(400).json({ message: "The state must be less than 200 characters." })
        }

        const getUser = await connection.query(queryGetUser)
        const user = getUser.rows[0]

        if(user.nickname == nickname && user.state == state) {
            return res.status(400).json({ message: "You hadn't changed anything." })
        }

        next();
        
    } catch (error) {
        console.log(error);
    }

}

export default updateValidate