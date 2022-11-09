import Koa from 'koa'
import { print } from 'app/helper/utils'

// 创建服务质检需要做的事情
export const createServer = async (): Promise<Koa> => {
  const app: Koa = new Koa()

  // useMiddlewares(koa)

  // useContainer(Container)

  // const app: Koa = useKoaServer<Koa>(koa, routingConfigs)

  return app
}

export const bootstrapAfter = async (): Promise<void> => {
  print.log('do something in bootstrapAfter')
}
