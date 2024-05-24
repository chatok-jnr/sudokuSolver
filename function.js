function check(sudoku,x,y,val){
	for(let i=0;i<9;i++){
		if(sudoku[x][i]===val || sudoku[i][y]===val)return false;
	}
	let x1=x-x%3;
	let y1=y-y%3;
	for(let i=0;i<3;i++){
		for(let j=0;j<3;j++){
			if(sudoku[x1+i][y1+j]===val)return false;
		}
	}
	return true;
};

function solve(sudoku,x,y){
	if(x===8 && y>8)return true;
	if(y===9){
		x++;
		y=0;
	}
	if(sudoku[x][y]>0)return solve(sudoku,x,y+1);
	for(let i=1;i<=9;i++){
		if(check(sudoku,x,y,i)){
			sudoku[x][y]=i;
			if(solve(sudoku,x,y+1))return true;
		}
		sudoku[x][y]=0;
	}
	return false;
};

function main(){
	let sudoku=[
		[0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0],

		[0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0],

		[0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0],
	];

	

	for(let i=0;i<9;i++){
		for(let j=0;j<9;j++){
			let x=i+""+j;
			if(document.getElementById(x).value!=""){
				sudoku[i][j]=Number(document.getElementById(x).value);
			}
		}
	}

	

	for(let i=0;i<9;i++){
		for(let j=0;j<9;j++){
			if(sudoku[i][j]!=0){
				let z=sudoku[i][j];
				sudoku[i][j]=0;
				if(!check(sudoku,i,j,z)){
					wrongColor("error1");
					return;
				}
				sudoku[i][j]=z;
			}
		}
	}



	if(solve(sudoku,0,0)){
		for(let i=0;i<9;i++){
			for(let j=0;j<9;j++){
				let x=i+""+j;
				document.getElementById(x).value=sudoku[i][j];
			}
		}
	}else{
		wrongColor("error2");
    }

};

function reset(){
	defaultcolor();
	for(let i=0;i<9;i++){
		for(let j=0;j<9;j++){
			let x=i+""+j;
			document.getElementById(x).value="";
		}
	}
}