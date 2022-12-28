import {openDb} from './configDB.js';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(express.json());


openDb()

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.post('/pessoa', (req, res) => {
    console.log(req.body);
    res.json({
        "statusCode":200
    })
})

app.listen(3000, () => {
    console.log('servidor iniciado')
})

