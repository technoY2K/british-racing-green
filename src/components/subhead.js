import React from "react"
import styled from "styled-components"

const S = styled.div`
    font-size: 16px;
    text-transform: uppercase;
    border-bottom: 2px solid #2f2f2f;
    border-top: 2px solid #2f2f2f;
    padding: 12px 0 12px 0;
`

export default function SubHead(props) {
    return <S>{props.children}</S>
}
