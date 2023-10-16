import React, {useState} from "react";

const StatesWithObjects = () => {
    const [coins, setCoin] = useState({gold: 0, silver: 0, bronze: 0});
    console.log(coins);

    return (
        <div>
            <h1> State With Objects </h1>
            <h2> Gold: {coins.gold}  Silver: {coins.silver} Bronze: {coins.bronze} </h2>

            {/* both are same. */}
            {/* <button onClick={() => setCoin({gold: coins.gold+1, silver: coins.silver, bronze: coins.bronze})}> Gold </button> */}
            <button onClick={() => setCoin({...coins, gold: coins.gold+1})}> Gold </button>
            <button onClick={() => setCoin({...coins, silver: coins.silver+1})}> Silver </button>
            <button onClick={() => setCoin({...coins, bronze: coins.bronze+1})}> Bronze </button>
        </div>
    )
}

export default StatesWithObjects;