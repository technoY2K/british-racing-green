import * as React from "react"
import SEO from "./src/components/seo"

const wrapPageElement = ({ element, props }) => {
    return (
        <React.Fragment>
            <SEO />
            {element}
        </React.Fragment>
    )
}

export { wrapPageElement }
