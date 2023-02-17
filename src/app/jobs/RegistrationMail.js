import Mail from "../lib/Mail.js"

export default {
    key: 'RegistrationMail',
    options: {
        priority: 1,
        delay: 5000,
        attempts: 1,
    },
    async handle({ data }) {
        const { user } = data

        await Mail.sendMail({
            from: 'System <system@example.com>',
            to: `${user.name} <${user.email}>`,
            subject: 'User Registration',
            html: `Welcome, ${user.name}!`
        })
    }
}