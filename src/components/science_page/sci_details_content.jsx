
import { useState } from "react";

export default function Sci_details_content ( {set_content} ) {

    setTimeout(() => {
        document.getElementById('sci_details_content').style.opacity='1'
    }, 2500);

    return (
        <>
        {
        <div id='sci_details_content'>            
            <div id='sci_det_close_div'>
                <div id='sci_det_close'
                onClick={() => {
                    document.getElementById('sci_details_content').style.opacity='0'
                    setTimeout(() => {
                        document.getElementById('sci_details').style.left='100%'
                        document.getElementById('sci_details').style.backdropFilter='none'
                        set_content(null)
                    }, 1000);
                    
            }}
                >{'<'}</div>
            </div>
            <div id='sci_det_lower_div'>

                <div id='sci_det_lower_left'>
                    
                    <div id='sci_det_project'>
                       <div id="sci_det_pr_left_div">
                            <div id="sci_det_pr_lab_div">
                                <div id='sci_det_pr_lab_p'>MIT</div>
                            </div>
                            <div id='sci_det_pr_proj_div'>
                                <div id='sci_det_pr_proj_p'>The new synthetic protein</div>
                            </div>
                       </div>
                       <div id="sci_det_pr_right_div">
                            <div id='sci_media'>media</div>
                            <div id='sci_youtube'>youtube</div>
                       </div>
                    </div>
                    
                    <div id='sci_det_validation_div'>
                        <div id='sci_det_upper_div'>
                            <div id='sci_valid_div'>
                                <p id='sci_det_valid_p'>Validation</p>
                            </div>
                            <div id='sci_sources_div'>
                                <div id='sci_sources_p'>sources</div>
                            </div>
                        </div>

                        <div id='sci_det_valid_text'>
                            This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. 
                        </div>
                    </div>

                </div>

                <div id='sci_det_lower_right'>
                    
                    <div id='sci_det_capital_div'>
                        
                        <div id='sci_det_top_div'>
                            <div id='sci_det_cap_p'>Capital</div>
                            <div id='sci_det_details'>details</div>
                        </div>

                        <div id='sci_det_middle_div'>
                            <div id='sci_det_req_div'>
                                <div id='sci_det_req'>$100,000</div>
                            </div>
                            <div id='sci_det_proc_div'>
                                <div id='sci_det_proc'>20%</div>
                            </div>
                        </div>

                        <div id='sci_det_lower'>
                            <div id='sci_prog_outer'>
                                <div id="sci_prog_inner"></div>
                            </div>
                        </div>

                        <div id='sci_det_lowest'>
                            <div id='sci_det_sup'>support</div>
                        </div>

                    </div>

                    <div id='sci_det_team_div'>
                        <div id='sci_det_upper_div'>
                            <p id='sci_det_upper_p'>Team</p>
                        </div>
                        <div id='sci_det_lower_div'>
                            <div id='team_left_div'>
                                <div id='team_ls'>
                                    <li className="li_sci_team">Dr. Nakamura</li>
                                    <li className="li_sci_team">Dr. Johnson</li>
                                </div>
                            </div>

                            <div id='team_right_div'>
                                <div id='team_main_dr'>Dr. Kamado</div>
                            </div>
                        </div>
                    </div>

                    <div id='sci_det_updates_div'>
                        <div id='det_updates_upper_div'>
                            <div id='updated_upper_left'>
                                <p id='updates_name'>Updates</p>
                            </div>
                            <div id='det_updates_upper_right'>
                                <div id='det_updates_more'>{'>'}</div>
                            </div>
                        </div>

                        <div id='updates_text_div'>
                            <div id='updates_perc'>34%</div>
                            <div id='updates_dev_text'>development</div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        }
    </>
    )
}