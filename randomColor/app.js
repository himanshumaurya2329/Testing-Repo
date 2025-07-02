let btn = document.querySelector('button');
btn.addEventListener("click" , function(){
    let heading = document.querySelector('h1');
    let divBg = document.querySelector('div');

    let color = getRandomColor();
    heading.innerHTML = color;
    divBg.style.backgroundColor = color;

})

function getRandomColor()
{
    let red = Math.floor(Math.random()* 255);
    let blue = Math.floor(Math.random()* 255);
    let green = Math.floor(Math.random()* 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}