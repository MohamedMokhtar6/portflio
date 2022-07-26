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
