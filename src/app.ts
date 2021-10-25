import express, {Request, Application, Response } from 'express'
import { ClientCodeData } from './types'

// setup the express app
const app: Application = express()
app.use(express.json())

// // knative hello world
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
  // console.log('/ received a request')
  // 
  // const target: string = process.env.TARGET || 'World'
  // res.send(`Hello ${target}!\n`)
// })


// POST request with 
app.post('/test', (req: Request, res: Response) => {
  console.log(req.body)
  const body: ClientCodeData = req.body;
  

  
  res.sendStatus(200)
})


const port: string = process.env.PORT || '5000'
const portNum: number = parseInt(port)
app.listen(
  portNum, () => console.log(`Hello world is listening on port ${portNum}\n`)
)