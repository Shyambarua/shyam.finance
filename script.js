const number= document.querySelectorAll(".number")
const speed=4000;
number.forEach(element=>{
    incNumber(element)
})

function incNumber(elem){
    let text=+elem.innerText;
    const value=+elem.getAttribute("data-target");
    const inc= value/speed;
    if(text<value){
        elem.innerText=inc+text;
        setTimeout(()=>{
            incNumber(elem)
        },5000)
    }else{
        elem.innerText=value;
    }
}
