import React from "react"
import styled from "styled-components"

const C = styled.div`
    font-size: 0
    line-height: 0
    word-spacing: -.31em;
    display: inline-block;
    margin: 30px 2% 0 2%
`

export default function Content(props) {
    return <C>{props.children}</C>
}
