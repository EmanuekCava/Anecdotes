import { Request, Response, NextFunction } from "express";

const anecdoteValidate = (req: Request, res: Response, next: NextFunction) => {

    const { title, history } = req.body;

    try {

        if(!title) {
            return res.status(400).json({ message: "You have to write a title." })
        }
        if(!history) {
            return res.status(400).json({ message: "You have to write a history." })
        }

        if(title.length >= 50) {
            return res.status(400).json({ message: "Title must be less than 50 characters" })
        }
        if(history.length >= 2000) {
            return res.status(400).json({ message: "Title must be less than 2000 characters" })
        }

        next();
        
    } catch (error) {
        console.log(error);
    }

}

export default anecdoteValidate;
