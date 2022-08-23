import express, { Express } from 'express' 
import cors from 'cors'

export function initExpress (app: Express) {
  app.use(cors())
  app.use(express.json())
}