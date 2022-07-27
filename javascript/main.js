function addActive(e){
    e.target.parentElement.parentElement.querySelectorAll(".active").forEach(ele=>{
        ele.classList.remove("active");
        
    });
    e.target.classList.add("active");

};
let link=document.querySelectorAll("header nav ul li ");
link.forEach(li=>{
    li.addEventListener("click",(e)=>{
        addActive(e);
    })
})

let felter=document.querySelectorAll(".port .container .filter ul li");
felter.forEach(ele=>{
    ele.addEventListener("click",(e)=>{
        addActive(e)
        // console.log(e.target)
        if(e.target.classList.contains("css")){
            document.querySelectorAll(".html").forEach(e=>{e.style.display="block"})
            document.querySelectorAll(".java").forEach(e=>{e.style.display="none"})
        }
        else if(e.target.classList.contains("javascript")){
            document.querySelectorAll(".java").forEach(e=>{e.style.display="block"})
            document.querySelectorAll(".html").forEach(e=>{e.style.display="none"})
        }
        else if(e.target.classList.contains("all")){
            document.querySelectorAll(".box").forEach(e=>{e.style.display="block"})
        }
        else if(e.target.classList.contains("games")){
            document.querySelectorAll(".html").forEach(e=>{e.style.display="none"})
            document.querySelectorAll(".java").forEach(e=>{e.style.display="none"})
            

        }
    })
})


