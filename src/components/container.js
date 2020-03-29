import React from "react"
import styled from "styled-components"

export default function Container(props) {
    return <C>{props.children}</C>
}

const C = styled.div`
    height: 100vh;
    width: 100vw;
    padding: 15px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 100px 25% auto;
`
