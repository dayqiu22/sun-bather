'use client'

import Box from "../ui/preferences/box";
import Container from 'rsuite/Container';
import Header from 'rsuite/Header';
import Content from 'rsuite/Content';
import Footer from 'rsuite/Footer';
import Sidebar from 'rsuite/Sidebar';
import Navbar from 'rsuite/Navbar';
import Nav from 'rsuite/Nav';

// (Optional) Import component styles. If you are using Less, import the `index.less` file. 
import 'rsuite/Container/styles/index.css';
import 'rsuite/Header/styles/index.css';
import 'rsuite/Content/styles/index.css';
import 'rsuite/Footer/styles/index.css';
import 'rsuite/Sidebar/styles/index.css';

export default function Page() {
    return (
        <div className="show-fake-browser navbar-page">
            <Container>
            <Header>
                <Navbar appearance="inverse">
                <Nav>
                    <Nav.Item>Home</Nav.Item>
                    <Nav.Item>Preferences</Nav.Item>
                </Nav>
                </Navbar>
            </Header>
            <Content>
                <Box />
            </Content>
            <Footer>Footer</Footer>
            </Container>
        </div>
    );
}