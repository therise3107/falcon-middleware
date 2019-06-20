async function findFalconPlanet(_, args, context) {
  const token = await context.api().getToken
  const body = {
    ...{ ...token },
    planet_names: args.planets,
    vehicle_names: args.vehicles
  }

  const response = await context.api().findFalcon(body)

  return response
}

module.exports = {
  findFalconPlanet
}
