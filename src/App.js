import Principal from './Principal'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import { News, Cryptocurrencies, CryptoDetails, } from './components';
import { Switch, Route } from 'react-router-dom'
import Cart from './components/Cart';
import './App.css';

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Principal} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/news" component={News} />
            <Route path="/cryptocurrencies" component={Cryptocurrencies} />
            <Route path="/crypto/:coinId" component={CryptoDetails} />
            <Route path="/cart" component={Cart} />

        </Switch>

    );
}

export default App;