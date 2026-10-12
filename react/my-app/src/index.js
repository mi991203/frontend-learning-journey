import { createRoot } from 'react-dom/client'
import { Component } from 'react'
import { Layout } from 'antd';
import './style.css';
import AppHeader from './components/Header';

const { Header, Footer, Content } = Layout;

class App extends Component {
    render() {
        return (
            <Layout style={{ minWidth: 1300 }}>
                <Header className="header">
                    <AppHeader />
                </Header>
                <Content className="content">Content</Content>
                <Footer className="footer">Footer</Footer>
            </Layout>
        )
    }
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)