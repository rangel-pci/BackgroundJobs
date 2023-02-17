import express from "express"
import "dotenv/config"
import { BullAdapter, ExpressAdapter, createBullBoard } from "@bull-board/express"
import Queue from "./app/lib/Queue.js"
import UserController from "./app/controllers/UserController.js"

const app = express()

/**
 * Bull Board
 */
const serverAdapter = new ExpressAdapter()
serverAdapter.setBasePath('/admin/queues')
const { addQueue, removeQueue, setQueues, replaceQueues } = createBullBoard({
    queues: Queue.queues.map(queue => new BullAdapter(queue.bull)),
    serverAdapter: serverAdapter,
});

app.use(express.json())
app.use('/admin/queues', serverAdapter.getRouter());
app.post('/user', UserController.store)

app.listen(process.env.PORT, () => {
    console.log("Running at http://localhost:" + process.env.PORT)
    console.log("Bull UI running at http://localhost:"+process.env.PORT+"/admin/queues")
})