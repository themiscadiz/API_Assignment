# API_Assignment
 Accuweather API
<!-- Every README should start with an H1 -->
# The Good Project Readme Project
<!-- A one sentence description of the project or assignment -->
This is a project is a Website using the  Accu Weather API for the current wheather conditions in New York.

<!--![Logo](https://www.openmoji.org/data/color/svg/1F4D4.svg)-->

<!-- It is good practice to add an about or summary -->


<!-- It is essential to describe how to set up your project -->
## Setup
To setup the project you need access to a computer and the internet. To be able to see the website you can go to [Glitch Website](https://glitch.com/edit/#!/themiscadiz-api-assignment?path=file.js:14:29)

<!-- Any knowledge or tools you will need before hand -->
### Prerequisites

The following prerequisites are necessary:

A text editor - like VS Code
Terminal or Command line.

<!-- any installation needs should be defined -->
### Installation

To use your terminal or command line to locally host your website (in case of Mac):

1. Open Terminal
Type cd (don’t forget the space)
In Finder, navigate to the folder and Drag and drop into the Terminal.
In Terminal, type: browser-sync start --server -f -w
Server should launch, and you should see the correct ip address to navigate to. Something like this: localhost:3000
Notes: There a other ways to open a localhost. This is just my prefered method, because it automatically refreshes the website.

2. Create an account in [Accu Weather APIs] (https://developer.accuweather.com/)

<!-- Write instructions on how to start working on your project -->
### Develop
Accu Weather Account
After create a Accu weather account:
1. Go to **My Apps
2. Click **Add New App Button
3. In the Add App section choose:
-App Name *
-Where will the API be used? *Desktop Website
What will you be creating with this API? * Weather App
-What programming language is your APP written in? *Java Script
Is this Worldwide or Country specific use? * In this case: Country, US
-Click **Create App

4. You can see your API Key from My Apps page in developer.accuweather site.
5. From the API Reference click on:Current Conditions API
6. Click on Current Conditions
7. In Resource URL change the las value numbers of the link, for the unique ID of the city that you want to know the current location. Nwe York "Key": "349727"
8. Click **Send this Request** button

**In the Response section you are going to see what type of data the current Api give you**

9. In the cURL section you are going to see a link, that you can copy paste into your code.

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
    
    
**The getWheather() function is to access the result of the API. From console rou are going to be able to see the results of the API.
To Acces a specific data you need to access it as an array: ex. <code> var_name = result[0].LocalObservationDateTime; </code>

#### Now you are going to be able to use the API data in your site!

<!-- Notes about the deployment -->
### Deployment

To be able to see the website you can go to [Glitch Website](https://glitch.com/edit/#!/themiscadiz-api-assignment?path=file.js:14:29)

###Note:
**To be able to see your own project on Glitch you need to change in the link to the api, <code>http://</code> to <code>https://</code>

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

<!-- How you built this project - Include images, gifs, and notes here -->
## Process & Documentation

<!-- Any specific challenges or struggles documented -->
## Challenges & Struggles

<!-- Any questions you have -->
## Questions

<!-- References for resources and inspiration -->
## References

* Author First Name, Author Last Name. [Link]()
* Author First Name, Author Last Name. [Link]()
