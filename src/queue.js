import 'dotenv/config'
import Queue from "./app/lib/Queue.js"
import RegistrationMail from './app/jobs/RegistrationMail.js'

Queue.process(RegistrationMail.handle)