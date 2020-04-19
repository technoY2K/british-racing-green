import React from "react"
import styled from "styled-components"

const H = styled.div`
    text-align: center;
    position: relative;
`

export default function Head(props) {
    return <H>{props.children}</H>
}
