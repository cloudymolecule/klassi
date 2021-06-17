import './styles/app.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from './components/Menu'
import Display from './components/Display'
import Footer from './components/Footer'

function App() {
  return (
    <div className='wrapper'>
      <Router>
        <div className='main-container'>
          <Menu />
          <Switch>
            <Display />
          </Switch>
          <Footer />    
        </div>
      </Router>
    </div>
  )
}

export default App
