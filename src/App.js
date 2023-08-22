import Principal from './Principal'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import { Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import { Switch, Route } from 'react-router-dom'
import './App.css';


function App() {
    return (

        <Switch>
            <Route exact path="/" component={Principal} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/news" component={News} />
            <Route path="/cryptocurrencies" component={Cryptocurrencies} />
            {/* <Route path="/crypto/:id" component={CryptoDetails} /> */}
        </Switch>

    );
}

export default App;