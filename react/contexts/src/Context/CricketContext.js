//purpose of this file is to create a context.
//create a context means => it means that we are creating a empty global object.

import React, {createContext} from "react";

const cricketContext = createContext();

export default cricketContext;


//cricketContext = () //special kind of obj.
// cricketContext = {
//     Provider: () => {}, //it will help to add the value inside that context.
//     Consumer: () => {} //it will help to access the value inside that context.
// }