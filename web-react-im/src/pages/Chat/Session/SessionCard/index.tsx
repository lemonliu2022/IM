import { Badge, Image } from 'antd'
import style from './index.module.less'

const SessionCard = () => {
  return (
    <div className={style['session-card']}>
      <Badge count={5} size="small">
        <Image className={style['avatar']} src="https://joeschmoe.io/api/v1/random" preview={false} />
      </Badge>
      <main className={style['session-card-main']}>
        <div className={style['name']}>千帆FE-xxx</div>
        <div className={style['message']}>ffffffff</div>
      </main>
      <section className={style['session-card-right']}>
        <div className={style['time']}>12:00</div>
      </section>
    </div>
  )
}

export default SessionCard