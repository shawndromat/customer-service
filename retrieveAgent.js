const agents = {
  "99999": {name: "Agent Smith"},
  "33333": {name: "Agent Bond, James Bond"}
}

const retrieveAgent = (agentId) => {
  const agent = agents[agentId] || {name: "Agent Mystery"}
  return {
    id: agentId,
    ...agent
  }
}

export default retrieveAgent