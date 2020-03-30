import React from "react"
import styled from "styled-components"

export default props => <N>{props.children}</N>

const N = styled.nav`
    background-color: orange;
`
