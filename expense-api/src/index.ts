import express, { Application, Request, Response} from 'express'

const PORT: number = 8000;

const app: Application = express();

app.use(express.json());

app.get("/api", (req: Request, res: Response) => {
    res.status(200).send({
        status: "ok",
        msg: "Welcome to my API"
    })
})

app.listen(PORT, () => {
    console.log(`[API] = http://localhost:${PORT}/api`);
})