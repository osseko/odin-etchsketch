//box with button or div padding
const headTitle = document.createElement("h1");
        headTitle.textContent = "Etch-a-Sketch"
        headTitle.style.margin = "30px"



const gridCont = document.querySelector("#gridmaster");
       

const boxOver = document.createElement("box");
    
            boxOver.innerText = ""
                  
            boxOver.style.padding = "50px 50px 50px 50px"
        
            boxOver.addEventListener("mousemove", () => {
                boxOver.style.backgroundColor = "blue"
                
            })

            boxOver.addEventListener("mouseleave", () => {
                boxOver.style.backgroundColor = 'unset'
                console.log("mouseleave")
            })





const grdBtn = document.createElement("btn")
    grdBtn.innerText = "button";

gridCont.appendChild(headTitle);
gridCont.appendChild(boxOver);
gridCont.appendChild(grdBtn);
