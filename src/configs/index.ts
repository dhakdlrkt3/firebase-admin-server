import { default as webPushKey } from '../configs/webpushtestadminkey.json'

export default {
  port: process.env.PORT,
  mode: process.env.NODE_ENV,
  firebaseKey: webPushKey,
}