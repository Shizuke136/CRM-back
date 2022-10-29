import { connection } from "../db/db.js";
import { registerSchema } from "../schemas/registerSchema.js"

async function register(req,res){
    const { name, email, phone, birthDate } = req.body
    const isValid = registerSchema.validate({name, email, phone, birthDate})

    if(isValid.error){
        const error = isValid.error.details.map(error => error.message).join('\n')
        return res.status(422).send(`Ocorreram os seguintes erros: \n \n ${error}`)
    }

    try{
        const query = await connection.query('INSERT INTO users (name, email, phone, "birthDate") VALUES ($1,$2,$3,$4);',[name, email, phone, birthDate])
        return res.sendStatus(201)
    }catch(error){
        if(error.code === '23505'){
            return res.status(409).send("Email já cadastrado!")
        }
        console.log(error)
        return res.sendStatus(500)
    }
}

export { register }