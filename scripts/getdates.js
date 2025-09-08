const year = document.querySelector("#year"); //grabs the element which id=year in HTML

const today = new Date();  // use the date object

year.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`; //I'm creating an element in HTML 
