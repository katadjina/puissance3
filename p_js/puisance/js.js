let player1, player2;
let player;
let starting = "red";


let r5 = document.getElementById("r5");
let r4 = document.getElementById("r4");
let r3 = document.getElementById("r3");
let r2 = document.getElementById("r2");
let r1 = document.getElementById("r1");

//filing in the arrays bc otherwise when compared i get equality and hence wining combo // ? fix
let row1 = [1, 2, 3, 4, 5];
let row2 = [6, 7, 8, 9, 10];
let row3 = [11, 12, 13, 14, 15];
let row4 = [16, 17, 18, 19, 20];
let row5 = [21, 22, 23, 24, 25];



function start(){
player1 = document.getElementById("name1").value;
player2 = document.getElementById("name2").value;
let view = document.getElementById("intropart");
view.classList.remove("intro");
view.classList.add("hidden");
let maingame = document.getElementById("maingame");
maingame.classList.remove("hidden");
if (player1.length > 0 && player2.length > 0) {
    let t1 = document.getElementById("t1");
    let t2 = document.getElementById("t2");
    t1.innerHTML = player1;
    t2.innerHTML = player2;
    console.log(t1);
}

}


function play(){
    document.getElementById("r5").classList.remove("unclickable");
    document.getElementById("playbtn").style.display = "none";
    document.getElementById("row0").classList.remove("unclickable");
    player = 1;

}




let currentRow = 0;
let current;


let currentPlayer = "red";



function oo(e) {
    if(player == 1){
        e.style.backgroundColor= currentPlayer;
        return;
    }
    if(player == 0){
        e.style.backgroundColor= "blue";
        return;
    }
};

function ooo(e){
    e.style.backgroundColor = "white";
}


function color(e){
    if (player == 1){
     e.style.backgroundColor=currentPlayer;
     current = currentPlayer;
     currentRow++;
     player = 0;
     console.log(player);
   
     
     //function to add to the array
     //function to unblock cell above
     return;
    }
    if (player == 0){
        e.style.backgroundColor=nextPlayer;
        console.log(current);
        currentRow++;
        player = 1;
        console.log(player);
       
    }
  
}
//checkPositions funstion:



function checkPositions(){
    //horizontal combos:
    //row1
    if(row1[0] == row1[1] && row1[0] == row1[2]){
        console.log('wins');
        return;
    }
    if(row1[1] == row1[2] && row1[1] == row1[3]){
        console.log('wins');
        return;
    }
    if(row1[2] == row1[3] && row1[3] == row1[4]){
        console.log('wins');
        return;
    }
    //row2
    if(row2[0] == row2[1] && row2[0] == row2[2]){
        console.log('wins');
        return;
    }
    if(row2[1] == row2[2] && row2[1] == row2[3]){
        console.log('wins');
        return;
    }
    if(row2[2] == row2[3] && row2[3] == row2[4]){
        console.log('wins');
        return;
    }
     //row3
    if(row3[0] == row3[1] && row3[0] == row3[2]){
        console.log('wins');
        return;
    }
    if(row3[1] == row3[2] && row3[1] == row3[3]){
        console.log('wins');
        return;
    }
    if(row3[2] == row3[3] && row3[3] == row3[4]){
        console.log('wins');
        return;
    }
      //row4
    if(row4[0] == row4[1] && row4[0] == row4[2]){
        console.log('wins');
        return;
    }
    if(row4[1] == row4[2] && row4[1] == row4[3]){
        console.log('wins');
        return;
    }
    if(row4[2] == row4[3] && row4[3] == row4[4]){
        console.log('wins');
        return;
    }
    //row4
    if(row5[0] == row5[1] && row5[0] == row5[2]){
    console.log('wins');
    return;
    }
    if(row5[1] == row5[2] && row5[1] == row5[3]){
        console.log('wins');
        return;
    }
    if(row5[2] == row5[3] && row5[3] == row5[4]){
        console.log('wins');
        return;
    }
//vertical combos:
//column1:
    if(row1[0] == row2[0] && row1[0] == row3[0]){
        console.log('wins');
    return;
    }
    if(row2[0] == row3[0] && row2[0] == row4[0]){
        console.log('wins');
        return;
    }
    if(row3[0] == row4[0] && row3[0] == row5[0]){
        console.log('wins');
        return;
    }
//column2:
    if(row1[1] == row2[1] && row1[1] == row3[1]){
        console.log('wins');
        return;
    }
    if(row2[1] == row3[1] && row2[1] == row4[1]){
        console.log('wins');
        return;
    }
    if(row3[1] == row4[1] && row3[1] == row5[1]){
        console.log('wins');
        return;
    }
//column3:
    if(row1[2] == row2[2] && row1[2] == row3[2]){
        console.log('wins');
        return;
    }
    if(row2[2] == row3[2] && row2[2] == row4[2]){
        console.log('wins');
        return;
    }
    if(row3[2] == row4[2] && row3[2] == row5[2]){
        console.log('wins');
        return;
    }
//column4:
    if(row1[3] == row2[3] && row1[3] == row3[3]){
        console.log('wins');
        return;
    }
    if(row2[3] == row3[3] && row2[3] == row4[3]){
        console.log('wins');
        return;
    }
    if(row3[3] == row4[3] && row3[3] == row5[3]){
        console.log('wins');
        return;
    }

//column5:
if(row1[4] == row2[4] && row1[4] == row3[4]){
    console.log('wins');
    return;
}
if(row2[4] == row3[4] && row2[4] == row4[4]){
    console.log('wins');
    return;
}
if(row3[4] == row4[4] && row3[4] == row5[4]){
    console.log('wins');
    return;
}

//diagonal combos:


};


//function to veify if bottom is already clicked

//Column 1:
let col1_ = 0;

function insert1(e){
e.style.backgroundColor = "white";
if (col1_ <= 0){
    col1_++;
    document.getElementById('c1_1').style.background = currentPlayer;
    row1[0] = currentPlayer;
    //change player after placing your token:
    currentPlayer == "red" ? (currentPlayer = "blue") : (currentPlayer = "red");
    checkPositions();
    return;
    }
if (col1_ == 1){
    col1_++;
    document.getElementById('c1_2').style.background = currentPlayer;
    row2[0] = currentPlayer;
    currentPlayer == "red" ? (currentPlayer = "blue") : (currentPlayer = "red");
    checkPositions();
    return;
}
if (col1_ == 2){
    col1_++;
    document.getElementById('c1_3').style.background = currentPlayer;
    row3[0] = currentPlayer;
    currentPlayer == "red" ? (currentPlayer = "blue") : (currentPlayer = "red");
    checkPositions();
    return;
}


if (col1_ == 3){
    col1_++;
    document.getElementById('c1_4').style.background = currentPlayer;
    row4[0] = currentPlayer;
    currentPlayer == "red" ? (currentPlayer = "blue") : (currentPlayer = "red");
    checkPositions();
    return;
}


if (col1_ == 4){
    col1_++;
    document.getElementById('c1_5').style.background = currentPlayer;
    row5[0] = currentPlayer;
    currentPlayer == "red" ? (currentPlayer = "blue") : (currentPlayer = "red");
    checkPositions();
    return;
}

}

let col2_ = 0;

function insert2(e){
e.style.backgroundColor = "white";
    if (col2_ <= 0){
        col2_++;
        document.getElementById('c2_1').style.background = currentPlayer;
        row1[1] = currentPlayer;
        currentPlayer == "red" ? (currentPlayer = "blue") : (currentPlayer= "red");
        checkPositions();
        return;
    }
    
    if (col2_ == 1){
        col2_++;
        document.getElementById('c2_2').style.background = currentPlayer;
        row2[1] = currentPlayer;
        currentPlayer == "red" ? (currentPlayer = "blue") : (currentPlayer = "red");
        checkPositions();
        return;
    }
    
    if (col2_ == 2){
        col2_++;
        document.getElementById('c2_3').style.background = currentPlayer;
        row3[1] = currentPlayer;
        currentPlayer == "red" ? (currentPlayer = "blue") : (currentPlayer= "red");
        checkPositions();
        return;
    }
    
    
    if (col2_ == 3){
        col2_++;
        document.getElementById('c2_4').style.background = currentPlayer;
        row4[1] = currentPlayer;
        currentPlayer == "red" ? (currentPlayer = "blue") : (currentPlayer = "red");
        checkPositions();
        return;
    }
    
    
    if (col2_ == 4){
        col2_++;
        document.getElementById('c2_5').style.background = currentPlayer;
        row5[1] = currentPlayer;
        currentPlayer == "red" ? (currentPlayer = "blue") : (currentPlayer = "red");
        checkPositions();
        return;
    }
    
    }
    
let col3_ = 0;

function insert3(e){
e.style.backgroundColor = "white";
    if (col3_ <= 0){
        col3_++;
        document.getElementById('c3_1').style.background = currentPlayer;
        row1[2] = currentPlayer;
        currentPlayer == "red" ? (currentPlayer = "blue") : (currentPlayer = "red");
        checkPositions();
        return;
        }
    if (col3_ == 1){
        col3_++;
        document.getElementById('c3_2').style.background = currentPlayer;
        row2[2] = currentPlayer;
        currentPlayer == "red" ? (currentPlayer = "blue") : (currentPlayer = "red");
        checkPositions();
        return;
        }
    if (col3_ == 2){
        col3_++;
        document.getElementById('c3_3').style.background = currentPlayer;
        row3[2] = currentPlayer;
        currentPlayer == "red" ? (currentPlayer = "blue") : (currentPlayer = "red");
        checkPositions();
        return;
        }
    if (col3_ == 3){
        col3_++;
        document.getElementById('c3_4').style.background = currentPlayer;
        row4[2] = currentPlayer;
        currentPlayer == "red" ? (currentPlayer = "blue") : (currentPlayer = "red");
        checkPositions();
        return;
        }
    if (col3_ == 4){
        col3_++;
        document.getElementById('c3_5').style.background = currentPlayer;
        row5[2] = currentPlayer;
        currentPlayer == "red" ? (currentPlayer = "blue") : (currentPlayer = "red");
        checkPositions();
        return;
        }
}


let col4_ = 0;

function insert4(e){
e.style.backgroundColor = "white";
    if (col4_ <= 0){
        col4_++;
        document.getElementById('c4_1').style.background = currentPlayer;
        row1[3] = currentPlayer;
        currentPlayer == "red" ? (currentPlayer = "blue") : (currentPlayer = "red");
        checkPositions();
        return;
        }
    if (col4_ == 1){
        col4_++;
        document.getElementById('c4_2').style.background = currentPlayer;
        row2[3] = currentPlayer;
        currentPlayer == "red" ? (currentPlayer = "blue") : (currentPlayer = "red");
        checkPositions();
        return;
        }
    if (col4_ == 2){
        col4_++;
        document.getElementById('c4_3').style.background = currentPlayer;
        row3[3] = currentPlayer;
        currentPlayer == "red" ? (currentPlayer = "blue") : (currentPlayer = "red");
        checkPositions();
        return;
        }
    if (col4_ == 3){
        col4_++;
        document.getElementById('c4_4').style.background = currentPlayer;
        row4[3] = currentPlayer;
        currentPlayer == "red" ? (currentPlayer = "blue") : (currentPlayer = "red");
        checkPositions();
        return;
        }
    if (col4_ == 4){
        col4_++;
        document.getElementById('c4_5').style.background = currentPlayer;
        row5[3] = currentPlayer;
        currentPlayer == "red" ? (currentPlayer = "blue") : (currentPlayer = "red");
        checkPositions();
        return;
        }
}       

let col5_ = 0;

function insert5(e){
e.style.backgroundColor = "white";
    if (col5_ <= 0){
    col5_++;
    document.getElementById('c5_1').style.background = currentPlayer;
    row1[4] = currentPlayer;
    currentPlayer == "red" ? (currentPlayer = "blue") : (currentPlayer = "red");
    checkPositions();
    return;
    }
    if (col5_ == 1){
    col5_++;
    document.getElementById('c5_2').style.background = currentPlayer;
    row2[4] = currentPlayer;
    currentPlayer == "red" ? (currentPlayer = "blue") : (currentPlayer = "red");
    checkPositions();
    return;
    }
    if (col5_ == 2){
    col5_++;
    document.getElementById('c5_3').style.background = currentPlayer;
    row3[4] = currentPlayer;
    currentPlayer == "red" ? (currentPlayer = "blue") : (currentPlayer = "red");
    checkPositions();
    return;
    }
    if (col5_ == 3){
    col5_++;
    document.getElementById('c5_4').style.background = currentPlayer;
    row4[4] = currentPlayer;
    currentPlayer == "red" ? (currentPlayer = "blue") : (currentPlayer = "red");
    checkPositions();
    return;
    }
    if (col5_ == 4){
    col5_++;
    document.getElementById('c5_5').style.background = currentPlayer;
    row5[4] = currentPlayer;
    currentPlayer == "red" ? (currentPlayer = "blue") : (currentPlayer = "red");
    checkPositions();
    return;
    }
}     