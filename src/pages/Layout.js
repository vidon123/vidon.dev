import React, { Component } from "react";
import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';

export default class Layout extends Component {

    render() {
        return (
            <Router>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                            <li><NavLink activeClassName="active" to="/skills">Skills</NavLink></li>
                            <li><NavLink activeClassName="active" to="/projects">Projects</NavLink></li>
                            <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
                        </ul>
                    </nav>
                </header>

                <main>
                    <Route render={({location}) => (
                        <TransitionGroup>
                            <CSSTransition key={location.key} timeout={450} classNames="fade">
                                <Switch location={location}>
                                    <Route exact path="/" component={Home} />
                                    <Route path="/projects" component={Projects} />
                                    <Route path="/skills" component={Skills} />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )} />
                </main>

                <footer>
                    &copy; Website made by <a href=" http://github.com/vidon123">Mattéo</a>
                </footer>

            </Router>
        );
    }

}
