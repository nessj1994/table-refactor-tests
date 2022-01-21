import {render} from 'react-dom'

import App from './App'

const rootElement = document.getElementById('root')
render(<App />, rootElement)

const stuff = {
  a: 1,
  b: 'sasdsad',
  c: true,
}

const fack: 'a' | 'b' | 'c' | 'd' = 'd'

const mmm = stuff[fack]
