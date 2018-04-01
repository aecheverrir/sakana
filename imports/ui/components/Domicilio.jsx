import React from 'react';
import DomicilioItem from "./Domicilio/DomicilioItem"

export default class Hero extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render(){

        var styleProcessing = { 
            "color": "#5bc0de"
        }; 
        var styleFood = { 
            "color": "#ff5c5c"
        };
        var styleSending = { 
            "color": "#ffa500"
        };
        var styleFinished = { 
            "color": "#25d366"
        };
        var styleCanceled = { 
            "color": "#000000"
        };

        return(
            <div>
                <DomicilioItem state="Procesando Solicitud ... " style={styleProcessing} date="17/08/2018" price="$30.000" address="Calle 12 #22 -10" />
                <DomicilioItem state="Preparando Comida" style={styleFood} date="15/08/2018" price="$40.000" address="Calle 12 #22 -10" />
                <DomicilioItem state="Comida en Camino" style={styleSending} date="14/08/2018" price="$35.000" address="Calle 12 #22 -10" />
                <DomicilioItem state="Domicilio Finalizado" style={styleFinished} date="10/08/2018" price="$38.000" address="Calle 12 #22 -10" />
                <DomicilioItem state="Solicitud Rechazada" style={styleCanceled} date="10/08/2018" price="$38.000" address="Calle 12 #22 -10" />
            </div>
        )
    }
}
