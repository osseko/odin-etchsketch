//box with button or div padding

const headTitle = document.createElement("h1");
        headTitle.textContent = "Etch-a-Sketch"
        headTitle.style.margin = "30px"
        headTitle.style.padding = "20px"



const gridCont = document.querySelector("#gridmaster");



const boxOver = document.createElement("box");
    
            boxOver.innerText = ""
                  
            boxOver.style.padding = "20px 30px 20px 30px"
            boxOver.style.border = "solid black"        
            boxOver.addEventListener("mouseenter", () => {
                
                function getRandomColor(){
                     const col =  "#"+Math.random().toString(16).slice(-6)
                    return col;
                }
                const randomColor = getRandomColor();

                boxOver.style.backgroundColor = randomColor;
                console.log("color", randomColor)
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
