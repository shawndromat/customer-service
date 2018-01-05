import express from 'express'
import retrieveCustomer from "./retrieveCustomer"
import retrieveAgent from "./retrieveAgent"
import {retrieveProduct, retrieveProductColors, retrieveProductSizes} from "./retrieveProduct"


const PORT = process.env.PORT || 4001
const app = express()

app.get('/customers/:customerId', (req, res) => {
    res.json(retrieveCustomer(req.params.customerId))
  })

app.get('/agents/:agentId', (req, res) => {
    setTimeout(() => {
      res.json(retrieveAgent(req.params.agentId))
    }, 2000)
  })

app.get('/products/:productId', (req, res) => {
  res.json(retrieveProduct(req.params.productId))
})

app.get('/categories/:name/sizes', (req, res) => {
  setTimeout(() => {
    res.json(retrieveProductSizes(req.params.name))
  }, 2000)
})

app.get('/categories/:name/colors', (req, res) => {
  setTimeout(() => {
    res.json(retrieveProductColors(req.params.name))
  }, 2000)
})

app.listen(PORT)
console.log(`Running the service on port ${PORT}`)
