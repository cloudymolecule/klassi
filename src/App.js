import './styles/app.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from './components/Menu'
// import Display from './components/Display'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import Search from './components/Search'
import Recent from './components/Recent'
import MyAccount from './components/MyAccount'
import NewListing from './components/NewListing'
import About from './components/About'

function App() {
  return (
    <div className='wrapper'>
      <Router>
        <div className='main-container'>
          <Menu />
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/recent' component={Recent} />
            <Route exact path='/my-account' component={MyAccount} />
            <Route exact path='/new-listing' component={NewListing} />
            <Route exact path='/about' component={About} />
          </Switch>
          <Footer />    
        </div>
      </Router>
    </div>
  )
}

export default App
