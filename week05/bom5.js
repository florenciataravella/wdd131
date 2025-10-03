const favchap=document.getElementById("favchap");
const submit=document.getElementById("add chapter");
const list=document.getElementById("list");



submit.addEventListener("click",function(){
    
    if (favchap.value.trim() !=='')
        
        {
        displayChapters(favchap);
        chaptersArray.push(favchap);
        setChapterList();

        
        const deleteButton=document.createElement("button");
        deleteButton.textContent="❌";
        deleteButton.setAttribute("aria-label","Delete item")
        li.append(deleteButton);
            
            deleteButton.addEventListener("click", function(){
            list.removeChild(li);
            favchap.focus();
})

        favchap.value="";
        favchap.focus();
        } 
    else {alert("Please, enter a valid chapter");
        favchap.focus();
    }
});


let chaptersArray=getChapterList()||[];

function getChapterList(){
    let storedChapters=Number(window.localStorage.getItem("myFavChap"));
    if (!storedChapters){
        return null;
    }
    }

function displayChapters(favchap){
    const li=document.createElement("li");
        li.textContent=favchap.value
        list.appendChild(li)  //ul=list  is the parent of the li element
}
function setChapterList(){
    localStorage.setItem("myFavChap",Number(chaptersArray));
}

