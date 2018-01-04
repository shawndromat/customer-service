const express = require('express')

const PORT = process.env.PORT || 4001

const app = express()

const customers = {
  "12345": {
    name: "Roger Anderson",
    agentId: "99999"
  },
  "23456": {
    name: "Brenda Oberbrunner",
    agentId: "33333"
  }
}

const agents = {
  "99999": {name: "Agent Smith"},
  "33333": {name: "Agent Bond, James Bond"}
}

const retrieveCustomer = (customerId) => {
  const customer = customers[customerId]
  return customer || {
    name: "Customer Joe Schmoe",
    agentId: "99999"
  }
}

const retrieveAgent = (agentId) => {
  const agent = agents[agentId]
  return agent || {name: "Agent Mystery"}
}

app.get('/customer/:customerId', (req, res) => {
    let customerId = req.params.customerId

    console.log(`Requested customer with id: ${customerId}`)

    res.json({
      id: customerId,
      ...retrieveCustomer(customerId)
    })
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
console.log(`Running the customer service on port ${PORT}`)
