window.addEventListener("load", () => {

    let card = document.querySelectorAll(".card")
    let hijos_h3 = document.querySelectorAll(".desc")

    card.forEach(e =>{
        e.addEventListener("mouseover",()=>{
            e.style.boxShadow = ' 0px 0px 10px rgb(100, 100, 100)'
        })
        e.addEventListener("mouseout",()=>{
            e.style.boxShadow = ' 0px 0px 0px'
        })
    })

    hijos_h3.forEach(e => {
    
        e.style.color = '#fff'

        e.addEventListener("mouseover",(evt)=>{
            var hijo = evt.target;
            hijo.style.color = '#666'
        })

        e.addEventListener("mouseout",(evt)=>{
            var hijo = evt.target
            hijo.style.color = '#fff'

        })
    })

});