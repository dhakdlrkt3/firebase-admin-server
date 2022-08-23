import express, { Request, Response } from 'express' 

export function initRouter () {
  const router = express.Router()

  router.get('/users-list', (req: Request, res: Response) => {
    //
  })
  
  router.post('/regist-user', (req: Request, res: Response) => {
    //
  
  })
  
  router.post('delete-user', (req: Request, res: Response) => {
    //
  })
}