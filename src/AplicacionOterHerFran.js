import React, { Component } from 'react'
import { Router, Link } from '@reach/router'
import Distribucion1OterHerFran from './Distribucion1OterHerFran'
import Distribucion2OterHerFran from './Distribucion2OterHerFran'
import Distribucion3OterHerFran from './Distribucion3OterHerFran'
import PruebasOterHerFran from './PruebasOterHerFran'

class AplicacionOterHerFran extends Component {

    render() {

        return (

            <div>
                <nav className="navFlexOterHerFran">
                    <div className="navFlexOterHerFran__item1"> <Link to="/Distribucion1OterHerFran"> Distribucion 1 </Link> </div>
                    <div className="navFlexOterHerFran__item2"> <Link to="/Distribucion2OterHerFran"> Distribucion 1 </Link> </div>
                    <div className="navFlexOterHerFran__item3"> <Link to="/Distribucion3OterHerFran"> Distribucion 1 </Link> </div>
                    <div className="navFlexOterHerFran__item4"> <Link to="/PruebasOterHerFran"> Distribucion 1 </Link> </div>
                </nav>

                <Router>
                    <Distribucion1OterHerFran path="/Distribucion1OterHerFran"/>
                    <Distribucion1OterHerFran path="/Distribucion2OterHerFran"/>
                    <Distribucion1OterHerFran path="/Distribucion3OterHerFran"/>
                    <Distribucion1OterHerFran path="/PruebasOterHerFran"/>
                </Router>

            </div>

        )

    }

}


export default AplicacionOterHerFran;
