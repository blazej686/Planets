import { Auth0Provider } from "@bcwdev/auth0provider";
import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";
import { planetsService } from "../services/PlanetsService.js";

export class GalaxiesController extends BaseController {
    constructor() {
        super('api/galaxies')
        this.router
            .get('', this.getGalaxies)
            .get('/:galaxyId/planets', this.getPlanetByGalaxyId)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createGalaxy)
    }



    async getGalaxies(req, res, next) {
        try {

            const galaxies = await galaxiesService.getGalaxies()
            return res.send(galaxies)
        } catch (error) {
            next(error)
        }
    }
    async createGalaxy(req, res, next) {
        try {
            const galaxyData = req.body
            const userInfo = req.userInfo
            galaxyData.creatorId = userInfo.id
            const newGalaxy = await galaxiesService.createGalaxy(galaxyData)
            return res.send(newGalaxy)
        } catch (error) {
            next(error)
        }
    }

    async getPlanetByGalaxyId(req, res, next) {
        try {
            const galaxyId = res.params.galaxyId
            const planets = await planetsService.getPlanetsByGalaxyId(galaxyId)
            return res.send(planets)

        } catch (error) {
            next(error)
        }
    }
}
