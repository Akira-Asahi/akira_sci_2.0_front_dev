
import { useState } from "react"

import Landing_Page from "../landing_page/landing_page"
import Sci_page from "../science_page/science_page"
import Tech_page from "../tech_page/tech_page"

export default function Main_Page() {

    let [ page, set_page ] = useState('landing')
    let [ sci_button, set_sci_button ] = useState('science')
    let [ tech_button, set_tech_button ] = useState('tech')
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
                {sci_button == 'science' && <button className="lower_buttons_but" onClick={() => {set_page('science')
                set_sci_button('sci_updates')
                set_tech_button('tech')}}>science</button>}
                {sci_button == 'sci_updates' && <button className="lower_buttons_but" onClick={() => {set_page('science')
                set_sci_button('science')}}>updates</button>}
                </div>
                
                <div className="lower_button_div">
                {tech_button == 'tech' && <button className="lower_buttons_but" onClick={() => {set_page('tech')
                set_tech_button('tech_updates')
                set_sci_button('science')}}>tech</button>}
                {tech_button == 'tech_updates' && <button className="lower_buttons_but" onClick={() => {set_page('tech')
                set_sci_button('science')}}>updates</button>}
                </div>

                <div className="lower_button_div">
                <button className="lower_buttons_but">about</button>
                </div>
            </div>
        </div>
    )
}