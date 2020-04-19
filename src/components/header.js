import React from "react"
import styled from "styled-components"

const H = styled.header`
    font-family: serif;
    font-size: 80px;
    font-weight: 900;

    @media (max-width: 900px) {
        max-width: 320px;
        font-size: 60px;
        line-height: 54px;
        overflow: hidden;
    }
`

export default function Header(props) {
    return <H>{props.children}</H>
}
