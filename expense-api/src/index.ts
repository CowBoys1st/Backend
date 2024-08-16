import express, { Application, Request, Response} from 'express'
import db from './config/db';
import router from './router';


console.log(process.env.DATABASE)

const PORT: number = 8000;

const app: Application = express();

app.use(express.json());

app.get("/api", (req: Request, res: Response) => {
    res.status(200).send({
        status: "ok",
        msg: "Welcome to my API"
    })
})

app.use('/api', router)

db.getConnection((err, connection) => {
    if (err) {
        return console.log(err);

    }
    console.log("Success Conection", connection.threadId);
})
app.listen(PORT, () => {
    console.log(`[API] = http://localhost:${PORT}/api`);
})