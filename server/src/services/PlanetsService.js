import { dbContext } from "../db/DbContext.js"

class PlanetsService {
    async getPlanetsByGalaxyId(galaxyData) {
        const planets = await dbContext.Planets.find({ galaxyId: galaxyData })
        return planets

    }
    async createPlanet(planetData) {

        const planet = await dbContext.Planets.create(planetData)
        return planet
    }



}

export const planetsService = new PlanetsService()