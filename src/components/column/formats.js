import React from "react"
import styled from "styled-components"

const M = styled.div`
    text-align: center;

    span {
        text-align: center;
        line-height: normal;
        font-family: "Playfair Display", serif;
        display: block;
        margin: 0 auto;
    }

    span:nth-child(1) {
        font-weight: 700;
        font-size: 30px;
        text-transform: uppercase;
        padding: 10px 0 10px 0;
    }

    span:nth-child(2) {
        font-weight: 400;
        font-style: italic;
        font-size: 18px;
        box-sizing: border-box;
        padding: 10px 0 10px 0;

        &:before {
            border-top: 1px solid #2f2f2f;
            content: "";
            width: 100px;
            height: 7px;
            display: block;
            margin: 0 auto;
        }

        &:after {
            border-bottom: 1px solid #2f2f2f;
            content: "";
            width: 100px;
            height: 13px;
            display: block;
            margin: 0 auto;
        }
    }
`

export function Mercury(props) {
    return <M>{props.children}</M>
}
