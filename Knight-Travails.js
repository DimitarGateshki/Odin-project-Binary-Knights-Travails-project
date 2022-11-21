const registry =new Map();

const chessMap= (x,y)=>{
    const xPos=x;
    const yPos=x;

    let predecessor;

    const Knight_Offsets=[
        [1,2],[1,-2],
        [2,1],[2,-1],
        [-1,2],[-1,-2],
        [-2,1],[-2,-1]
    ]


    const getPredecessor=()=>predecessor;
    const setPredecessor=(newPred)=>{
        predecessor=predecessor||newPred;
    }

    const name=()=>`${x},${y}`;

    const createKnightMove=()=>{
        return Knight_Offsets
        .map((offset)=> newSquareForm(offset[0],offset[1]))
        .filter((square)=>square!==undefined);
    }

    const newSquareForm=(xOffset,yOffset)=>{
        const [newX,newY]=[xPos+xOffset,yPos+yOffset];
    if(0<=newX && newX<8 && 0<=newY && y < 8){
        return chessMap(newX,newY);
    }   
 }

 if(registry.has(name())){
    return registry.get(name());
 }else{
    newSquare={name, getPredecessor,setPredecessor,createKnightMove}
    registry.set(name(),newSquare);
    return newSquare;
 }

}

const knightsTravails=(start,finish)=>{
    registry.clear();

    const origin=chessMap(...start);
    const target=chessMap(...finish);

    const queue=[origin];
    while(!queue.includes(target)){
        const currentSquare=queue.shift();

        const enqueueList=currentSquare.createKnightMove();
        enqueueList.forEach((e) => square.setPredecessor(currentSquare));
        queue.push(...enqueueList);
    }

    const path=[target];
    while(!path.includes(origin)){
        const prevSquare=path[0].getPredecessor();
        path.unshift(prevSquare);
    }

    console.log(`The shortest path was ${path.length - 1} moves!`);
    console.log("The moves were:");
    path.forEach(square => console.log(square.name()));

}

 module.exports=knightsTravails;