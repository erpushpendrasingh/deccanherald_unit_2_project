
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
    button.setAttribute("value","LOGIN")
    button.setAttribute("id","loginbutton")
    button.addEventListener("click", function () {
        event.preventDefault()
    })


    let forgot = document.createElement("p")
    forgot.innerHTML = "<a href='#pass' class='conditions'>Forgot Password?</a>"
    

    let hr = document.createElement("div")
 
    hr.style.textAlign = "center"


    let line1 = document.createElement("div")
    line1.style.display="inline"
    let orlogin = document.createElement("span")
    orlogin.style.display="inline"
    orlogin.innerText = "or login using"
    let line2 = document.createElement("div")
    hr.append(line1, orlogin, line2)

    let div10 = document.createElement("div")
    div10.style.display="flex"
    div10.style.justifyContent="center"
    let img = document.createElement("img")
    img.setAttribute("src","fbnew.png")
    let line3 = document.createElement("div")
    line3.style.border="1px solid black"
    let imgg = document.createElement("img")
    imgg.setAttribute("src","googlenew.png")
    div10.append(img,line3,imgg)

    

    form.append(inputemail, inputpassword, div, div1, button, forgot, hr,div10)
}
document.querySelector("#subs").addEventListener("click", displaySubs)
function displaySubs() {
    let form = document.querySelector("form")
    form.innerHTML = ""
    let ads = document.createAttribute("ads")
    let h1 = document.createElement("h3")
    h1.setAttribute("class","h3")
    h1.innerText = "NATIONAL EDITION OFFER"
  

    let p = document.createElement("p")
    p.innerText = "National Edition ePaper + Newspaper Delivery"
    p.setAttribute("class","p")
    let div = document.createElement("div")
    div.style.padding = "5px"
    div.setAttribute("id","adsparent")
    div.style.display = "flex"
    div.style.gap = "20px"
    div.style.justifyContent = "center"
    div.addEventListener("click", function () {
        document.querySelector("#divform").innerHTML=""
        signup()
        
    })
    let div1 = document.createElement("div")
    div1.setAttribute("class","ads")
    div1.setAttribute("id","ads1")
    div1.addEventListener("click", function (){
        divform.innerHTML=""
        let blue = document.querySelector("#ads1")
        blue.style.boxShadow="0 0px 5px #0087a8"
        let gray =  document.querySelector("#ads")
        gray.style.boxShadow=" 0 3px 22px #00000026"
        let gray1 = document.querySelector("#ads2")
        gray1.style.boxShadow=" 0 3px 22px #00000026"
    })
    let divprice = document.createElement("div")

    let price = document.createElement("span")
    price.innerText = "₹4158"
    price.setAttribute("class","price")
    let span = document.createElement("span")
    span.innerText="Save 59%"
    span.setAttribute("class","go")
    divprice.append(price,span)
    head = document.createElement("h3")
    head.innerText = "₹ 1699/- per Year"
    head.style.color="black"
    para1 = document.createElement("p")
    para1.innerText = "- All features + 90 days archive access"
    para2 = document.createElement("p")
    para2.innerText = "- City Newspaper edition delivered at your doorstep"
    div1.append(divprice, head, para1, para2)


    let div2 = document.createElement("div")
    div2.setAttribute("class","ads")
    div2.setAttribute("id","ads2")
    div2.addEventListener("click", function () {
        let blue = document.querySelector("#ads2")
        blue.style.boxShadow="0 0px 5px #0087a8"
        let gray =  document.querySelector("#ads")
        gray.style.boxShadow=" 0 3px 22px #00000026"
        let gray1 = document.querySelector("#ads1")
        gray1.style.boxShadow=" 0 3px 22px #00000026"
    })
    let divprice1 = document.createElement("div")
    let price1 = document.createElement("span")
    price1.innerText = "₹2076"
    price1.setAttribute("class","price")
    let span1 = document.createElement("span")
    span1.innerText="Save 52%"
    span1.setAttribute("class","go")
    divprice1.append(price1,span1)
    head1 = document.createElement("h3")
    head1.style.color="black"

    head1.innerText = "₹ 999/- per 6 Months"
    para3 = document.createElement("p")
    para3.innerText = "- All features + 60 days archive access"
    para4 = document.createElement("p")
    para4.innerText = "- City Newspaper edition delivered at your doorstep"
    div2.append(divprice1, head1, para3, para4)

    let diveparent = document.createElement("div")
   
    diveparent.style.display = "flex"
    diveparent.style.flexDirection="column"
    
    diveparent.style.justifyContent = "center"
    let khead = document.createElement("h3")
    khead.innerText="EPAPER ONLY OFFER"
    khead.setAttribute("class","h3")
   
    kpara= document.createElement("p")
    kpara.setAttribute("class","p")
    kpara.innerText="All Karnataka City Editions"
    let div3 = document.createElement("div")

    div3.setAttribute("class","ads")
    div3.setAttribute("id","ads")
    
    div3.style.margin="auto"
    let price3 = document.createElement("h3")
    price3.innerHTML = "₹ 166/- per Month"
    price3.style.color="black"
    head2 = document.createElement("h3")
    head2.innerText = "(+15 days one-time free trial)"
    head2.style.color="black"

    para4 = document.createElement("p")
    para4.innerText = "- All features + 30 days archive access"
    para5 = document.createElement("p")
    para5.innerText = "Access any city edition of karnataka"
    div3.addEventListener("click",function(){
        divform.innerHTML=""
        let blue = document.querySelector("#ads")
        blue.style.boxShadow="0 0px 5px #0087a8"
        signup()
        let gray =  document.querySelector("#ads1")
        console.log(gray)
        gray.style.boxShadow=" 0 3px 22px #00000026"
        let gray1 = document.querySelector("#ads2")
        gray1.style.boxShadow=" 0 3px 22px #00000026"


      
    })
    div3.append(price3, head2, para4, para5)
    diveparent.append(khead,kpara,div3)

    divform = document.createElement("div")
    divform.id = "divform"

    let divfoot = document.createElement("p")
    divfoot.innerText="** Unless you opt-out, your subscription will be auto-renewed on the last day of its validity"
    divfoot.style.textAlign="center"
    let divfoot2 = document.createElement("p")
    divfoot2.innerText = "**All plan prices are inclusive of GST"
    divfoot2.style.textAlign="center"
    let pay = document.createElement("p")
    pay.innerText = "Secure Payments By"
    pay.style.textAlign="center"
    let logodiv = document.createElement("div")
    logodiv.style.display="flex"
    logodiv.style.margin = "auto"
    logodiv.style.gap = "15px"
    let paytm = document.createElement("img")
    paytm.setAttribute('src',"paytm-logo.png")
    let part = document.createElement("div")
    part.style.border="1px solid black"
    let gpay = document.createElement("img")
    gpay.setAttribute('src',"rp-logo.png")
    logodiv.append(paytm,part,gpay)
   

    div.append(div1, div2,)
    form.append(h1, p, div,divform ,diveparent,divfoot,divfoot2,pay,logodiv)
}

function signup() {
    let sign = document.querySelector("#divform")
    
    let form1 = document.createElement("form")
    form1.id = "signUp"
    let div1 = document.createElement("div")
    div1.style.flex = "flex"
    div1.setAttribute("id","formcolumn")

    let Email = document.createElement("input")
    Email.placeholder = "Enter Your Email"
    let Mobile = document.createElement("input")
    Mobile.placeholder = "Enter Your Mobile Number"
    div1.append(Email,Mobile)

    let div2= document.createElement("div")
  
    div2.setAttribute("id","formcolumn1")
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
    div3.setAttribute("id","formcolumn2")
    let Password = document.createElement("input")
    Password.type="password"
    Password.placeholder="Enter Your Password"
    let Passwordc = document.createElement("input")
    Passwordc.type="password"
    Passwordc.placeholder="ConfirmYour Password"
    div3.append(Password,Passwordc)

    div4=document.createElement("div")
    div4.setAttribute("id","div4")
    div4.style.gap="0px"
    let promo = document.createElement("input")
    promo.style.marginLeft="0px"
    promo.placeholder = "Have Promo ?"
    let apply = document.createElement("button")
    apply.innerText="Apply promo"
    apply.style.width="30%"
    apply.style.marginLeft="0px"
    apply.addEventListener("click", function () {
        event.preventDefault()
    })
    apply.setAttribute("id","applypromo")

    div4.append(promo,apply)

    let div5 = document.createElement("div")
    div5.setAttribute("id","div5")
    let pq = document.createElement("p")
    pq.innerText="Does your household currently subscribe to the Deccan Herald newspaper?*"
    div5.append(pq)

    let parent = document.createElement("div")
    let div6 = document.createElement("div")
    let input = document.createElement("input")
    input.type="checkbox"
    input.style.margin="5px"
    let span = document.createElement("span")
    span.innerText = "Yes"
    span.style.margin="5px"
    let input1 = document.createElement("input")
    input1.type="checkbox"
    input1.style.margin="5px"
    let span1 = document.createElement("span")
    span1.innerText = "No"
    // span1.justifyContent="left"
    span1.style.margin="5px"
    div6.append(input,span,input1,span1)
    parent.append(div6)

    let div7= document.createElement("div")
    let holder = document.createElement("div")
    holder.style.margin="auto"
    let mark = document.createElement("input")
    mark.type="checkbox"
    mark.style.margin="5px"
    let markmessage = document.createElement("span")
    markmessage.innerHTML="By registering with us, you agree to our <span class='conditions'> Terms and Conditions </span>"
    holder.append(mark,markmessage)
    div7.append(holder)

    div8 = document.createElement("div")
    signupbtn = document.createElement("input")
    signupbtn.type="submit"
    signupbtn.value= "COMPLETE SUBSCRIPTION"
    signupbtn.setAttribute("id","subscribe")
    
    div8.append(signupbtn)

    div9=document.createElement("div")
    div9.style.justifyContent='center'

    let holder2 = document.createElement("div")
    holder2.setAttribute("id","holder2")
    line1 = document.createElement("div")
    line1.setAttribute("id","leftline")
    text = document.createElement("div")
    text.innerText="Or Subscribe using"
    line1.setAttribute("id","text")
    line2= document.createElement("div")
    line1.setAttribute("id","rightline")
   

    holder2.append(line1,text,line2)
    div9.append(holder2)

    let div10 = document.createElement("div")
    div10.style.justifyContent="center"
    let img = document.createElement("img")
    img.setAttribute("src","fbnew.png")
    let line3 = document.createElement("div")
    line3.style.border="1px solid black"
    let imgg = document.createElement("img")
    imgg.setAttribute("src","googlenew.png")
    div10.append(img,line3,imgg)





    form1.append(div1,div2,div3,div4,div5,parent,div7,div8,div9,div10)
    sign.append(form1)

}

let login =  document.querySelector("#formcontainer>#btn>div:first-child")

let subs =  document.querySelector("#formcontainer>#btn>div:last-child")


subs.addEventListener("click", function () {
    let logintext = document.querySelector("#formcontainer>#btn>div:first-child>#login")
    logintext.style.color="gray"
    let subtext = document.querySelector("#formcontainer>#btn>div:last-child>#subs")
    subtext.style.color= "black"

    document.querySelector("#loginline").style.backgroundColor = "gray"
    document.querySelector("#subsline").style.backgroundColor = "#0087a8"
})


login.addEventListener("click", function () {
    
    let logintext = document.querySelector("#formcontainer>#btn>div:first-child>#login")
    logintext.style.color="black"

    let subtext = document.querySelector("#formcontainer>#btn>div:last-child>#subs")
    subtext.style.color="gray"

    document.querySelector("#loginline").style.backgroundColor = "#0087a8"
    document.querySelector("#subsline").style.backgroundColor = "gray"
})



