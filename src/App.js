import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import classes from './App.module.css';
import Home from './pages/Home';
import About from './pages/About';
import Something from './pages/Something';
import Faq from './pages/Faq';
import PageNotFound from './pages/PageNotFound';

const App = () => {
    
    return (
        <div className={classes.container}>
            <div className={classes.nav}>
                <Link exact="true" to="/" className={classes.navItem}>Home</Link>
                <Link to="/about" className={classes.navItem}>About</Link>
                <Link to="/something" className={classes.navItem}>Something</Link>
                <Link to="/faq" className={classes.navItem}>FAQ</Link>
            </div>
            <div className={classes.content}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/something" component={Something} />
                    <Route path="/faq" component={Faq} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </div>
        </div>
    )
}

export default App;