import './styles/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from './components/Menu'
import Footer from './components/Footer'

function App() {
  return (
    <div className='wrapper'>
      <Router>
        <div className='main-container'>
          <Menu />
          <Switch>
            <h1>Hi</h1>
          </Switch>
          <Footer />    
        </div>
      </Router>
    </div>
  )
}

export default App
