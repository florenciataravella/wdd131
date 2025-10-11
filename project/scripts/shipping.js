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

const shipping=document.querySelector("#shippingChoice");

shippingChoices.forEach(sh=>{
  let option=document.createElement("option");
  option.value=sh.id;
  option.textContent=sh.name;
  shipping.appendChild(option);
})








