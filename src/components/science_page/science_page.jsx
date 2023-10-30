
import { useState } from "react"

import Sci_filter from "./sci_filter"
import Sci_details from "./sci_details"
import Sci_support_pop from "./sci_support"

export default function Sci_page() {

    let [ active, set_active ] = useState(0)
    let [ filter, set_filter ] = useState(null)
    let [ content, set_content ] = useState(null)
    let [ support, set_support ] =useState(null)
    

    return (
        <div id='sci_page'>
            
            <div id="sci_buttons_top_div">
                <div id="sci_buttons_top">
                    <div id="sci_buttons_lower_div">
                        <div onClick={() => set_filter(true)} id='sci_filter'>
                        </div>
                        {filter && < Sci_filter set_filter={set_filter}/>}
                        <div id="sci_pages_div">
                            <div className="pages" id='sci_prev_page'
                            ></div>
                            <div className="pages" id='sci_next_page'></div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='sci_content_div'>
                
                <div id="sci_proj_div">

                    <div className="sci_proj" id='sci_proj_1' 
                    onClick={() => 
                    {
                    set_active('sci_proj_1')
                    document.getElementById('sci_proj_1').style.height='25%'
                    document.getElementById('sci_proj_2').style.height='15%'
                    document.getElementById('sci_proj_3').style.height='15%'
                    document.getElementById('sci_proj_4').style.height='15%'
                    document.getElementById('sci_proj_1').childNodes[0].style.height='50%'
                    setTimeout(function () {document.getElementById('sci_proj_1').childNodes[1].style.display='flex'}, 1000)
                    setTimeout(() => {
                        document.getElementById('sci_proj_1').childNodes[1].childNodes[2].childNodes[0].childNodes[0].style.width='75%' 
                    }, 1500)
                    }}>
                        <div className="sci_proj_upper">
                            <div className="sci_name_div">
                                <div className="sci_name_name">
                                    <p className="sci_name_p">New protein structure</p>
                                </div>
                                <div className="sci_lab">
                                    <p className="sci_lab_p">MIT Lab</p>
                                </div>
                            </div>
                            <div className="sci_id">
                                <div className="sci_id_div">
                                    <p className="sci_id_p">b-2834</p>
                                </div>
                            </div>
                            <div className="sci_hash">
                                <div className="sci_hash_div">
                                    <p className="sci_hash_p">#bio</p>
                                </div>
                            </div>
                        </div>
                        <div className="sci_proj_lower">
                            <div className="sci_proj_purpose">
                                <p className="sci_proj_purp">This is the purpose of the research.</p>
                            </div>
                            <div className="sci_proj_progress_perc_div">
                                <p className="sci_progress_proc">38%</p>
                            </div>
                            <div className="progress_bar">
                                <div className="progress_outer">
                                    <div className="progress_inner"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sci_proj" id='sci_proj_2'
                    onClick={() => 
                    {
                    document.getElementById(active).childNodes[1].style.display='none'
                    document.getElementById(active).childNodes[0].style.height='100%'
                    document.getElementById(active).childNodes[1].childNodes[2].childNodes[0].childNodes[0].style.width='0%'
                    document.getElementById('sci_proj_1').style.height='15%'
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
                    <div id='science_capital'>
                        <div id='capital_name_div'>
                            <div id='capital_name'>Capital</div>
                        </div>
                        <div id='capital_requested'>
                            <div id='sci_cap_text'>
                                <p id='sci_cap_p'>Requested</p>
                            </div>
                            <div id='sci_cap_money'>
                                <p id='sci_money'>$100,000</p>
                            </div>
                        </div>
                        <div id='capital_fulfillment'>
                            <div id='cap_ful_div'>
                                <p id='cap_ful_p'>Fulfillment</p>
                            </div>

                            <div id='cap_ful_money'>
                                <p id='sci_cap_perc'>20%</p>
                            </div>
                        </div>

                        <div id='capital_support'>
                            <button id='sci_sup_bt' onClick={() => set_support(true)}>support</button>
                        </div>

                    </div>
                    <div id='science_details'>
                        <div id='sci_det_upper'>
                            <div id='sci_pd_text'>
                                <p id='sci_pd_p'>Project Details</p>
                            </div>
                            <div id='sci_pd_next_div'>
                                <p id='sci_pd_next' onClick={() => {
                                document.getElementById('sci_details').style.left='0'
                                set_content(true)
                                }}>{'>'}</p>
                            </div>
                        </div>
                        <div id='sci_det_img'>

                        </div>
                    </div>

                    {support && <Sci_support_pop set_support={set_support} />}
                    <Sci_details content={content} set_content={set_content}/>
                </div>

            </div>
        </div>
    )
}