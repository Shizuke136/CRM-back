import { connection } from "../src/db/db.js";

async function register(req,res){
    try{
        const query = await connection.query('SELECT * FROM users;')
        return res.send(query.rows)
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }

    return res.sendStatus(200)
}

export { register }