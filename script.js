const Gameboard=(function(){

    let Gameboard=['','','',
                    '','','',
                    '','',''
    ];
                                       
    let playerTurn='X';
    let NumberOfTurns=0;

    const ChangePlayerTurn=()=>{
        if(playerTurn=='X'){
            playerTurn='O';
        }else{
            playerTurn='X';
        }
        
    }

    const SelectBoard=(Value)=>{
        Gameboard[Value]=playerTurn;
        NumberOfTurns++;
        // console.log(NumberOfTurns);
        if(CheckWinner()){
            console.log(`${playerTurn} Has won the game!!!`)
        }else if(NumberOfTurns==9){
            console.log("it's a draw");
        }
        ChangePlayerTurn();
        

    }

    const CheckWinner=()=>{
       const combination=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

       for(let comb of combination){
        const [a,b,c]=comb;
        if(Gameboard[a]!=''&&Gameboard[a]==Gameboard[b]&&Gameboard[b]==Gameboard[c]){
            return true;
        }

       }
       return false;
    }

    const reset=()=>{
        Gameboard=['','','',
            '','','',
            '','',''];
        playerTurn='X';
         NumberOfTurns=0;
    }
  
  
    return{Gameboard,playerTurn,NumberOfTurns,SelectBoard,reset};

})();


