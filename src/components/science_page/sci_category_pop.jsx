


export default function Category_pop ( { set_category, set_category_pop } ) {
    return (
        <div id='category_pop'>
            <div id='category_li_div'>
                <div className="category_li" onClick={() => {
                    set_category('discipline')
                    set_category_pop(false)
                }}>discipline</div>
                <div className="category_li" >id</div>
                <div className="category_li">name</div>
            </div>
        </div>
    )
}