// import {openDb} from './configDB.js';
import {createTable, insertPessoa, updatePessoa, selectPessoa} from './Controller/pessoa.js' 
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(express.json());

createTable()


app.get('/', (req, res) => {
    res.json('Hello world')
})

app.get('/pessoa',async (req, res) => {
   let pessoas = await selectPessoa()
   res.json(pessoas)
})


//cadastrando pessoa
app.post('/pessoa', (req, res) => {
    insertPessoa(req.body);
    res.json({
        "statusCode":200
    })
})

//atualizando pessoa
app.put('/pessoa', (req, res) => {
    if(req.body && !req.body.id){
        res.json({
            "statusCode": "400",
            "msg":"Você precisa informar um id"
        })
    } else {
        updatePessoa(req.body);
        res.json({
            "statusCode":200
        })

    }
    
})

app.listen(3000, () => {
    console.log('servidor iniciado')
})

