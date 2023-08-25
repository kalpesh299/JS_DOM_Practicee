const input=document.getElementById("inputfield");
const btn=document.getElementById("btn");


function addresult(){
    
    // console.log(input.value);
    const para=document.createElement("p");
    para.innerText=input.value;
    const resultContainer=document.querySelector(".result_container");
    resultContainer.appendChild(para);
    input.value="";
}

btn.addEventListener("click",addresult);