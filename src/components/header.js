import React from "react"
import styled from "styled-components"

const H = styled.header`
    font-family: serif;
    font-size: 80px;
    font-weight: 900;
`

export default function Header(props) {
    return <H>{props.children}</H>
}
