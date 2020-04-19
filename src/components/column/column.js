import React from "react"
import styled from "styled-components"

const Col = styled.div`
    line-height: 20px;
    width: 24.5%;
    display: inline-block;
    padding: 0 2% 0 1%;
    vertical-align: 50px;
    transition: all 700ms;
    & + div {
        border-left: 1px solid #2f2f2f;
    }

    @media only all and (max-width: 1200px) {
        width: 32.5%;
        padding: 3%;
    }

    @media only all and (max-width: 900px) {
        padding: 4%;
        width: 48.5%;
    }

    @media only all and (max-width: 600px) {
        padding: 2%;
        width: 100%;

        & + div {
            border-left: none;
            
        
    }
`

export default function Column(props) {
    return <Col>{props.children}</Col>
}
