import { useState } from 'react'

import Loader_Page from './components/loading/first_loading'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='app'>
      <Loader_Page />
    </div>
  )
}

export default App
