import '../styles/globals.css'
import 'antd/dist/antd.css';
import styled, { createGlobalStyle } from 'styled-components';
import { Layout, Row, Space } from 'antd';
import React from 'react';
import { useRouter } from 'next/router';

const { Header, Footer, Content } = Layout;

const TextMenu = styled.span`
  color: black;
  font-size: 18px;
  cursor: pointer;
  
  &:hover {
    color: #0070f3;
  }
  
  ${props => props.active && `color: cornflowerblue;`}
`

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  word-wrap: break-word;
  }

  #__next {
    height: 100vh;
  }

  body {
    font-family: 'Prompt', sans-serif;

  }
`

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const onClick = async (e, path) => {
    e.preventDefault()
    await router.push(`${path}`)
  }

  return <div>
    <GlobalStyle />
    <Layout>
      <Header style={{ backgroundColor: '#fafafa' }}>
        <Row justify="center">
          <Space>
            <TextMenu active={router.pathname === '/'} onClick={(e) => onClick(e,'/')}>Form</TextMenu>
            <TextMenu active={router.pathname === '/fetch'} onClick={(e) => onClick(e,'/fetch')}>Fetch Api</TextMenu>
          </Space>
        </Row>
      </Header>
      <Content style={{ height: '100vh' }}>
        <Component {...pageProps} />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
}

export default MyApp
