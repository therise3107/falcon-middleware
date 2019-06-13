const fetch = require('node-fetch')

const BASE_URL = process.env.API_BASE_URL

const requestHandler = async (url, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, options)

    return response.json()
  } catch (error) {
    throw error
  }
}

// Expose named functions for better abstraction vs exporting request handler
module.exports = () => ({
  fetchPlanets: requestHandler('/planets'),
  fetchVehicles: requestHandler('/vehicles'),
  getToken: requestHandler('/token', {
    method: 'post',
    headers: { Accept: 'application/json' }
  }),
  findFalcon: body => requestHandler('/find', {
    method: 'post',
    body: JSON.stringify(body),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
  })
})
