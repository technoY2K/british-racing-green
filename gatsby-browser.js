import * as React from "react"
import SEO from "./src/components/seo"

import { wrapRootElement } from "./src/apollo/wrap-root-element"

const wrapPageElement = ({ element, props }) => {
    return (
        <React.Fragment>
            <SEO />
            {element}
        </React.Fragment>
    )
}

export { wrapPageElement }
