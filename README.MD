<div align="center">

![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-D9281A?style=for-the-badge&logo=redis&logoColor=white)
![Sentry](https://img.shields.io/badge/Sentry-362d59?style=for-the-badge&logo=sentry&logoColor=white)
</div>
</h1>
<h3 align="center">
Background jobs (queue) with error tracking
</h3>

<p>The aplication registers a user and adds an email to the registration email queue.<br>
If any error occurs it is sent to sentry.io
</p>

<h6 align="center"><kbd><img src="https://raw.githubusercontent.com/rangel-pci/files/master/Sentry%20screenshot2.png" title="Sentry notification" /></kbd></h6>

<h2>📋 Implemented Technologies</h2>

- Node.js
- Redis
- Bull (Redis-based queue for Node)
- Bull Dashboard (Job inspector)
- Sentry (Third party service to track errors and monitor performance)

<h2>⚙ How to Run</h2>

```bash
#Clone the repository
$ git clone https://github.com/rangel-pci/BackgroundJobs
$ cd BackgroundJobs
#be sure to configure .env.example and rename it to .env
#then
$ yarn install
$ yarn dev:start
$ yarn dev:queue
```
