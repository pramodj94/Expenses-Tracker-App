import React, { useEffect, useState } from "react";
import Expenses from "./componants/Expenses";
import NewExpense from "./componants/NewExpenses/NewExpense";

let DUMMY_EXPENSE  =[]
    
  const App=()=>{
    const[expenses,setExpenses]=useState(DUMMY_EXPENSE)
    useEffect(()=>{ fetch("https://techgun.website/sample/api/read.php" ).then(response=>{
      return response.json()
    }).then (data =>{setExpenses(data)})},[])
  
   
  const addExpenseHandler =(expense)=>{
    const udatedExpense =[expense ,...expenses]
    setExpenses(udatedExpense )
  }
  return (
    <>
    <NewExpense onAddExpense ={addExpenseHandler}/>
     <Expenses item ={expenses}/>
    </>
  )
}


export default App

