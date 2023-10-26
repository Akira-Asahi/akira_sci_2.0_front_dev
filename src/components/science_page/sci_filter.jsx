
import { useState } from "react"

import Value_pop from "./sci_value_pop"
import Category_pop from "./sci_category_pop"

export default function Sci_filter ( {set_filter} ) {

    let [ category, set_category ] = useState('attribute')
    let [ value, set_value ] = useState('value')
    let [ value_pop, set_value_pop ] = useState(false)
    let [ category_pop, set_category_pop ] = useState(false)
    

    return (
        <div id='sci_filter_pop'>
            <div id='filter_close' onClick={() => set_filter(false)}></div>
            <div id='filter_lower'>
                <div id='filter_lower_values'>
                    <div id='attribute'>
                        <button id='att_button' onClick={() => set_category_pop(true)} >{category}</button>
                        {category_pop && < Category_pop set_category={set_category} set_category_pop={set_category_pop}/>}
                    </div>
                    <div id='value'>
                        <button id='att_button' onClick={() => set_value_pop(true)}>{value}</button>
                        {value_pop && < Value_pop set_value_pop={set_value_pop} set_value={set_value}/>}
                    </div>
                </div>
                <div id='filter_go'>
                    <button id='filter_go_button' onClick={() => set_filter(false)}>GO</button>
                </div>
            </div>
        </div>
    )
}