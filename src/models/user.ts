import { User } from '@types'
import DAO from '@/db/dao'

export default {
  createUser (user: User) {
    DAO.user.addUser(user)
  },

  readUserAll () {
    return DAO.user.getUserAll()
  },

  readUserDetail (id: number) {
    return DAO.user.getUserDetail(id)
  },

  updateUser (user: User) {
    return DAO.user.updateUser(user)
  },

  deleteUser (id: number) {
    DAO.user.removeUser(id)
  },
}