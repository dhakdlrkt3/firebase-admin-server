import * as admin from 'firebase-admin'
import UserModel from '@models/user'

export async function sendToDevice (ids: number[]) {
  // const json = { users: [{ token: '' }] }

  // t
  const tokens = UserModel
    .readUserAll()
    .map((user) => user.token)

  const payload = {
    title: 'titletitle',
    body: 'bodybody',
    createdAt: new Date().toString(),
  }
  // console.log('rst ==> ',rst)

  await admin.messaging().sendToDevice(tokens, {
    data: {
      ...payload,
    },
  })
}
