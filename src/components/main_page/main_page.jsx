
import { useState } from "react"

import Landing_Page from "../landing_page/landing_page"

export default function Main_Page() {

    let [ page, set_page ] = useState('landing')

    return (
        <div id='main_page'>
            
            <div id='content'>
                {page == 'landing' && <Landing_Page /> }
            </div>

            <div id='lower_buttons'>
                <button onClick={() => set_page('science')}>science</button>
                <button>tech</button>
                <button>about</button>
            </div>
        </div>
    )
}