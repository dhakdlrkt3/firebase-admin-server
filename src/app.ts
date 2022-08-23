import 'module-alias/register'
import express from 'express' 
import { initFirebase, initExpress, initRouter } from '@/init'

const app = express()

initFirebase()
initExpress(app)
initRouter()

const port = process.env.PORT

app.listen(port, () => {
  console.log('>> server start 🚀🚀')
})