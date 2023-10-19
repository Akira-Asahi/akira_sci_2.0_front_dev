
import { useState } from "react"

import Sci_filter from "./sci_filter"

export default function Sci_page() {

    let [ active, set_active ] = useState(0)
    

    return (
        <div id='sci_page'>
            
            <div id="sci_buttons_top_div">
                <div id="sci_buttons_top">
                    <div id="sci_buttons_lower_div">
                        <div id='sci_filter'></div>
                        <div id="sci_pages_div">
                            <div className="pages" id='sci_prev_page'
                            onClick={() => alert('Previous page')}></div>
                            <div className="pages" id='sci_next_page'></div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='sci_content_div'>
                
                <div id="sci_proj_div">

                    <div className="sci_proj" id='sci_proj_1' 
                    onClick={() => 
                    {document.getElementById('sci_proj_1').style.height='25%'
                    document.getElementById('sci_proj_2').style.height='15%'
                    document.getElementById('sci_proj_3').style.height='15%'
                    document.getElementById('sci_proj_4').style.height='15%'
                    }}>
                        <div className="sci_proj_upper">
                            <div className="sci_name_div"></div>
                            <div className="sci_id"></div>
                            <div className="sci_hash"></div>
                        </div>
                        <div className="sci_proj_lower">
                            <div className="sci_proj_purpose"></div>
                            <div className="sci_proj_progress_bar_div">
                                <div className="sci_progress_proc"></div>
                                <div className="sci_progress_bar"></div>
                            </div>
                            <div className="progress"></div>
                        </div>
                    </div>

                    <div className="sci_proj" id='sci_proj_2'
                    onClick={() => 
                    {document.getElementById('sci_proj_1').style.height='15%'
                    document.getElementById('sci_proj_2').style.height='25%'
                    document.getElementById('sci_proj_3').style.height='15%'
                    document.getElementById('sci_proj_4').style.height='15%'
                    }}>
                    </div>

                    <div className="sci_proj" id='sci_proj_3'
                    onClick={() => 
                    {document.getElementById('sci_proj_1').style.height='15%'
                    document.getElementById('sci_proj_2').style.height='15%'
                    document.getElementById('sci_proj_3').style.height='25%'
                    document.getElementById('sci_proj_4').style.height='15%'
                    }}>
                    </div>

                    <div className="sci_proj" id='sci_proj_4'
                    onClick={() => 
                    {document.getElementById('sci_proj_1').style.height='15%'
                    document.getElementById('sci_proj_2').style.height='15%'
                    document.getElementById('sci_proj_3').style.height='15%'
                    document.getElementById('sci_proj_4').style.height='25%'
                    }}
                    ></div>

                </div>

                <div id="sci_info_div">
                    <div id='science_capital'></div>
                    <div id='science_details'></div>
                </div>

            </div>
        </div>
    )
}