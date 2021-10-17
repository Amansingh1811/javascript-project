// GET https://icanhazdadjoke.com/
const jokes = document.querySelector('#jokes')
const jokeBtn = document.querySelector('#jokebtn')

const generatejokes = ()=>{
    const setheader = { 
        headers:{
           Accept: "application/json"
        }
    }
    fetch('https://icanhazdadjoke.com',setheader)
    .then((res)=> res.json())
    .then((data)=>{
        jokes.innerHTML = data.joke;
    })
    .catch((error)=>{
           console.log(error);
       })
    }
   generatejokes();
jokebtn.addEventListener('click', generatejokes);
