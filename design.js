
function colorChange(x,y,color){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            let x1=x+i;
            let y1=y+j;
            let id=x1+""+y1;
            document.getElementById(id).style.background=color;
        }
    }
}

let bigBox=document.getElementById('sudoku');

function boxCreator(){


    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            let div=document.createElement('div');
            let ins=document.createElement('input');
            ins.type="text";

            ins.style.width="65px";
            ins.style.height="65px";
            ins.style.textAlign="center";
            ins.style.fontSize="45px";
            ins.style.background="transparent";
            ins.style.backdropFilter="blur(5px)";
            ins.style.color="white";
          

            let makeId="";
            makeId+=i;
            makeId+=j
            ins.id=makeId;
            

            div.style.width="65px";
            div.style.height="65px";
            div.style.border="0.1px solid black";
            div.style.display="flex";
            div.style.alignItems="center";
            div.style.justifyContent="center";
            div.style.background="transparent";

            div.appendChild(ins);
            bigBox.appendChild(div);

        }
    }

    defaultcolor();

}
boxCreator();

function defaultcolor(){
    let color="rgba(8, 90, 53, 0.7)";
    let x=0,y=0;//top left
    colorChange(x,y,color);

    x=0,y=6;//top right
    colorChange(x,y,color);

    x=6,y=0;//bottom left
    colorChange(x,y,color);

    x=6,y=6;//bottom right
    colorChange(x,y,color);



    x=0,y=3;//top center
    color="rgba(255,145,77,0.7)";
    colorChange(x,y,color);

    x=3,y=0;//mid left
    colorChange(x,y,color);

    x=3,y=6;//mid right
    colorChange(x,y,color);

    x=6,y=3;//bottom center
    colorChange(x,y,color);




    x=3,y=3;//mid center
    color="rgba(167,108,230,0.7)";
    colorChange(x,y,color);
}



function wrongColor(x){
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            document.getElementById(i+""+j).style.background="rgba(255,0,0,0.7)";

        }
    }

    setTimeout(() => {
        if (x === "error1") {
          alert(" Invalid input :( ");
        } else {
          alert(" No solution Exist :( ");
        }
      }, 20);

}
