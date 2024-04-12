import React from 'react'
import { Menu } from 'antd'
import { UserOutlined, CalendarOutlined, ClockCircleOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

export interface MenuInfo {
  key: string
  keyPath: string[]
  item: React.ReactInstance
  domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
}

export const Nav = (): JSX.Element => {
  const navigate = useNavigate()

  const onNavigate = (e: MenuInfo) => {
    navigate(e.key)
  }

  return (
    <Menu
      onClick={onNavigate}
      theme='light'
      mode='inline'
      defaultSelectedKeys={[window.location.pathname]}
      items={[
        {
          key: '/',
          icon: <InfoCircleOutlined />,
          label: 'Обзор'
        },
        {
          key: '/info',
          icon: <UserOutlined />,
          label: 'Сотрудники'
        },
        {
          key: '/time-off',
          icon: <ClockCircleOutlined />,
          label: 'Отгулы'
        },
        {
          key: '/vacation',
          icon: <CalendarOutlined />,
          label: 'Отпуск'
        }
      ]}
      style={{ border: 'none' }}
    />
  )
}
