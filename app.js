const submit = document.getElementById("searchUser");
const content = document.getElementById("content");
const city_name = document.getElementById("city_name");
const icon= document.getElementById("image");
const temperature = document.getElementById("temp");
const description = document.getElementById("desc");
const input = document.getElementById("search");

/*submit.addEventListener("click",()=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ input.value +'&appid=68b82ae616a34f3a7dd8284b0c915347')
.then(response =>response.json()).then(data =>{
    console.log(data);
    temperature.innerHTML = (data.main.temp - 273.15).toFixed(2) + "° celcius";
    description.innerHTML = data.weather[0].description;
    image.src = "http://openweathermap.org/img/wn/" +data.weather[0].icon + "@2x.png";
    city_name.innerHTML  = data.name;
});
});*/

input.addEventListener("keydown",(e)=>{
    if(e.code == "Enter"){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ input.value +'&appid=68b82ae616a34f3a7dd8284b0c915347')
.then(response =>response.json()).then(data =>{
    console.log(data);
    temperature.innerHTML = (data.main.temp - 273.15).toFixed(2) + "° celcius";
    description.innerHTML = data.weather[0].description;
    image.src = "http://openweathermap.org/img/wn/" +data.weather[0].icon + "@2x.png";
    city_name.innerHTML  = data.name;
    
});}
});
