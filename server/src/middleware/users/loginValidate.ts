import { Request, Response, NextFunction } from "express";

const loginValidate = (req: Request, res: Response, next: NextFunction) => {

    const { email, password } = req.body;

    try {

        if(!email || ! password) {
            return res.status(400).json({ message: "There are empty fields. Please complete." })
        }

        next();
        
    } catch (error) {
        console.log(error);
    }

}

export default loginValidate