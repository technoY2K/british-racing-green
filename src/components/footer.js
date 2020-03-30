import React from "react"
import styled from "styled-components"

export default props => <C>{props.children}</C>

const C = styled.footer`
    background-color: #004225;
`
