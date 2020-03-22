import React from "react"
import styled from "styled-components"

export default function Header(props) {
    return <H>{props.children}</H>
}

const H = styled.header`
    grid-column-start: 1;
    grid-column-end: 5;
`
