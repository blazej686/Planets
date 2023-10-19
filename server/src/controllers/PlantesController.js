import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { planetsService } from "../services/PlanetsService.js";

export class PlantesController extends BaseController {
    constructor() {
        super('api/planets')
        this.router
            .get('/:planetId')
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createPlanet)
    }


    async createPlanet(req, res, next) {
        try {
            const planetData = req.body
            const userInfo = req.userInfo
            planetData.creatorId = userInfo.id
            const planet = await planetsService.createPlanet(planetData)
            return res.send(planet)
        } catch (error) {
            next(error)
        }

    }

}