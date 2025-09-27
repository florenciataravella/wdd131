const year = document.querySelector("#year"); //grabs the element which id=year in HTML

const today = new Date();  // use the date object

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`; //I'm creating an element in HTML 

const lastmodified=document.querySelector("#lastmodified");

const today2=new Date();

const shortDate  = new Intl.DateTimeFormat("en-US", { dateStyle: "short", timeStyle: "short"}).format(today2); //The Intl.DateTimeFormat constructor lets you format dates according to locale rules.

lastmodified.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat(
  "en-US", { dateStyle: "short" , timeStyle: "short"}
).format(today2)}</span>`;

const mainnav=document.querySelector(".navigation")
const hambutton=document.querySelector("#menu")
hambutton.addEventListener("click",()=>{
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");

});
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Asuncion Paraguay",
    location: "Asuncion, Paraguay",
    dedicated: "2002, May, 19",
    area: 11906,
    imageUrl:"https://www.churchofjesuschrist.org/imgs/1666651be95c20604d8de145c7c0f4a93496e134/full/400%2C/0/default"
  },
  {
    templeName: "Freiberg Germany",
    location: "Freiberg, Germany",
    dedicated: "1985, June, 29",
    area: 45456,
    imageUrl:"https://www.churchofjesuschrist.org/imgs/7f19f5c444af3ddcbda946c6977a460baeaea1d2/full/400%2C/0/default"
  },
  {
    templeName: "Río de Janeiro Brazil",
    location:"Río de Janeiro, Brazil",
    dedicated:"2022, May, 8",
    area:29966,
    imageUrl:"https://www.churchofjesuschrist.org/imgs/001db7326e638032470a02813c9e47191ef74b0e/full/400%2C/0/default"
  }
];

createTempleCard(temples);   // estoy llamando a la funcion

function createTempleCard(temples){      //estoy declarando la funcion
  temples.forEach(temple=>{
    let card=document.createElement("section");
    let name=document.createElement("h3");
    let location=document.createElement("p");
    let dedication=document.createElement("p");
    let area=document.createElement("p");
    let img=document.createElement("img");

    name.textContent=temple.templeName;
    location.innerHTML=`<span class="label">Location:  ${temple.location}</span>`;
    dedication.innerHTML=`<span class="label"> Dedicated: </span> ${temple.dedicated}`;
    area.innerHTML=`<span class="label"> Area: </span> ${temple.area}`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", '${temple.templeName} Temple');
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".temples").appendChild(card);
  })
}
const allTempleslink=document.querySelector("#home");

allTempleslink.addEventListener("click",()=>{
  document.querySelector(".temples").innerHTML="";
  createTempleCard(temples);
})

const largeTempleslink=document.querySelector("#large");

largeTempleslink.addEventListener("click", ()=>{
  
  document.querySelector(".temples").innerHTML="";
  let largeTemples=temples.filter(t=>t.area>90000);

  

  function createTempleCard(largeTemples){
     largeTemples.forEach(ltemple=>{
    let card=document.createElement("section");
    let name=document.createElement("h3");
    let location=document.createElement("p");
    let dedication=document.createElement("p");
    let area=document.createElement("p");
    let img=document.createElement("img");

    name.textContent=ltemple.templeName;
    location.innerHTML=`<span class="label">Location:  ${ltemple.location}</span>`;
    dedication.innerHTML=`<span class="label"> Dedicated: </span> ${ltemple.dedicated}`;
    area.innerHTML=`<span class="label"> Area: </span> ${ltemple.area}`;
    img.setAttribute("src", ltemple.imageUrl);
    img.setAttribute("alt", '${temple.templeName} Temple');
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".temples").appendChild(card);
}
  
)}
createTempleCard(largeTemples);
})


const smallTempleslink=document.querySelector("#small");

smallTempleslink.addEventListener("click", ()=>{

  let smallTemples=temples.filter(t=>t.area<10000);

  document.querySelector(".temples").innerHTML="";

function createTempleCard(smallTemples){ 
  
  smallTemples.forEach(stemple=>{
    let card=document.createElement("section");
    let name=document.createElement("h3");
    let location=document.createElement("p");
    let dedication=document.createElement("p");
    let area=document.createElement("p");
    let img=document.createElement("img");

    name.textContent=stemple.templeName;
    location.innerHTML=`<span class="label">Location:  ${stemple.location}</span>`;
    dedication.innerHTML=`<span class="label"> Dedicated: </span> ${stemple.dedicated}`;
    area.innerHTML=`<span class="label"> Area: </span> ${stemple.area}`;
    img.setAttribute("src", stemple.imageUrl);
    img.setAttribute("alt", '${temple.templeName} Temple');
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".temples").appendChild(card);
 }) 
}

 createTempleCard(smallTemples);
})

const oldTempleslink=document.querySelector("#old");


oldTempleslink.addEventListener("click", ()=>{
document.querySelector(".temples").innerHTML="";

let oldTemples=temples.filter(t=> new Date(t.dedicated).getFullYear()<1900);



console.log(oldTemples);
function createTempleCard(oldTemples){ 
  
  oldTemples.forEach(otemple=>{
    let card=document.createElement("section");
    let name=document.createElement("h3");
    let location=document.createElement("p");
    let dedication=document.createElement("p");
    let area=document.createElement("p");
    let img=document.createElement("img");

    name.textContent=otemple.templeName;
    location.innerHTML=`<span class="label">Location:  ${otemple.location}</span>`;
    dedication.innerHTML=`<span class="label"> Dedicated: </span> ${otemple.dedicated}`;
    area.innerHTML=`<span class="label"> Area: </span> ${otemple.area}`;
    img.setAttribute("src", otemple.imageUrl);
    img.setAttribute("alt", '${temple.templeName} Temple');
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".temples").appendChild(card);
 }) 
}
createTempleCard(oldTemples);

})
const newTempleslink=document.querySelector("#new");

newTempleslink.addEventListener("click", ()=>{
  document.querySelector(".temples").innerHTML="";
  let newTemples=temples.filter(t=> new Date(t.dedicated).getFullYear()>2000);

  function createTempleCard(newTemples){ 
     newTemples.forEach(ntemple=>{
    let card=document.createElement("section");
    let name=document.createElement("h3");
    let location=document.createElement("p");
    let dedication=document.createElement("p");
    let area=document.createElement("p");
    let img=document.createElement("img");

    name.textContent=ntemple.templeName;
    location.innerHTML=`<span class="label">Location:  ${ntemple.location}</span>`;
    dedication.innerHTML=`<span class="label"> Dedicated: </span> ${ntemple.dedicated}`;
    area.innerHTML=`<span class="label"> Area: </span> ${ntemple.area}`;
    img.setAttribute("src", ntemple.imageUrl);
    img.setAttribute("alt", '${temple.templeName} Temple');
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".temples").appendChild(card);
 }) 
}
createTempleCard(newTemples);
})






   
