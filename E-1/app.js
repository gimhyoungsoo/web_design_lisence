window.onload = ()=>{
    const modal = document.querySelector("#modal")
    const modal_closeBtn = document.querySelector("#modal button")

    modal_closeBtn.addEventListener("click", () => {
        modal.style.visibility = "hidden"
        console.log("hidden active")
    })

    const first_p = document.querySelector("#C .notice ul li > a")
    first_p.addEventListener("click", () => {
        modal.style.visibility = "visible"
        console.log("visible active")
    })
}

