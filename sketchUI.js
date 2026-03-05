//box with button or div padding

// const headTitle = document.createElement("h1");
//         headTitle.id = "header"
//         headTitle.textContent = "Etch-a-Sketch"
//         headTitle.style.margin = "30px"
//         headTitle.style.padding = "20px"
const gridCont = document.querySelector("#gridmaster");
// gridCont.appendChild(headTitle);

const grdBtn = document.createElement("btn")
    grdBtn.innerText = "button";
gridCont.appendChild(grdBtn);

const boxList = document.createElement("ul")
        boxList.id = "boxbed";
        boxList.class = "boxLayout"

    // const boxParts = boxList.appendChild(document.createElement("li"));
    //     boxParts.innerText = "boxbox";
    //     boxParts.style.padding = "30px";
    //     boxParts.style.listStyleType = "none";
        
    // const boxParts2 = boxList.appendChild(document.createElement("li"));
    //     boxParts2.innerText = "box";
    //     boxParts2.style.padding = "30px";
    //     boxParts2.style.listStyleType = "none";
        

gridCont.appendChild(boxList);

        const boxOver = document.getElementById("boxbed")
        
              
                boxOver.style.padding = "20px 30px 20px 30px"
                boxOver.style.border = "solid black"        
                // boxOver.addEventListener("mouseenter", () => {
                    
                //     function getRandomColor(){
                //         const col =  "#"+Math.random().toString(16).slice(-6)
                //         return col;
                //     }

                //         const randomColor = getRandomColor();

                //     boxOver.style.backgroundColor = randomColor;
                //     console.log("mouse enter", "color", randomColor)
                // })

                // boxOver.addEventListener("mouseleave", () => {
                //     boxOver.style.backgroundColor = 'unset'
                //     console.log("mouseleave")
                // })
                
gridCont.appendChild(boxOver);

    // function addBox(){

    //     const boxOver = document.createElement("box");
        
    //             boxOver.innerText = ""
    //               //boxarray.style.padding = '  
    //             boxOver.style.padding = "20px 30px 20px 30px"
    //             boxOver.style.border = "solid black"        
    //             boxOver.addEventListener("mouseenter", () => {
                    
    //                 function getRandomColor(){
    //                     const col =  "#"+Math.random().toString(16).slice(-6)
    //                     return col;
    //                 }

    //                     const randomColor = getRandomColor();

    //                 boxOver.style.backgroundColor = randomColor;
    //                 console.log("mouse enter", "color", randomColor)
    //             })

    //             boxOver.addEventListener("mouseleave", () => {
    //                 boxOver.style.backgroundColor = 'unset'
    //                 console.log("mouseleave")
    //             })
                

    //    return boxOver;

    //  }

let playBox = 10;

for(i = 0; i <= playBox; i++){
   
       const boxSub = document.createElement("li")
                boxSub.id = "boxbox";
                boxSub.class = "boxFlex"
                

            boxSub.style.padding = "20px 30px 20px 30px";
            boxSub.style.margin = "10px";
            boxSub.style.border = "thick solid black";
            boxSub.style.listStyleType = "none"

            boxSub.addEventListener("mouseenter", () => {
                    
                    function getRandomColor(){
                        const col =  "#"+Math.random().toString(16).slice(-6)
                        return col;
                    }

                        const randomColor = getRandomColor();

                    boxSub.style.backgroundColor = randomColor;
                    console.log("mouse enter", "color", randomColor)
                })

            boxSub.addEventListener("mouseleave", () => {
                    boxSub.style.backgroundColor = 'unset'
                    console.log("mouseleave")
                })

            boxList.appendChild(boxSub)    

}





