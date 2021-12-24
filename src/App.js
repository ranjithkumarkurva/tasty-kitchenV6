import {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Restaurant from './components/Restaurant'
import OrderSuccess from './components/OrderSuccess'
import OrderLists from './components/OrderLists'
import NotFound from './components/NotFound'
import ToggleChanges from './Context/ToggleChanges'
import ProtectedRoute from './components/ProtectedRoute'

class App extends Component {
  state = {activeRating: '', SavedList: [], count: 0, onClickAdd: false}

  changeActiveRating = activeRating => {
    this.setState({activeRating})
  }

  addToSavedList = Food => {
    this.setState(prevState => ({
      SavedList: [...prevState.SavedList, Food],
    }))
  }

  onClickChange = onClickAdd => {
    this.setState({onClickAdd})
  }

  onUpdateCount = count => {
    this.setState({count})
  }

  render() {
    const {activeRating, SavedList, count, onClickAdd} = this.state
    console.log(SavedList)

    return (
      <ToggleChanges.Provider
        value={{
          activeRating,
          changeActiveRating: this.changeActiveRating,
          SavedList,
          addToSavedList: this.addToSavedList,
          count,
          onUpdateCount: this.onUpdateCount,
          onClickAdd,
          onClickChange: this.onClickChange,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/order" component={OrderLists} />
            <ProtectedRoute
              exact
              path="/orderSuccess"
              component={OrderSuccess}
            />
            <ProtectedRoute exact path="/:id" component={Restaurant} />
            <ProtectedRoute path="/not-found" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ToggleChanges.Provider>
    )
  }
}

export default App
