const year = document.querySelector("#year"); //grabs the element which id=year in HTML

const today = new Date();  // use the date object

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`; //I'm creating an element in HTML 

const lastmodified=document.querySelector("#lastmodified");

const today2=new Date();

const shortDate  = new Intl.DateTimeFormat("en-US", { dateStyle: "short", timeStyle: "short"}).format(today2); //The Intl.DateTimeFormat constructor lets you format dates according to locale rules.

lastmodified.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat(
  "en-US", { dateStyle: "short" , timeStyle: "short"}
).format(today2)}</span>`;


const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];
const product=document.getElementById("selectProduct");

products.forEach(p=>{
  let option=document.createElement("option");
  option.value=p.id;
  option.textContent=p.name;
  product.appendChild(option);
})


const form=document.querySelector(".form1");

let numReviews=Number(window.localStorage.getItem("numReviews-ls"))||0;

form.addEventListener("submit", ()=>{

  numReviews++

  localStorage.setItem("numReviews-ls", numReviews);

})







