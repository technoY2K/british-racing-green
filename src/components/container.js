import React from "react"
import styled from "styled-components"

export default function Container(props) {
    return <C>{props.children}</C>
}

const Nav = styled.nav`
    grid-area: nav;
`

const Main = styled.div`
    grid-area: main;
`

const Footer = styled.div`
    grid-area: footer;
`

const C = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 25% 100px auto;
    grid-template-areas:
        nav nav nav nav
        main main . main
        footer footer footer footer;
`

export { Container, Nav }
