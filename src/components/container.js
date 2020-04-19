import React from "react"
import styled from "styled-components"

const C = styled.div`
    text-align: center;
    position: relative;
`

export default function Container(props) {
    return <C>{props.children}</C>
}
