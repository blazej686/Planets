import { dbContext } from "../db/DbContext.js"

class GalaxiesService {
    async createGalaxy(galaxyData) {
        const galaxy = await dbContext.Galaxies.create(galaxyData)
        await galaxy.populate('creator')
        return galaxy
    }
    async getGalaxies() {
        const galaxy = await dbContext.Galaxies.find()
        return galaxy

    }


}

export const galaxiesService = new GalaxiesService()