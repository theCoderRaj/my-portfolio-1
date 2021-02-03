const navslide = () =>{
    const burger = document.querySelector(".burger-menu");
    const nav = document.querySelector(".list");

    burger.addEventListener("click", ()=>{
        nav.classList.toggle(".list-items-active"); 
    })
}
navslide();