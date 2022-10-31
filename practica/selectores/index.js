

const form=document.getElementById("form")
console.log("el formuilario",form)



form.style.backgroundColor = "blue" ;
form.style.color= "red" ;

const email=document.getElementById("input_email")
email.style.backgroundColor= "#000" ;

document.write("holitass")

const input=Array.from(document.querySelectorAll("input"))
//obtener mi contendor
const contenedor=document.querySelector("#container-list")

const ul=document.createElement("ul")

input.map((element)=>{
    const li = document.createElement("li");

    const elementText=document.createTextNode(element.value);
    li.appendChild(elementText) 
    ul.appendChild(li)
})

contenedor.appendChild(ul)
console.log(ul)
