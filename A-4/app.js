function Main() {
    const mainMenu = document.querySelector(".gnb")
    const menuBg = document.querySelector(".menu_bg")

    mainMenu.addEventListener("mouseenter",()=>{
       menuBg.style.height = "120px"
    })
    mainMenu.addEventListener("mouseleave",()=>{
        menuBg.style.height = "0px"
    })
}

window.onload = ()=>{
    Main()
}