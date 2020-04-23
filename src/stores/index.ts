import UserService from '../Services/UserService/index.api'
import UserFixtureService from '../Services/UserService/index.fixture'

import TodoService from '../Services/TodoService/index.api'

import UsersStore from './UsersStore'
import ApiTodoStore from './apiTodoStore'
import TodosFixtureService from '../Services/TodoService/index.fixture'

const userService = new UserService()
const userFixtureService = new UserFixtureService()
const usersStore = new UsersStore(userService)


const todoService = new TodoService()
const todosFixtureService = new TodosFixtureService()
const apiTodoStore = new ApiTodoStore(todosFixtureService)

export default {
  apiTodoStore,
  usersStore
}