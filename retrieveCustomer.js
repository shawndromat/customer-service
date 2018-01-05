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

const retrieveCustomer = (customerId) => {
  const customer = customers[customerId] || {
    name: "Customer Joe Schmoe",
    agentId: "99999"
  }
  return { id: customerId, ...customer }
}

export default retrieveCustomer