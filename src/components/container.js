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
    grid-template-areas:
        "x x x x"
        "y y . i"
        ". . z z";

    & > header {
        grid-area: x;
    }

    & > main {
        grid-area: y;
    }

    & > div {
        grid-area: i;
    }

    & > footer {
        grid-area: z;
    }
`
