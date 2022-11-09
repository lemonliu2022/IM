import { Button, Input } from 'antd'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
import SessionCard from './SessionCard'
import style from './index.module.less'

const Session = () => {
  return (
    <div className={style['session']}>
      <header className={style['session-header']}>
        <Input size="small" placeholder="搜索" prefix={<SearchOutlined />} />
        <Button className={style['header-plus']} size="small" icon={<PlusOutlined />} />
      </header>
      <main className={style['session-main']}>
        {
          new Array(100).fill('').map((item, index) => (
            <SessionCard key={index} />
          ))
        }
      </main>
    </div>
  )
}

export default Session