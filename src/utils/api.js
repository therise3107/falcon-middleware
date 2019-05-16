const fetch = require('node-fetch')

const BASE_URL = process.env.API_BASE_URL

const requestHandler = async (url) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`)

    return response.json()
  } catch (error) {
    throw error
  }
}

module.exports = () => ({
  fetchPlanets: requestHandler('/planets'),
  fetchVehicles: requestHandler('/vehicles')
})
