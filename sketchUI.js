
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
        playInput.value = "";
        
    siteHead.appendChild(playInput);

   
     
const playStart = document.createElement("button") 
        playStart.id = "playstart";
        playStart.innerText = "Etch-a-Sketch";
       
       
    
    siteHead.appendChild(playStart);

            function getInput(){
                let playBox = document.getElementById("playInput").value;

                    if (playBox > 60){
                        return alert("input limit 60");
                    } else{
                        return playBox * playBox;
                    }
              
            }

            
const siteBody = document.createElement("div")
        siteBody.id = "gridbody"
    gridCont.appendChild(siteBody);

const boxList = document.createElement("ul")
        boxList.id = "boxbed";
        boxList.class = "boxLayout"
    siteBody.appendChild(boxList);

        const boxOver = document.getElementById("boxbed")              
                boxOver.style.padding = "1px"
                //boxOver.style.aspectRatio ="1/1"
               
                boxOver.style.maxHeight = "90%"
                boxOver.style.Width = "90vw"
                boxOver.style.border = "solid black"                             
        siteBody.appendChild(boxOver);
    
generateBox(30*30);

let opcStep = .1;
playStart.addEventListener("mousedown", () => {
            
            const maxSize = 100*100;
            emptyGrid(maxSize);
                                   
        })
       

playStart.addEventListener("mouseup", () => {

            const boxCount = getInput();
            generateBox(boxCount),
            console.log(boxCount);
            playInput.value = ""
            opcStep = 0;

        })
       


function generateBox(gridSize){
    
    for(i = 1; i <= gridSize; i++){
   
       const boxSub = document.createElement("li")
                boxSub.id = "boxbox";
                boxSub.class = "boxFlex"   

            boxSub.style.padding = "10px";
            boxSub.style.maxHeight = "100vh"; 
            boxSub.style.maxWidth = "100vh";
            boxSub.style.margin = "1px";
            boxSub.style.border = "thin solid black";
            boxSub.style.listStyleType = "none"
        
            boxSub.addEventListener("mouseenter", () => {
                    
                    function getRandomColor(){
                        const col = "#"+Math.random().toString(16).slice(-6)
                        return col;
                    }
                        const randomColor = getRandomColor();   

                    
                    opcStep += 0.1;

                    if(opcStep >= 1){
                        //console.log("maxopacity")
                        opcStep = 0.1;
                    }
                   
                    boxSub.style.backgroundColor = randomColor;
                    boxSub.style.transitionDuration = '0s'
                    boxSub.style.opacity = opcStep
                    boxSub.style.transitionProperty = 0;
                    //console.log(opcStep);                                
                    //console.log("mouse enter")
                   
                })
                             
            boxSub.addEventListener("mouseleave", () => {
                    boxSub.style.backgroundColor = 'unset'
                    boxSub.style.transitionDuration = '9s'
                    
                   
                    //console.log("mouseleave")
                })
            
                            
            boxList.appendChild(boxSub)    

    }
    
}

function emptyGrid(remover){
       
    for(i = 1; i <= remover; i++){
       const emptyBox = document.querySelector("li")
             
        boxList.removeChild(emptyBox);

    }

}








