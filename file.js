window.addEventListener('DOMContentLoaded', async () => {
    let localObservationDateTime;
    let localDate;
    let localTime;
    let metricValue;
    let imperialValue;
    let tempValue;

    let changeTempBool = true; 
    let changeText = false;
    
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
        console.log(result);

        nyLocalDate();
        nyLocalTime();            

        function nyLocalDate() {
            localObservationDateTime = result[0].LocalObservationDateTime; 
            localDate = localObservationDateTime.slice(0, 10);
            // localDate = new Date();
            document.getElementById("localDate").innerHTML = localDate;
        }

        function nyLocalTime() {
            // localObservationDateTime = result[0].LocalObservationDateTime; 
            // localTime = localObservationDateTime.slice(11, 16);
            // document.getElementById("localTime").innerHTML = localTime;

            localTime= new Date();
            let hours = localTime.getHours();
            let minutes = localTime.getMinutes();

            let timeString = "" + ((hours > 12) ? hours - 12 : hours);
            timeString  += ((minutes < 10) ? ":0" : ":") + minutes;
            timeString  += (hours >= 12) ? " P.M." : " A.M.";
            
            document.getElementById("localTime").innerHTML = timeString;
        }

        imperialValue = result[0].Temperature.Imperial.Value;
        metricValue = result[0].Temperature.Metric.Value;
        isDayTime = result[0].IsDayTime;
        hasPrecipitation = result[0].HasPrecipitation;

        if(isDayTime){
            isDayTime = "It is day"
        }
        else{
            isDayTime = "It is night"
        }


        if(hasPrecipitation == false){
            hasPrecipitation = "0%"
        }
        else{
            hasPrecipitation = result[0].HasPrecipitation
        }

        
        console.log('Default value of bool is', changeTempBool);

        document.getElementById("myBtn").addEventListener("click", function changeTemp(){
        
        if(changeTempBool){
            tempValue = metricValue;             
        }

        else{
            tempValue = imperialValue;
            changeText = true;                             
        }

        changeTempBool = !changeTempBool;
        changeText = !changeText; 
                
        console.log('Toggled bool is', changeTempBool);
            
        document.getElementById("tempValue").innerHTML = tempValue;

        if (changeText){
            document.getElementById("myBtn").value = "Fahrenheit";
        }
        else{
            document.getElementById("myBtn").value = "Celsius";
        }
        console.log("boton" + changeText);
    });
    tempValue = imperialValue;
    document.getElementById("tempValue").innerHTML = tempValue;

    document.getElementById("isDayTime").innerHTML = isDayTime;
    document.getElementById("hasPrecipitation").innerHTML = hasPrecipitation; 

    }

})