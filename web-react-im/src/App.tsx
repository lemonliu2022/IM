import { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { MessageOutlined, UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu, Avatar } from 'antd'
import style from './App.module.less'

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: 'chat', label: '聊天', icon: <MessageOutlined /> },
  { key: 'contacts ', label: '联系人', icon: <UserOutlined /> },
]

const App = () => {
  const [collapsed, setCollapsed] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/chat')
  }, [])
  return (
    <div className={style.App}>
      <section className={`${style['menu-section']} ${collapsed && style['menu-collapsed']}`}>
        <div className={style['menu-section-top']}>
          <Avatar shape="square" className={style.avatar} src="https://joeschmoe.io/api/v1/random" />
          <Menu
            defaultSelectedKeys={['chat']}
            mode="inline"
            inlineCollapsed={collapsed}
            items={items}
          />
        </div>
        <div className={style['menu-section-bottom']}>
          <div className={style['collapsed-btn']} onClick={() => { setCollapsed(value => value = !value) }}>
            {
              collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
            }
          </div>
        </div>
      </section>
      <Outlet />
    </div>
  )
}

export default App
