import React, { useState } from 'react'
import { Layout, Button, Row, Col, theme } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Nav } from '@entry-point/features'

const { Header, Sider, Content, Footer } = Layout

interface Props {
  children: React.ReactNode
}

export const MainLayout = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null}
        collapsed={collapsed}
        theme='light'
        style={{ borderRight: '1px solid rgba(5, 5, 5, 0.06)', paddingTop: 8 }}
      >
        <Nav />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Row align='middle'>
            <Col>
              <Button
                type='text'
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64
                }}
              />
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            padding: 16,
            background: colorBgContainer,
            height: '100%'
          }}
        >
          {children}
        </Content>
        <Footer style={{ textAlign: 'center', padding: 16, background: colorBgContainer }}>
          <a href='https://github.com/wtheroux/IPEM_FRONT' target='_blank'>
            GitHub Repository Link
          </a>
        </Footer>
      </Layout>
    </Layout>
  )
}
