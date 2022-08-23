import 'module-alias/register'
import express from 'express' 
import { initFirebase, initExpress, initRouter } from '@/init'

const app = express()

initFirebase()
initExpress(app)
initRouter()

app.listen(10000, () => {
  console.log('>> server start 🚀🚀')
})