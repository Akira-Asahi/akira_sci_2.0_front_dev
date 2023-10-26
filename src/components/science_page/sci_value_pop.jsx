


export default function Value_pop ( {set_value_pop, set_value} ) {
    return (
        <div id='value_pop'>
            <div id='value_li_div'>
                <div className="value_li" onClick={() => {
                    set_value('biology')
                    set_value_pop(false)
                }}>biology</div>
                <div className="value_li" >physics</div>
                <div className="value_li">chemistry</div>
            </div>
        </div>
    )
}