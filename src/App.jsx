import { useState } from 'react'

import Loader_Page from './components/loading/first_loading'
import Main_Page from './components/main_page/main_page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='app'>
      <Main_Page />
      <Loader_Page />
    </div>
  )
}

export default App
