
import { useState } from "react"

import Landing_Page from "../landing_page/landing_page"
import Sci_page from "../science_page/science_page"
import Tech_page from "../tech_page/tech_page"

export default function Main_Page() {

    let [ page, set_page ] = useState('landing')
    let [ sci_button, set_sci_button ] = useState('science')
    let [ category, set_category ] = useState(null)
    let [ proj_page, set_proj_page] = useState(0)

    return (
        <div id='main_page'>
            
            <div id='content'>
                {page == 'landing' && <Landing_Page /> }
                {page == 'science' && <Sci_page />}
                {page == 'tech' && <Tech_page />}
            </div>

            <div id='lower_buttons'>

                <div className="lower_button_div">
                <button onClick={() => {set_page('science')
                set_sci_button('sci updates')}}>{sci_button}</button>
                </div>
                <div className="lower_button_div">
                <button onClick={()=>{set_page('tech')
                set_sci_button('science')}}>tech</button>
                </div>
                <div className="lower_button_div">
                <button>about</button>
                </div>
            </div>
        </div>
    )
}