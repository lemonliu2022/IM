import Session from './Session'
import style from './index.module.less'

const Chat = () => {
  return (
    <div className={style.chat}>
      <Session />
    </div>
  )
}

export default Chat