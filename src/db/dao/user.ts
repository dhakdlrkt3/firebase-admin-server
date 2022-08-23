import { default as user } from '../data/user.json'
import { User } from '@/types'

export default {
  addUser (_user: User) {
    user.push(_user)
  },

  getUserAll () {
    return user
  },

  getUserDetail (id: number) {
    return user[id]
  },

  updateUser (_user: User) {
    let origin = user.find((us) => us.id === _user.id)
    if (origin) {
      origin = _user
    }
  },

  removeUser (id: number) {
    user.splice(id, 1)
  },
}