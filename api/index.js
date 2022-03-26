import express from 'express'
import currency from './routes/currency'
import transaction from './routes/transaction'

const app = express()

export default {
    path: '/api',
    handler: app
}

app.use(express.json())
app.use(currency)
app.use(transaction)