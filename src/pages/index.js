import React from "react"
import Container from "../components/container"
import Header from "../components/header"

export default function LandingPage(props) {
    return (
        <Container>
            <Header>
                <h1>British Racing Green</h1>
            </Header>
            <div style={{ background: "#004225", color: "#FFFFFF" }}>ONE</div>
            <div>TWO</div>
            <div style={{ background: "#004225", color: "#FFFFFF" }}>THREE</div>
            <div>FOUR</div>
            <div>FIVE</div>
            <div style={{ background: "#004225", color: "#FFFFFF" }}>SIX</div>
            <div>SEVEN</div>
            <div style={{ background: "#004225", color: "#FFFFFF" }}>EIGHT</div>
        </Container>
    )
}
