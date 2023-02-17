import Queue from "bull"
import redisConfig from "../../config/redis.js"
import * as Sentry from '@sentry/node';
import * as jobs from "../jobs/index.js"

// { RegistrationMail: { key: '', handle: () => {} }}
const queues = Object.values(jobs).map(job => ({
    bull: new Queue(job.key, redisConfig),
    name: job.key,
    handle: job.handle,
    options: job.options,
}))

const add = (name, data) => {
    const queue = queues.find(queue => queue.name === name)
    return queue.bull.add(data, queue.options)
}

Sentry.init({
    dsn: "https://003685d9fe4745759149cbcdff485602@o4504697276203008.ingest.sentry.io/4504697280856064",
    tracesSampleRate: 1.0,
});

const process = () => {
    return queues.forEach(queue => {
        queue.bull.process(queue.handle)

        queue.bull.on('failed', (job, err) => {
            console.log('Job failed: ', queue.key, job.data)
            console.log(err)

            /**
             * Sentry monitoring
             */
            Sentry.captureMessage(`Something went wrong at "${queue.key}" job!`);
        })
    })
}

export default {
    queues,
    add,
    process
}