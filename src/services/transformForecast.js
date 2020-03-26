import moment from 'moment';

const transformForecast = data =>(
    data.list.filter(item=>(
        moment.unix(item.dt).utc().hour()=== 6 ||
        moment.unix(item.dt).utc().hour()=== 12 ||
        moment.unix(item.dt).utc().hour()=== 18
         //Colocar moment.unix(item.dt).utc().hour()=== 66 por si el pais esta en utc no multiplo de 3 
        ))
);

export default transformForecast;