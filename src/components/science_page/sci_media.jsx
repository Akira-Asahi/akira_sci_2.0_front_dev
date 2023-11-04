


export default function Sci_media ( {set_media}) {

    return (
        <div id='sci_media_pop'>
            <div id='sci_media_close_div'>
                <div id="sci_media_close" onClick={() => set_media(null)}></div>
            </div>

            <div id="sci_media_pages_div">
                <div id='sci_media_pages_prev'></div>
                <div id='sci_media_pages_next'></div>
            </div>

            <div id='sci_media_img_div'>

            </div>

            <div id='sci_media_descr_div'>
                <div id='sci_media_descr_p'>This is the photo of the new protein structures in vitro.</div>
            </div>

        </div>
    )
}