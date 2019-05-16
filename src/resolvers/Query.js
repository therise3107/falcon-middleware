const getPlanets = async (_, __, context) => context.api().fetchPlanets

const getVehicles = async (_, __, context) => context.api().fetchVehicles

module.exports = {
  getPlanets,
  getVehicles
}
