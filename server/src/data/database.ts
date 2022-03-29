import { Pool } from 'pg';

const connection = new Pool({
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    user: process.env.USER,
    host: process.env.HOST
})

connection.connect(() => {
    try {
        console.log("Databse is running");
        return;
    } catch (error) {
        console.log(error);
    }
})

export default connection;

