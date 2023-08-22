import Principal from './Principal'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import { Switch, Route } from 'react-router-dom'

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Principal} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
        </Switch>

    );
}

export default App;