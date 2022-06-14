
let flag = true



document.querySelector("#login").addEventListener("click", displayLogin)

displayLogin()
function displayLogin() {
    let form = document.querySelector("form")
    form.innerHTML = ""

    let inputemail = document.createElement("input")
    inputemail.placeholder = "       Email"

    let inputpassword = document.createElement("input")
    inputpassword.placeholder = "      Password"


    let div = document.createElement("div")
    div.style.display = "flex"
    let checkr = document.createElement("p")
    tick = document.createElement("input")
    tick.style.marginRight = "5px"
    tick.type = "checkbox"
    checkr.innerText = "  Remember Me"


    div.append(tick, checkr)

    //      checkBoxes
    let div1 = document.createElement("div")
    div1.style.display = "flex"
    let checkw = document.createElement("p")
    tickw = document.createElement("input")
    tickw.style.marginRight = "5px"
    tickw.type = "checkbox"
    checkw.innerText = "  Receive Deccan Herald ePaper subscription updates on "
    let whatsapp = document.createElement("span")
    whatsapp.innerText = "WhatsApp "
    whatsapp.style.color = "#008000"
    whatsapp.style.fontSize = '20px'
    whatsapp.style.fontWeight = "bold"
    let logo = document.createElement("img")
    logo.style.width = "20px"
    logo.style.height = "20px"
    logo.setAttribute("src", "watsapplogo.png")
    checkw.append(whatsapp, logo)
    div1.append(tickw, checkw)

    button = document.createElement("input")
    button.type = "submit"
    button.addEventListener("click", function () {
        event.preventDefault()
    })
    let forgot = document.createElement("p")
    forgot.innerText = "Forgot Password?"

    let hr = document.createElement("div")
    hr.style.display = "flex"
    hr.style.textAlign = "center"


    let line1 = document.createElement("hr")
    let orlogin = document.createElement("p")
    orlogin.innerText = "or login using"
    let line2 = document.createElement("hr")
    hr.append(line1, orlogin, line2)

    form.append(inputemail, inputpassword, div, div1, button, forgot, hr)
}
document.querySelector("#subs").addEventListener("click", displaySubs)
function displaySubs() {
    let form = document.querySelector("form")
    form.innerHTML = ""

    let h1 = document.createElement("h3")
    h1.innerText = "NATIONAL EDITION OFFER"
    h1.style.textAlign = "center"

    let p = document.createElement("p")
    p.innerText = "National Edition ePaper + Newspaper Delivery"
    p.style.fontSize = "25px"
    p.style.textAlign = "center"


    let div = document.createElement("div")
    div.style.padding = "20px"
    div.style.border = "1px solid black"
    div.style.display = "flex"
    div.style.gap = "20px"
    div.style.justifyContent = "center"
    div.addEventListener("click", function () {
        document.querySelector("#divform").innerHTML=""
        signup()
    })
    let div1 = document.createElement("div")

    div1.style.border = "1px solid black"
    let price = document.createElement("p")
    price.innerHTML = "₹4158 <span class='go'>Save 59%</span>"
    head = document.createElement("h3")
    head.innerText = "₹ 1699/- per Year"
    para1 = document.createElement("p")
    para1.innerText = "- All features + 90 days archive access"
    para2 = document.createElement("p")
    para2.innerText = "- City Newspaper edition delivered at your doorstep"
    div1.append(price, head, para1, para2)


    let div2 = document.createElement("div")
   
    div2.style.border = "1px solid black"
    let price2 = document.createElement("p")
    price2.innerHTML = "₹2076 <span class='go'>Save 52%</span>"
    head1 = document.createElement("h3")
    head1.innerText = "₹ 999/- per 6 Months"
    para3 = document.createElement("p")
    para3.innerText = "- All features + 60 days archive access"
    para4 = document.createElement("p")
    para4.innerText = "- City Newspaper edition delivered at your doorstep"
    div2.append(price2, head1, para3, para4)

    let div3 = document.createElement("div")
    div3.id= "ads"
    div3.style.border = "1px solid black"
    let price3 = document.createElement("p")
    price3.innerHTML = "₹2076 <span class='go'>Save 52%</span>"
    head2 = document.createElement("h3")
    head2.innerText = "₹ 999/- per 6 Months"
    para4 = document.createElement("p")
    para4.innerText = "- All features + 60 days archive access"
    para5 = document.createElement("p")
    para5.innerText = "- City Newspaper edition delivered at your doorstep"
    div3.append(price3, head2, para4, para5)

    divform = document.createElement("div")
    divform.id = "divform"

    div.append(div1, div2,)
    form.append(h1, p, div,divform ,div3)
}

function signup() {
    let sign = document.querySelector("#divform")
    
    let form1 = document.createElement("form")
    form1.id = "signUp"
    let div1 = document.createElement("div")
    div1.style.flex = "flex"
    let Email = document.createElement("input")
    Email.placeholder = "Enter Your Email"
    let Mobile = document.createElement("input")
    Mobile.placeholder = "Enter Your Mobile Number"
    div1.append(Email,Mobile)

    let div2= document.createElement("div")
    div2.style.display="flex"
    select = document.createElement("select")
    let op1 = document.createElement("option")
    op1.value= "default"
    op1.innerText="Select Your Default Editon"
    let op2 = document.createElement("option")
    op2.value= "National"
    op2.innerText= "National Edition"
    select.append(op1,op2)

    let name = document.createElement("input")
    name.placeholder="Enter Your name"
    div2.append(select,name)
    let div3 = document.createElement("div")
    let Password = document.createElement("input")
    Password.type="password"
    Password.placeholder="Enter Your Password"
    let Passwordc = document.createElement("input")
    Passwordc.type="password"
    Passwordc.placeholder="ConfirmYour Password"
    div3.append(Password,Passwordc)

    form1.append(div1,div2,div3)
    sign.append(form1)

}

