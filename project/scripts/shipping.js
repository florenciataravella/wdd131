const shippingChoices = [ 
    {   
        name: "Mail shipping",
        id: "458-g"
    },
    {
         name: "Store PickUP",
         id: "846-h"
    },   
    {
         name: "Uber Deliveries",
         id:"874-j"
    }
];
const page = document.body.dataset.page;
  
if (page === "shipping") {
const shipping=document.querySelector("#shippingChoice");

shippingChoices.forEach(sh=>{
  let option=document.createElement("option");
  option.value=sh.id;
  option.textContent=sh.name;
  shipping.appendChild(option);
})
}
if (page === "shipping") {
const form=document.querySelector(".shippingForm");

let numPurchases=Number(window.localStorage.getItem("numPurchases-ls"))||0;

form.addEventListener("submit", ()=>{

  numPurchases++

  localStorage.setItem("numPurchases-ls", numPurchases);

});


if (page=="purchase"){

let numPurchases=Number(window.localStorage.getItem("numPurchases-ls"))||0;
const purchases=document.createElement("span");
purchases.textContent=`Number of purchases: ${numPurchases}`;
const heading=document.querySelector(".thanks h2");
if (heading) heading.appendChild(purchases);
console.log(numPurchases);

}
}






