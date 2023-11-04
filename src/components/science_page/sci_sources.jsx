


export default function Sci_sources( { set_sources }) {

    return (
        <div id="sci_sources_pop">

            <div id='sci_sources_close_div'>
                <div id='sci_sources_close' onClick={() => set_sources(null)}></div>
            </div>

            <div id="sci_sources_li_div">
                <li className="sci_sources_li">source 1</li>
                <li className="sci_sources_li">source 2</li>
            </div>
            
        </div>
    )
}