import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem';

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
];

class ForecastExtended extends Component{

    renderForecastItemDays(){
        return days.map(day=>(<ForecastItem weekDay={day}/>))//mapeo
    }

    render(){
        const {city} = this.props;
        return(
        <div>
            <h2 className='forecast-title'>Pronóstico Extendido para {city}</h2>
            {this.renderForecastItemDays()}
        </div>);
    }
}

ForecastExtended.propTypes={
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;