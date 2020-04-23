import todosResponse from '../../fixtures/getDefaultTodos.json'

class TodosFixtureService {
    getTodosApi() {
        return new Promise((resolve, reject) => resolve(todosResponse))
        }
    }
export default TodosFixtureService