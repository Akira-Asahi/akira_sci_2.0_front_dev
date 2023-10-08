
import Loader from "./loader"
import Loader_Logo from "./loader_logo"

export default function Loader_Page() {
    return (
        <div id='loader_page'>

            <div id='loader_page_logo_div'>
                <div id='loader_sci'>sci</div>
                <Loader_Logo />
                <div id='loader_tech'>tech</div>
            </div>

            <div id='loader_page_loader_div'>
                <Loader />
            </div>
        </div>
    )
}