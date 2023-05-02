const name=document.getElementById("name");
const container=document.querySelector(".tags");

const addName= ()=>{
    console.log("meow");
    if(name.value===""){
        return null;
    }
    const tag=document.createElement("div");
    tag.setAttribute("class","tag");
    tag.innerText=`${name.value}`;
    container.append(tag);
    
    
};