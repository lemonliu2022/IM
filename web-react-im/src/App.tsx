import { useState, useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { MessageOutlined, UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu, Avatar } from 'antd'
import style from './App.module.less'

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: 'chat', label: '聊天', icon: <MessageOutlined /> },
  { key: 'contacts', label: '联系人', icon: <UserOutlined /> },
]

const App = () => {
  const [collapsed, setCollapsed] = useState(true)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const firstRoute = pathname.split('/')[1]
  useEffect(() => {
    if(pathname === '/') {
      navigate('/chat')
    }
  }, [])
  function menuItemClickHandler(key: string) {
    navigate(key)
  }
  return (
    <div className={style.App}>
      <section className={`${style['menu-section']} ${collapsed && style['menu-collapsed']}`}>
        <div className={style['menu-section-top']}>
          <Avatar shape="square" className={style.avatar} src="https://joeschmoe.io/api/v1/random" />
          <Menu
            defaultSelectedKeys={[firstRoute]}
            mode="inline"
            inlineCollapsed={collapsed}
            items={items}
            onClick={({key}) => menuItemClickHandler(key)}
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
