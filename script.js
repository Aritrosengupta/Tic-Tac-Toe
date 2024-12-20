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
        NumberOfTurns++;
    }

    const SelectBoard=(Value)=>{
        Gameboard[Value]=playerTurn;
        ChangePlayerTurn();
        console.log(playerTurn)

    }
  
  
    return{Gameboard,playerTurn,NumberOfTurns,SelectBoard};

})();


