//box with button or div padding

const gridCont = document.querySelector("#gridmaster");

    const headTitle = document.createElement("h1");
            headTitle.id = "header"
            headTitle.textContent = "Etch-a-Sketch"
            headTitle.style.margin = "30px"
            headTitle.style.padding = "20px"
    gridCont.appendChild(headTitle);

const siteHead = document.createElement("div")
        siteHead.id = "toppart";
        siteHead.style.margin = "5px";
    gridCont.appendChild(siteHead);

const playText = document.createElement("label")
        playText.id = "play"
        playText.innerText = " box count "
    siteHead.appendChild(playText);

const playInput = document.createElement("input")
        playInput.id = "playInput";
        playInput.type = "number";
        playInput.maxLength = "3";
        playInput.minLength = "1";
        playInput.size = "2";
        playInput.value = "0";
        
    siteHead.appendChild(playInput);

   
     
const playStart = document.createElement("button")
        playStart.id = "playstart";
        playStart.innerText = "Etch-a-Sketch";
        playStart.addEventListener("click", () => {  
            
            generateBox(getInput());
          
        })

      //if no input=0, grid to default;
      //on click 'resets' function, returns to default if no input
    
    siteHead.appendChild(playStart);

            function getInput(){
                let playBox = document.getElementById("playInput").value;
                return playBox;
            }



const siteBody = document.createElement("div")
        siteBody.id = "gridbody"
    gridCont.appendChild(siteBody);

const boxList = document.createElement("ul")
        boxList.id = "boxbed";
        boxList.class = "boxLayout"
    siteBody.appendChild(boxList);

        const boxOver = document.getElementById("boxbed")              
                boxOver.style.padding = "20px 30px 20px 30px"
                boxOver.style.border = "solid black"                             
        siteBody.appendChild(boxOver);
    
boxCount = 15;

function generateBox(boxCount){
    
    for(i = 1; i <= boxCount; i++){
   
       const boxSub = document.createElement("li")
                boxSub.id = "boxbox";
                boxSub.class = "boxFlex"
                

            boxSub.style.padding = "20px 30px 20px 30px";
            boxSub.style.margin = "2px";
            boxSub.style.border = "thick solid black";
            boxSub.style.listStyleType = "none"

            boxSub.addEventListener("mouseenter", () => {
                    
                    function getRandomColor(){
                        const col =  "#"+Math.random().toString(16).slice(-6)
                        return col;
                    }

                        const randomColor = getRandomColor();

                    boxSub.style.backgroundColor = randomColor;
                    //console.log("mouse enter", "color", randomColor)
                })

            boxSub.addEventListener("mouseleave", () => {
                    boxSub.style.backgroundColor = 'unset'
                    //console.log("mouseleave")
                })

                
            boxList.appendChild(boxSub)    

    }
}







