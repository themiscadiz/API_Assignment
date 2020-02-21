<!-- Every README should start with an H1 -->
# API_Assignment - Working with Accu Weather
<!-- A one sentence description of the project or assignment -->
This is a project is a Website using the  Accu Weather API for the current wheather conditions in New York.

![img1](https://github.com/themiscadiz/API_Assignment/blob/master/Images%20for%20Doc%20week%203/0.png?raw=true)

<!-- It is good practice to add an about or summary -->


<!-- It is essential to describe how to set up your project -->
## Setup
To setup the project you need access to a computer and the internet. 
To be able to see the website you can go to [Glitch Website](https://glitch.com/edit/#!/themiscadiz-api-assignment?path=file.js:14:29)

<!-- Any knowledge or tools you will need before hand -->
## Prerequisites

The following prerequisites are necessary:

A text editor - like VS Code
Terminal or Command line.

<!-- any installation needs should be defined -->
## Installation

To use your terminal or command line to locally host your website (in case of Mac):

1. Open Terminal
Type cd (don’t forget the space)
In Finder, navigate to the folder and Drag and drop into the Terminal.
In Terminal, type: browser-sync start --server -f -w
Server should launch, and you should see the correct ip address to navigate to. Something like this: localhost:3000
Notes: There a other ways to open a localhost. This is just my prefered method, because it automatically refreshes the website.

2. Create an account in [Accu Weather APIs] (https://developer.accuweather.com/)

<!-- Write instructions on how to start working on your project -->
## Develop
Accu Weather Account
After create a Accu weather account:

1. Go to **My Apps** in the Accu Weather APIs website
![img7](https://github.com/themiscadiz/API_Assignment/blob/master/Images%20for%20Doc%20week%203/7.png?raw=true)

2. Click **Add New App Button**

3. In the **Add App** section choose:
    *App Name
    *Where will the API be used? - Desktop Website
    *What will you be creating with this API? - Weather App
    *What programming language is your APP written in? - Java Script
    *Is this Worldwide or Country specific use? - In this case: Country, US
    
-Click **Create App**

4. You can see your API Key from My Apps page in developer.accuweather site.

5. From the API Reference click on:Current Conditions API
![img](https://github.com/themiscadiz/API_Assignment/blob/master/Images%20for%20Doc%20week%203/6.png)

6. Click on Current Conditions

7. In Resource URL change the las value numbers of the link, for the unique ID of the city that you want to know the current location. New York "Key": "349727"
![img](https://github.com/themiscadiz/API_Assignment/blob/master/Images%20for%20Doc%20week%203/5.png)

8. Click **Send this Request** button

**In the Response section you are going to see what type of data the Api gives you**

9. In the cURL section you are going to see a link that you can copy paste into your code.

![img](https://github.com/themiscadiz/API_Assignment/blob/master/Images%20for%20Doc%20week%203/4.png)

Save the link into a variable inside file.js. 

**To get the data from the API in your web application you are going to need to used and async function()**

To see how to apply it you can follow the file.js in this repository, but basically you need to add this code:
<pre><code>const specialUrl = "https://dataservice.accuweather.com/currentconditions/v1/349727?apikey=-------"
    
    async function mySpecialRequest(url){
    try{
        const data = await fetch(url);
        const result = await data.json();
        getWeather(result);
        // console.log(result);
    } 
    catch(err){
        return err; }  
    }
    // call your function
    mySpecialRequest(specialUrl)
    
    async function getWeather(result){
    console.log(result);
    </code></pre>
    
    
**The getWheather() function is to access the result of the API. From console you are going to be able to see the results from the API call.**

![img](https://github.com/themiscadiz/API_Assignment/blob/master/Images%20for%20Doc%20week%203/3.png)

To Acces specific data you need to access it as an array: Ex. <code> var_name = result[0].LocalObservationDateTime; </code>

#### Now you are going to be able to use the API data in your site!

<!-- Notes about the deployment -->
## Deployment

To be able to see the website you can go to [Glitch Website](https://glitch.com/edit/#!/themiscadiz-api-assignment?path=file.js:14:29)

### Note for deployment on Glitch:
**To be able to see your own project on Glitch you need to change in the link to the api,** <code>http://</code> to <code>https://</code>

## Built with
* [Figma](https://www.figma.com/)
* [VS Code](https://code.visualstudio.com/)
* [Accu Weather APIs](https://developer.accuweather.com/)
* [Github](https://github.com)
* [Glitch](https://glitch.com/)

## Authors
* [Themis Garcia](https://github.com/themiscadiz) -- NYU ITP student

***
***
***

<!-- For your assignments you might consider  -->
# Notes & Process

### Sketching
For this assignment I sketch a simple website were I can interact with some of the content of the Current Weather api. Although this API provides little information I decided to use this one, undestanding that accesing the API it was going to be a challenge. 
For this sketch I designed an interface where the user can click a button to change the value from the Celsius to Fahrenheit. The information is displayed in the same area. The user is also able to see sother data such as Precipitation, Date, day or night, and how are the conditions of the day (cloudy, sunny, etc.). 

![img](https://github.com/themiscadiz/API_Assignment/blob/master/Images%20for%20Doc%20week%203/2.png)
![img](https://github.com/themiscadiz/API_Assignment/blob/master/Images%20for%20Doc%20week%203/1.png)


### Accesing and API
Using the developer site of accuweather was very accesible. 
The most challenging part was to be able to see the data from console in my localhost. I used the async function to access the results. However, I spent a lot of time trying to figure it out how to acces each part of the result, because it wasn't clear to me that I was getting an array. After that, I was able to access each part of the array.

### async function and fetch()
I'm still not completly sure how tu use this function and in what conditions makes sense to use it. However, to access the API data, I created another async function to be able to manipulate it. I think that to be able to manipulate data from the API this has to happen in a async function. I started this exercise with the example code shown on class.

### getElement
I used document.getElementById("localDate").innerHTML when I want to use the data in the html file.

### API data to dynamically change the DOM - Interactive Button
Creating the buttons was the other challenging part of this project. I wasn't sure how to make a button change a value from the file.js. 

![img](https://github.com/themiscadiz/API_Assignment/blob/master/Images%20for%20Doc%20week%203/2.gif)

I managed this was using:

In file.js
<code>document.getElementById("myBtn").addEventListener("click", function changeTemp(){...}</code>
the .addEventListener help me to open a communication with the html elemnts.

In index.html
<code><button><input type="button" id="myBtn" value="Celsius"></button></code>
Using "value" in the html I was able to manipulate the results as a booloean statement.


![img](https://github.com/themiscadiz/API_Assignment/blob/master/Images%20for%20Doc%20week%203/8.png)

### new Date();
To get the local date a used a built-in function from js that gives you yout current time. I decided to use this function instead the time from the API because this one is updated each time that the user refresh the website. Instead the one in the API update as frequent as the API data update. Wich means that sometimes minutes pass and the time hasn't changed.

### html and css
The website has an responsive design where the information of precipitation, time and day, changes from a row into a column. Because I have more dynamic things to go around in the code, I had more difficulties creating and styling the website. However at the end I decided with a simple design approach to be able focus on the functionality. 

<!-- How you built this project - Include images, gifs, and notes here ## Process & Documentation -->

<!-- Any specific challenges or struggles documented -->
## Challenges & Struggles
This project was very challenging being the first time that I attempted to use an API. The most challenging processes were: 
1. Creating an interactive button
2. Accesing the API data
3. Understanding how to use: .addEventListener | getElementById | async function | fetch

<!-- Any questions you have -->
## Questions
1. I am not sure if I had the best approach to create a dynamic button.
2. How to add the degree symbol (°)? adding this to the information returned by the API.

<!-- References for resources and inspiration -->

