import React, {Component} from 'react'
import {render} from 'react-dom'
import { HashRouter, Route } from 'react-router-dom';
import MainComponent from './main/layout/MainComponent';



export default class App extends Component {
    render() {

        return (
            <HashRouter>
                <MainComponent/>
            </HashRouter>
        )
        
    }
}
