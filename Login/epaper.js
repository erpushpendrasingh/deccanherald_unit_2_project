
let flag = true



document.querySelector("#login").addEventListener("click",displayLogin)

    displayLogin()
    function displayLogin(){
        let form = document.querySelector("form")
        form.innerHTML=""

        let inputemail = document.createElement("input")
        inputemail.placeholder="       Email"
        inputemail.addEventListener("input",function(){
            event.preventDefault()
            document.createElement
        })
        
        let inputpassword = document.createElement("input")
        inputpassword.placeholder="      Password"
        

        let div = document.createElement("div")
        div.style.display="flex"
        let checkr = document.createElement("p")
        tick = document.createElement("input") 
        tick.style.marginRight = "5px"
        tick.type="checkbox"
        checkr.innerText = "  Remember Me"
        div.append(tick,checkr)

//      checkBoxes
        let div1 = document.createElement("div")
        div1.style.display="flex"
        let checkw = document.createElement("p")
        tickw = document.createElement("input") 
        tickw.style.marginRight = "5px"
        tickw.type="checkbox"
        checkw.innerText = "  Receive Deccan Herald ePaper subscription updates on "
        let whatsapp = document.createElement("span")
        whatsapp.innerText = "WhatsApp "
        whatsapp.style.color="#008000"
        whatsapp.style.fontSize = '20px'
        whatsapp.style.fontWeight = "bold"
        let logo = document.createElement("img")
        logo.style.width="20px"
        logo.style.height="20px"
        logo.setAttribute("src","watsapplogo.png")
        checkw.append(whatsapp,logo)
        div1.append(tickw,checkw)
        

        
        form.append(inputemail,inputpassword,div,div1)
    }
    document.querySelector("#subs").addEventListener("click",displaySubs)
    function displaySubs(){
        let form = document.querySelector("form")
        form.innerHTML=""

        let h1 = document.createElement("h3")
        h1.innerText = "NATIONAL EDITION OFFER"
        h1.style.textAlign="center"
        
        let p =  document.createElement("p")
        p.innerText = "National Edition ePaper + Newspaper Delivery"
        p.style.fontSize= "25px"
        p.style.textAlign="center"


        let div = document.createElement("div")
        div.style.padding = "20px"
        div.style.border = "1px solid black"
        div.style.display= "flex"
        div.style.gap = "20px"
        div.style.justifyContent = "center"
            let div1 = document.createElement("div")
            div1.style.border = "1px solid black"
            let price = document.createElement("p")
            price.innerHTML = "₹4158 <span class='go'>Save 59%</span>"
            head = document.createElement("h3")
            head.innerText= "₹ 1699/- per Year"
            para1 = document.createElement("p")
            para1.innerText = "- All features + 90 days archive access"
            para2 = document.createElement("p")
            para2.innerText="- City Newspaper edition delivered at your doorstep"
            div1.append(price,head,para1,para2)
        

            let div2 = document.createElement("div")
            div2.style.border = "1px solid black"
            let price2 = document.createElement("p")
            price2.innerHTML = "₹4158 <span class='go'>Save 59%</span>"
            head1 = document.createElement("h3")
            head.innerText= "₹ 1699/- per Year"
            para3 = document.createElement("p")
            para3.innerText = "- All features + 90 days archive access"
            para4 = document.createElement("p")
            para4.innerText="- City Newspaper edition delivered at your doorstep"
            div2.append(price2,head1,para3,para4)



        div.append(div1,div2)
        form.append(h1,p,div)
    }