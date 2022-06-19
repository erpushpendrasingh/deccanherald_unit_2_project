let news2 = [
		{
			image: "https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/06/18/file7kioyz0u8ibfrkh2ipt-1119126-1655521366.jpg?itok=b_OAuZux",
            text: "Talking can spread Covid as much as coughing: IISc...",
            time: "1:03 pm"
		},
		{
			image: "https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/06/18/file7lh1kdw6obljvuxag0e-1119091-1655521356.jpg?itok=R33lZ-Zz",
            text: "‘Why can’t B'luru's public infra be disabled-friendly?’",
            time: "1:03 pm"
		},
		// {
		// 	image: "https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/06/18/file7lh63mdimvd1bun1dcks-1119052-1655521163.jpg?itok=Y6W8p8ce",
		// 	text: "Charlie behind the camera"
		// },
		// {
		// 	image: "https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/06/18/file7lh57eaouar16gud66jh-1119092-1655490658.jpg?itok=KtdiNsg_",
		// 	text: "How ‘Vikram’ pays homage to Hollywood action thrillers..."
		// },
		// {
		// 	image: "https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/06/18/covid-1116806-1654796457-1-1117247-1654946068-1117907-1655174150-1119120-1655521235.jpg?itok=ajBFp1xB",
		// 	text: "Karnataka's Covid cases on the rise but no new..."
		// },
		// {
		// 	image: "https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/06/18/file7kioyz0u8ibfrkh2ipt-1119126-1655521366.jpg?itok=b_OAuZux",
		// 	text: "Talking can spread Covid as much as coughing: IISc..."
		// },
		// {
		// 	image: "https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/06/18/istock-854429164-1119055-1655518962.jpg?itok=NJSKA8QN",
		// 	text: "Students seek reintroduction of free sanitary napkins"
		// },
		// {
		// 	image: "https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/06/17/file7lgn8iup6ww1mnma9ayd-1118809-1655412459.jpg?itok=LcgCSpgh",
		// 	text: "Heavy showers inundate Yellamma temple"
		// },
		// {
		// 	image: "https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/06/18/pti05252022000193a-1-1117200-1654924653-1-1119149-1655523443.jpg?itok=mkKsMhXR",
		// 	text: "Police officer's body found near J&K's Pampore town..."
		// },
		// {
		// 	image: "https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/06/18/Anti-Agnipath%20protest%20in%20Mathura%20PTI-1655522325.jpg?itok=eC_TE3T_",
		// 	text: "Agnipath Row Live: 6 FIRs registered in 4 UP..."
		// }
];
    
// window.onload = (new2repeat());
	// function new2repeat() {
	// 	for (let i = 0; i < news2.length; i = i + 2) {
        // 	}
     		news2d();
    // }
    

function news2d() {
    let div = document.createElement("div");
    div.classList.add('grid-col-sm', 'grid-col-sm-3row')
    let ul = document.createElement('ul');
    ul.classList.add('sm-hr-card-list')
    news2.forEach(function (el) {
        
            let li = document.createElement('li');
            li.classList.add('sm-hr-card-list__items', 'mtop-m-20')
            // ul.appendChild(li);
            let div2 = document.createElement('div');
            div2.classList.add('sm-hr-card', 'sm-hr-card--m-top');
            let a = document.createElement("a")
            a.classList.add('card-cta')
            a.setAttribute('href', "#")
            let div3 = document.createElement('div');
            div3.classList.add('sm-hr-card__img', 'rel_pos');
            let img = document.createElement('img')
            img.classList.add('image', 'lazy', 'loaded')
            img.src = el.image;
            let div4 = document.createElement('div');
            div4.classList.add('sm-hr-card__content');
            let h4 = document.createElement('h4');
            h4.classList.add('sanspro-semib', 'sm-hr-card__heading', 'card-cta__hover')
            h4.innerText = el.text
            console.log(el.text)
            let span = document.createElement('span');
            span.classList.add('sanspro-reg', 'sm-hr-card__time-info', 'time-info')
            span.innerText=el.time
            div4.append(h4,span)
            div3.appendChild(img);
            a.append(div3,div4);
            div2.appendChild(a);
            li.appendChild(div2);
			ul.append(li)
		})
        div.appendChild(ul);
		document.querySelector(".mtop-d-20").appendChild(div)
	}