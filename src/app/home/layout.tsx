'use client'

import Container from 'rsuite/Container';
import Header from 'rsuite/Header';
import Content from 'rsuite/Content';
import Footer from 'rsuite/Footer';
import Sidebar from 'rsuite/Sidebar';
import Navbar from 'rsuite/Navbar';
import Nav from 'rsuite/Nav';
import Link from 'next/link';

// (Optional) Import component styles. If you are using Less, import the `index.less` file. 
import 'rsuite/Container/styles/index.css';
import 'rsuite/Header/styles/index.css';
import 'rsuite/Content/styles/index.css';
import 'rsuite/Footer/styles/index.css';
import 'rsuite/Sidebar/styles/index.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <div className="show-fake-browser navbar-page">
            <Container>
            <Header>
                <Navbar className='navbar shadowed' appearance="inverse">
                <Nav>
                    <Nav.Item style={{ margin: '10px 0' }} href="/home">Home</Nav.Item>
                    <Nav.Item style={{ margin: '10px 0' }} href="/home/preferences">Preferences</Nav.Item>
                    <Nav.Item style={{ margin: '10px 0' }} href="/home/about">About</Nav.Item>
                </Nav>
            </Navbar>
            </Header>
            <Content>
                {children}
            </Content>
            <Footer></Footer>
            </Container>
        </div>
    </div>
  );
}