
const Board = () => {
    const boardCells = [];
    const boardField = document.querySelector('board');
    const renderCells = () =>{

    };
}

const Player = (name, type) => {
    const getName = () => name;
    const getType = () => type;
    const sayName = () => console.log(`${name} is on the move`);
    return{sayName};
}

const newGame = (()=>{
    //let players = [];
    const player1 = Player('Rok');
    const player2 = Player('Rok2');



    player1.sayName();
    player2.sayName();
    // let board = 

})();