import "./App.css";
import React from "react";
import crestLineBankLogo from "./images/crest-clipart-3.png.crdownload";
import homeIcon from "./images/home-icon-2048x2044-harlnvak.png";
import checkIcon from "./images/847248_check_512x512.png";
import piggyBankIcon from "./images/black-and-white-piggy-bank-png-black-piggy-bank-2-icon-256.png";
import phoneIcon from "./images/email-and-mail-icon-black-free-png.webp";
import ratingIcon from "./images/190590-200.png";
import questionMarkIcon from "./images/question-mark-transparent-free-png.webp";
import { useState,useRef } from "react";
import AccountCreatorScreen from './AccountCreatorScreen'
import AccountScreen from "./AccountScreen";

function App() {
  const [accountCreatorScreen, setAccountCreatorScreen] = useState(false);
  const [homePage, setHomePage] = useState(true);
  const [accountScreen, setAccountScreen] = useState(false);
  const [currentUserFromHomePage, setcurentUserFromHomePage] = useState(null);
  const userNameHomePage = useRef(null);
  const toAccountCreatorScreen = () => {
    setAccountCreatorScreen(true);
    setHomePage(false);
  };

  const toHomeScreen = () => {
    setAccountCreatorScreen(false);
    setAccountScreen(false);
    setHomePage(true);
  }

 // this is an attempt to update a global variable tha can be referenced in any file 
  const userExists = () =>{ //"account" is a filler term for now and must be replaced by something that can be 
  // referenced across every file of app. Once this global reference is established, replace of instances of "account" 
  // with global reference
  const currentUser = userNameHomePage.current?.value; 
    console.log("Searching for: " + currentUser); 
     //userHomeConst = the value of the text input for User Name 
    //console.log("Found account:", JSON.parse(localStorage.getItem(currentUser)));
    if ((localStorage.getItem(currentUser)!=null) && (localStorage.getItem(currentUser)!="" )){
      console.log("Welcome in, "+ currentUser + "!");
      setcurentUserFromHomePage(currentUser);
      setHomePage(false);
      setAccountCreatorScreen(false);
      setAccountScreen(true);
      
    } 
  }

  return (
    <div className="containerForEverything">
      {accountCreatorScreen && (
        <AccountCreatorScreen toHomeScreen={toHomeScreen}></AccountCreatorScreen>
      )}
      {accountScreen &&(
        <AccountScreen toHomeScreen ={toHomeScreen}  currentUserFromHomePage={currentUserFromHomePage} > hello</AccountScreen>
      )}
       {homePage && (<>

    
      <div className="firstChunkOfHomePage">
        {" "}
        <div className="frazierBankLogoTopLeft">
          <img src={crestLineBankLogo} alt="" className="frazierBankLogo" />{" "}
          <div className="slogan"> Crestline </div> 
        </div>
        <div className="subheadingsOfFirstChunksContainer">
          {/*Onlt to be used if I decided to implement subheadings underneath "Made for...People" */}
        </div>
      </div>
      <div className="secondChunkOfHomePage">
        <div className="secondChunkSubContainer">
          <div className="leftContainerOfSecondChunkOfHomePage"></div>
          <div className="leftConatinerSubContainer">
            <div className="enjoy">Enjoy</div>
            <div className="dollarSignThreeHundred">$300</div>
          </div>
          <div className="middleContainerOfSecondChunkOfHomePage">
            <div className="middleContainerSubConatainer">
              <div className="newCheckingCustomers">
                New CrestLine Checking Customers will receive a large cash bonus
                upon sign up.
              </div>
              <div className="openAF">
                {" "}
                Open a Frazier Total Checking account with qualifying activities
              </div>
              <button
                className="openAnAccount"
                onClick={toAccountCreatorScreen}
              >
                Open an Account{" "}
              </button>
            </div>
          </div>
          <div className="rightContainerOfsecondChunkOfHomePage">
            <div className="rightContainerSubContainer">
              <div className="welcome"> Welcome ! </div>
              <div className="username" > Username </div>
              <input className="usernameTextArea"ref={userNameHomePage}></input>
              <div></div>{" "}
              {/* div is here so buttons stack on top of eachother. Why do I need this tho? 
                Why dont they act normally?*/}
              <button className="signInButton" onClick={userExists} > Sign In </button>
            </div>
          </div>
        </div>
      </div>
      <div className="thirdChunkOfHomePage">
        <div className="thirdChunkOfHomePageSubContainer">
          <header className="howCanWeHelp">How can we help?</header>
          <div className="howCanWeHelpOptionsContainer">
            <div className="helpOptions">
              <div className="helpOptionMessages"> Mortgage</div>
              <img src={homeIcon} alt="" className="helpOptionsIcons" />{" "}
            </div>
            <div className="helpOptions">
              <div className="helpOptionMessages">Checkings</div>
              <img src={checkIcon} alt="" className="helpOptionsIcons" />{" "}
            </div>
            <div className="helpOptions">
              <div className="helpOptionMessages">Savings</div>
              <img
                src={piggyBankIcon}
                alt=""
                className="helpOptionsIcons"
              />{" "}
            </div>
            <div className="helpOptions">
              <div className="helpOptionMessages">Contact Us</div>
              <img src={phoneIcon} alt="" className="helpOptionsIcons" />{" "}
            </div>
            <div className="helpOptions">
              <div className="helpOptionMessages">Rate us</div>
              <img src={ratingIcon} alt="" className="helpOptionsIcons" />{" "}
            </div>
            <div className="helpOptions">
              <div className="helpOptionMessages">
                {" "}
                Have questions? Click here.{" "}
              </div>
              <img
                src={questionMarkIcon}
                alt=""
                className="helpOptionsIcons"
              />{" "}
            </div>
          </div>
        </div>
      </div> 
      <div className="fourthChunkOfHomePage"></div> </>)}
    </div>
  );
}

export default App;

{
  /* when I click links on other websites, it refresshes the page. Is this related to <forms>? 
  Say I clcik the Open an Account button, should the next screen the pops up be wrapped in a <form> to save the input user data?
  Should the home page be inside a form as well?
  How do I make this an actual website
  Tips to make the <input> and <button> look better?*/
}
