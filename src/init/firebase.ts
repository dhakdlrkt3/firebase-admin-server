import * as admin from 'firebase-admin'
import CONFIG from '@/configs'
// import { MessagePayload } from '@/types'

export async function initFirebase () {
  const json = CONFIG.firebaseKey
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(JSON.stringify(json))),
  })
}
// class Firebase {

//   async sendMessage (tokens: string, payload: MessagePayload) {
//     await admin.messaging().sendToDevice(tokens, {
//       data: {
//         ...payload,
//       },
//     })
//   }
// }

// export const fb = new Firebase()


