import generatePassword from "password-generator"
import Queue from "../lib/Queue.js"

export default {
    async store(req, res){
        const { name, email } = req.body
        
        //Add user to database
        const user = {
            name,
            email,
            password: generatePassword(15, false)
        }
        
        //Add RegistrationMail job in the queue
        await Queue.add('RegistrationMail', { user })

        return res.json(user)
    }
}