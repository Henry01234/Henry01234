
var compute = document.querySelector(".col-two");
var output = document.querySelector(".output");

function disNo(val)
{
    output.innerHTML+=val;
    
}
compute.addEventListener('click',function()
{
    let val = (output.textContent);
    output.textContent = (eval(val)); 
})


function clr(){
    output.innerHTML="";
}



