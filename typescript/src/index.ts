import express, { response } from 'express';
import {HelloWord , lol} from './routes'


const app = express();

app.get('/', HelloWord, lol)

app.listen(3333);