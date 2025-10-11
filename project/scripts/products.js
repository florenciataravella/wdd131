const productsArray=[
  {
    productName:"Avocado Ultra Repairing Body Cream",
    productPrice:"$27 usd",
    productSize: "220 g",
    productSrc:"images/palta.jpeg"
  },
  {
    productName:"Papaya Hydrating Body Cream",
    productPrice:"$23 usd",
    productSize: "250 g",
    productSrc:"images/pya2.jpeg"
    },
    {
    productName:"Aloe Vera Hydrating Body Cream",
    productPrice:"$23 usd",
    productSize: "250 g",
    productSrc:"images/limon.jpg"
    },
    {
    productName:"Ultra Nurturing Antiage Face Cream",
    productPrice:"$42 usd",
    productSize: "45 g",
    productSrc:"images/FSNA.jpeg"
    },
    {
    productName:"Soft Cranberries Nurturing Body Cream",
    productPrice:"$23 usd",
    productSize: "220 g",
    productSrc:"images/arandanos.jpg"
    },
    {
    productName:"Coconut Ultra Repairing Body Cream",
    productPrice:"$27 usd",
    productSize: "220 g",
    productSrc:"images/coco.jpg"
    },
  ]
  
  function createProductsCard(productsArray){
      productsArray.forEach(p => {
        let card=document.createElement("section");
        let name=document.createElement("h3");
        let price=document.createElement("p");
        let size=document.createElement("p");
        let productImg=document.createElement("img");

        productImg.setAttribute("src",p.productSrc);
        productImg.setAttribute("alt",p.productName);
        productImg.setAttribute("loading", "lazy");
        name.textContent=p.productName;
        price.textContent=p.productPrice;
        size.textContent=p.productSize;
        

        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(size);
        card.appendChild(productImg);

        document.querySelector(".products").appendChild(card);
        
      });
    }
    document.querySelector(".products").innerHTML="";
    createProductsCard(productsArray);
     
