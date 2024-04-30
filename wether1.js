// const APIKEY = 'b7cd362a0021211993104a6d8513df58&units=metric';

 var searchInput = document.querySelector('input').value;
 var searchButton = document.querySelector('button');

 async function getWeather(city){
     
    var ans = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b7cd362a0021211993104a6d8513df58&units=metric`);
    console.log(ans);
    var result =  await ans.json()
    console.log(result);
    
}
searchButton.addEventListener('click', ()=>{
    getWeather(searchInput.value);
})
