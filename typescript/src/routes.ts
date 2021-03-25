import{Request, Response} from 'express';
import createUser from './services/CreateUser';

export function HelloWord(request: Request, response: Response) {
    const user = createUser({
        name: 'Dash',
        email: 'dash@gamail.com',
        password:'12345',
        techs: [
            'Node.js',
            'ReactJS',
            'Outros',
            { title : 'javaScrpit', experience: 100},
            { title: 'memes', experience: 50}
            ],
    });
    return response.json({ message: 'Hello World' });
}


export function lol(request: Request, response: Response) {
    return response.json({ message: 'ola teste' });
}