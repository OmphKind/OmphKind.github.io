// rangeInput = document.getElementById('range');
// container = document.getElementsByClassName('bodya')[0];

// rangeInput.addEventListener("change", function()
// {
//     container.style.filter = "brightness(" + rangeInput.value + "%)";
// });

const rangeInput = document.querySelectorAll('range');
const value = document.querySelectorAll('.value');
const container = document.querySelector('.container');

for(let i=0; i<rangeInput.length; i++)
{
    value[i].textContent = rangeInput[i].value;
    rangeInput[i].addEventListener('input', ()=>
    {
        value[i].textContent = rangeInput[i].value;
        if(rangeInput[i].id === "bright")
        {
            container.getElementsByClassName.filter = `brightness(${rangeInput[i].value}%)`;
        }
    })
}
