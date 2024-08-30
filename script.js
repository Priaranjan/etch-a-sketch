const container=document.querySelector("div");
container.style.display="flex";
container.style.height="100vh";
container.style["flexDirection"]="column";
container.style["alignItems"]="center";
container.style["justifyContent"]="center";
for(let i=0;i<16;i++){
    const row=document.createElement("div");
    row.style.display="flex";
    for(let j=0;j<16;j++){
        const div=document.createElement("div");
        div.setAttribute("style",
            "border: 1px solid black; width:20px; height: 20px;"
        )
        row.appendChild(div);
    }
    container.appendChild(row);
}