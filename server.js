import express from 'express'
import retrieveCustomer from "./retrieveCustomer"
import retrieveAgent from "./retrieveAgent"

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

app.get('/agent/:agentId', (req, res) => {
    let agentId = req.params.agentId

    console.log(`Requested agent with id: ${agentId}`)

    setTimeout(() => {
      res.json({
        id: agentId,
        ...retrieveAgent(agentId)
      })
    }, 5000)
  })

app.listen(PORT)
console.log(`Running the service on port ${PORT}`)
