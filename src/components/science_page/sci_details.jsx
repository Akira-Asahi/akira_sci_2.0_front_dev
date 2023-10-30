
import { useState } from "react"

import Sci_details_content from "./sci_details_content"

export default function Sci_details ( {content, set_content}) {

    return (
        <div id='sci_details'>
            {content && <Sci_details_content set_content={set_content}/>}
        </div>
    )
}