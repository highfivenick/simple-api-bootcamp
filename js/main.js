document.querySelector('button').addEventListener('click', getWeather) //selecting the button element from the html and making it run the function getWeather (which will be created in the following lines) when clicked

function getWeather(){
    let search = document.querySelector('input').value
    console.log(search)
    let url = `https://www.superheroapi.com/api.php/4529675383738909/search/${search}`
    console.log(url)
    fetch(url)
    .then (res => res.json())
    .then (data => {
        console.log(data)
        
        document.querySelector('img').src = data.results[0].image.url
        
        document.querySelector('h1').innerText = data.results[0].name
        
        document.querySelector('h2').innerText = `Name: ${data.results[0].biography['full-name']}`
        
        document.querySelector('h3').innerText = `Publisher: ${data.results[0].biography.publisher}`
        

        
    })
    .catch(err => {
        alert(`error ${err}`)
    })
}

