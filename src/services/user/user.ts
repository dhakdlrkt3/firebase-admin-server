import userModel from '@models/user'
import { User as USer } from '@/types'

class User {
  registUser (user: USer) {
    userModel.createUser(user)
  }

  readUser (id: number) {
    return userModel.readUserDetail(id)
  }

  readUserDetail (id: number) {
    return userModel.readUserDetail(id)
  }

  updateUser (user: USer) {
    return userModel.updateUser(user)
  }

  deleteUser (id: number) {
    userModel.deleteUser(id)
  }
}

export default new User()