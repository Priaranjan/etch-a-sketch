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

const button=document.createElement("button");
const body=document.querySelector("body");
body.insertBefore(button,container);
button.textContent="Change number of squares";

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
            cell.style["backgroundColor"]="black";
        });
    });
}

button.addEventListener("click",()=>{
    let number=prompt("Enter number of squares per row");
    createGrid(number);
});
