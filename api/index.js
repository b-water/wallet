import express from 'express'
import currency from './routes/currency'
import transaction from './routes/transaction'
import account from './routes/account'

const app = express()

export default {
    path: '/api',
    handler: app
}

app.use(express.json())
app.use(currency)
app.use(account)
app.use(transaction)