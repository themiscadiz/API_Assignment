window.addEventListener('DOMContentLoaded', async () => {
    let metricValue;

    const specialUrl = "http://dataservice.accuweather.com/currentconditions/v1/349727?apikey=1NBU31pTPFmA4C7EgJhGvCZL1gRfx6ut"
    // define a custom function to wrap your await
    async function mySpecialRequest(url){
    try{
        const data = await fetch(url);
        const result = await data.json();
        getWeather(result);
        // console.log(result);
    } 
    catch(err){
        return err;
    }  
    }
    // call your function
    mySpecialRequest(specialUrl)

    async function getWeather(result){

            console.log(result[0].WeatherText);
            console.log(result);
            console.log(result[0].Temperature.Metric.Value);

            metricValue = result[0].Temperature.Metric.Value;
            document.getElementById("demo").innerHTML = metricValue; 
            
    }

})