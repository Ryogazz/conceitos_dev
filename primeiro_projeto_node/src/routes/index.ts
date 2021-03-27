import {Router} from 'express'

const routes = Router();

routes.get('/', (request, response) => response.json({menssage: '👌 Hellow stack'}));

export default routes;


