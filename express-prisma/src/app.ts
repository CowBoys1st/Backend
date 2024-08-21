import express, { Express, Request, Response } from 'express'

const PORT: number = 8000

export default class App {
    private app: Express;

    constructor() {
        this.app = express()
        this.configure()
        this.routes()
    }

    private configure(): void {
        this.app.use(express.json())
    }

    private routes(): void {
        this.app.get('/api', (req: Request, res: Response) => {
            res.send("Hello, This is my API")
        })
    }

    public start(): void {
        this.app.listen(PORT, () => {
            console.log(`[API] local:   http://localhost:${PORT}/apin `)
        })
    }
}