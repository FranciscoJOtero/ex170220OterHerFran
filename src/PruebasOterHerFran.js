import React, { Component } from "react";
import Img from 'react-image'

class Distribucion3OterHerFran extends Component {

    render() {

        return(

            <div className="fotoGrid">
                <div className="fotoGrid__f1">
                    <Img className="claseCss" src={require('./img/recurso.jpg')}/>
                </div>

                <div className="fotoGrid__f2">
                    <Img className="claseCss" src={require('./img/recurso2.jpg')}/>
                </div>
            </div>

        )

    }

}

export default Distribucion3OterHerFran