import React from "react"
import Grid from "@material-ui/core/Grid"

const h = window.innerHeight - document.documentElement.clientHeight

export default function X(props) {
    return (
        <Grid container>
            <Grid
                style={{ backgroundColor: "orange", height: `${100 - h}vh` }}
                item
                xs={8}
            >
                LEFT
            </Grid>
            <Grid
                container
                style={{ backgroundColor: "#004225" }}
                item
                xs={4}
                justify="center"
            >
                <Grid item xs={8}>
                    <ul>
                        <li>Home</li>
                    </ul>
                </Grid>
            </Grid>
        </Grid>
    )
}
