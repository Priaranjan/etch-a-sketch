const container=document.querySelector("div");
container.style.display="flex";
container.style.height="480px";
container.style.width="480px";
container.style["flexDirection"]="column";
container.style["alignItems"]="center";
container.style["justifyContent"]="center";
container.style.borderColor="black";
container.style.borderStyle="solid";
container.style.borderWidth="2px";

const buttons=document.createElement("div");
const body=document.querySelector("body");

const size=document.createElement("button");
buttons.appendChild(size);
size.textContent="Change number of squares";

const standard=document.createElement("button");
buttons.appendChild(standard);
standard.textContent="Standard mode";

const Rainbow=document.createElement("button");
buttons.appendChild(Rainbow);
Rainbow.textContent="Rainbow mode";

const darken=document.createElement("button");
buttons.appendChild(darken);
darken.textContent="Darkening effect";

body.insertBefore(buttons,container);
let rainbow=false;
let toDarken=false;

body.style.display="flex";
body.style.flexDirection="column";
body.style.alignItems="center";
body.style.justifyContent="space-between";
body.style.height="80vh";

createGrid(16);

function createGrid(number){
    number=parseInt(number,10);
    if(!Number.isInteger(number) || number<=0 || number>100){
        alert("Invalid number");
        return;
    }
    container.innerHTML="";
    for(let i=0;i<number;i++){
        const row=document.createElement("div");
        row.className="row";
        row.style.display="flex";
        row.style.width="100%";
        row.style.justifyContent="center";
        row.style.flex = `1 1 calc(100% / ${number})`;
        for(let j=0;j<number;j++){
            const div=document.createElement("div");
            div.style.height="100%";
            div.style.flex = `1 1 calc(100% / ${number})`;
            div.style.opacity="0";
            row.appendChild(div);
        }
        container.appendChild(row);
    }
    startSketch();
}

function startSketch(){
    const cells=document.querySelectorAll("div:not(.container):not(.row)")
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            //darkening effect
            if(toDarken){
            const computedStyle = window.getComputedStyle(cell);
            let opacity = parseFloat(computedStyle.opacity);
            opacity=Math.min(opacity+0.1,1);
            cell.style.opacity=`${opacity}`;
            }
            else{
                cell.style.opacity="1";
            }

            if(!rainbow) cell.style["backgroundColor"]="black"; // standard;
            else{
            //random
                let r=parseInt(255*Math.random(),10);
                let g=parseInt(255*Math.random(),10);
                let b=parseInt(255*Math.random(),10);
                cell.style["backgroundColor"]=`rgb(${r},${g},${b})`;
            }
        });
    });
}

size.addEventListener("click",()=>{
    let number=prompt("Enter number of squares per row");
    createGrid(number);
});

standard.addEventListener("click",()=>{
    rainbow=false;
    toDarken=false;
    //startSketch();
});

Rainbow.addEventListener("click",()=>{
    rainbow=true;
    createGrid(number);
});

darken.addEventListener("click",()=>{
    toDarken=true;
    //startSketch();
});