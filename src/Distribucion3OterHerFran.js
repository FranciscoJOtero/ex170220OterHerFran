import React, { Component } from "react";
import Img from 'react-image'

class Distribucion3OterHerFran extends Component {

    render() {

        return(

            <div className="fotosGrid">
                <div className="fotosGrid__f1">
                    <Img className="claseCss" src={require('./img/Paisaje1.jpg')}/>
                </div>

                <div className="fotosGrid__f2">
                    <Img className="claseCss" src={require('./img/Paisaje2.jpg')}/>
                </div>

                <div className="fotosGrid__f3">
                    <Img className="claseCss" src={require('./img/Paisaje3.jpg')}/>
                </div>
                    
                <div className="fotosGrid__f4">
                    <Img className="claseCss" src={require('./img/Paisaje4.jpg')}/>
                </div>
                
                <div className="fotosGrid__f5">
                    <Img className="claseCss" src={require('./img/Paisaje5.jpg')}/>
                </div>

                <div className="fotosGrid__f6">
                    <Img className="claseCss" src={require('./img/Paisaje6.jpg')}/>
                </div>

                <div className="fotosGrid__f7">
                    <Img className="claseCss" src={require('./img/Paisaje7.jpg')}/>
                </div>

                <div className="fotosGrid__f8">
                    <Img className="claseCss" src={require('./img/Paisaje8.jpg')}/>
                </div>
            </div>

        )

    }

}

export default Distribucion3OterHerFran