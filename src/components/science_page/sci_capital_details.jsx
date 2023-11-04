
import { useState } from "react";

export default function Sci_capital_details ( { set_capital }) {

    return (
        <div id='sci_cap_details'>
            <div id="sci_cap_close_div">
                <div id="sci_cap_close" onClick={() => set_capital(null)}></div>
            </div>
            
            <div id='sci_cap_det_div'>
                <div id='sci_cap_det_div_req'>
                    <div id='sci_cap_det_req_left'>
                        <div id='sci_cap_det_req_p'>Requested</div>
                    </div>

                    <div id='sci_cap_det_req_right'>
                        <div id='sci_cap_det_req_mon_p'>$200,000</div>
                    </div>
                </div>

                <div id='sci_cap_det_det_div'>
                    <div className="sci_cap_li">
                        <div className='sci_mon_text'>Tools</div>
                        <div className='sci_mon_mon'>$150,00</div>
                        <div className="sci_mon_perc">80%</div>
                    </div>

                    <div className="sci_cap_li">
                        <div className='sci_mon_text'>Tools</div>
                        <div className='sci_mon_mon'>$150,00</div>
                        <div className="sci_mon_perc">80%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}