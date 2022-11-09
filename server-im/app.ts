import { createServer, bootstrapAfter } from 'core/application'
import { print } from 'app/helper/utils'


export default (async () => {
  const app = await createServer()
  return app.listen(8000, () => {
    print.log('server is running at http://localhost:8000')
    bootstrapAfter()
  })
})()
