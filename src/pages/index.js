import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Nav from "../components/nav"
import Main from "../components/main"
import Ad from "../components/ad"
import Footer from "../components/footer"

export default function X(props) {
    return (
        <Container>
            <Header>
                <h1>British Racing Green</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </Header>
            <Nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cool</li>
                </ul>
            </Nav>
            <Main></Main>
            <Ad>
                <a href="/">START YOUR FREE TRIAL!</a>
            </Ad>
            <Footer></Footer>
        </Container>
    )
}
