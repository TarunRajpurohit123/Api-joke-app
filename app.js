
fetch('https://icanhazdadjoke.com/slack')
.then((data)=>{
 return data.json();
}).then((jokeData)=>{
  const jokes = jokeData.attachments[0].text;
  const jokeElementt = document.getElementById('jokeElement');
  jokeElementt.innerHTML = jokes;
})