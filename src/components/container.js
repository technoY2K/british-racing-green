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
    grid-template-rows: 25% 40% auto;
    grid-template-areas:
        "n h h h"
        "n y . a"
        "n f f f";

    & > header {
        grid-area: h;
    }

    & > nav {
        grid-area: n;
    }

    & > main {
        grid-area: y;
    }

    & > aside {
        grid-area: a;
    }

    & > footer {
        grid-area: f;
    }
`
