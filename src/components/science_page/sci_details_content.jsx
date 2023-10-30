


export default function Sci_details_content ( {set_content} ) {

    return (
        <div id='sci_details_content'>
            <div id='sci_det_close_div'>
                <div id='sci_det_close'
                onClick={() => document.getElementById('sci_details').style.left='100%'}
                >{'<'}</div>
            </div>
            <div id='sci_det_lower_div'>

                <div id='sci_det_lower_left'>
                    
                    <div id='sci_det_project'>

                    </div>
                    
                    <div id='sci_det_validation_div'>

                    </div>

                </div>

                <div id='sci_det_lower_right'>
                    
                    <div id='sci_det_capital_div'>

                    </div>

                    <div id='sci_det_team_div'>

                    </div>

                    <div id='sci_det_updates_div'>

                    </div>

                </div>

            </div>
        </div>
    )
}