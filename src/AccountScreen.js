import "./AccountScreen.css";
import { useState, useEffect, useRef } from "react";
import AccountHolder from "./AccountHolder";
import App from "./App";
import AccountCreatorScreen from "./AccountCreatorScreen";
function AccountScreen({toHomeScreen,currentUserFromHomePage }) { //insert correct ref
  const [account, setAccount] = useState(null);
  const inputDeposit = useRef(null);
  const inputWithdrawl = useRef(null);
  
  // Retrieve account data from localStorage 
  useEffect(() => {
    const storedAccount = localStorage.getItem(currentUserFromHomePage); //insert correct ref
        if (storedAccount) {
      setAccount(JSON.parse(storedAccount));
    }
  }, [currentUserFromHomePage]); 


const deposit = () => {
  let userData = localStorage.getItem(currentUserFromHomePage);
  userData = JSON.parse(userData);
  console.log("depositing " + inputDeposit.current?.value + " dollars into: " + userData.name);
  let result = parseInt(inputDeposit.current?.value) + parseInt(userData.checkingsBalance);
  userData.checkingsBalance = result;
  console.log("New checking account balance: " + userData.checkingsBalance);
  localStorage.setItem(userData.name, JSON.stringify(userData));
  setAccount(userData);
}


  return (
    <>
      <div className="containerForAccountView">
      <div className="depositOrWithdrawl">
        <button className="depostirButton" >Make a Withdrawl</button>
        <input className="inputOrWithrawlBox" ref={inputWithdrawl}></input>
      </div>
        <div className="everythingInTheMiddle">
          <h2 className="accountsHeader">Active Accounts</h2>
          <div className="bankAccountsContainer">
            <div className="blueStripeTop"> Checking </div>
            <text className="checksingsAndSavingsText">
              Crestline Checkings (...0873)
            </text>
            <p className="balance">{account?.checkingsBalance ?? "N/A"}</p>
          </div>
          <div className="bankAccountsContainer">
          <div className="blueStripeTop"> Savings </div>
          <text className="checksingsAndSavingsText">
              Crestline Savings (...0873)
            </text>
            <p className="balance">{account?.savingsBalance ?? "N/A"}</p>
          </div>
          <button className="backHomeButton" onClick={toHomeScreen}>Back to Home</button>
          
          </div>
          <div className="depositOrWithdrawl">
          <button className="depostirButton" onClick={deposit}>Make a Deposit</button>
          <input className="inputOrWithrawlBox" ref={inputDeposit}></input>
          </div>


      </div>
    </>
  );
}

export default AccountScreen;


