window.addEventListener("load",()=>{

    let btn_login = document.querySelector("#submit_btn")

    btn_login.addEventListener("mouseover",()=>{
        btn_login.style.backgroundColor = '#0022AA'
    });

    btn_login.addEventListener("mouseout",()=>{
        btn_login.style.backgroundColor = "#1259c3"
    })

})