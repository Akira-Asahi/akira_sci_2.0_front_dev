
import Sci_filter from "./sci_filter"

export default function Sci_page() {

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
                    <div className="sci_proj"></div>
                    <div className="sci_proj"></div>
                    <div className="sci_proj"></div>
                    <div className="sci_proj"></div>
                </div>
                <div id="sci_info_div"></div>
            </div>
        </div>
    )
}