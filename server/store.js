const storage = require('azure-storage')
const service = storage.createTableService('kredusandmeiderac','l4dfABRx6Vt69D9F82R8oj+/pZQIFbJr77tpq9V/sa2hM0sVgdDkt1jaaRhlIdy00Fuxrb1ypFhltujofJxfWw==')
const table = 'tasks'

const init = async () => (
  new Promise((resolve, reject) => {
    service.createTableIfNotExists(table, (error, result, response) => {
      !error ? resolve() : reject()
    })
  })
)

module.exports = {
  init
}