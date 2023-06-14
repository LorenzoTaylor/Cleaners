require('dotenv').config()

const express = require('express')
const app = express

app.request(express.json())

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)
const storeItems = new Map([[
    1, {priceInCents: 10000, name: "Kitchen "}
]])

app.listen(3000)