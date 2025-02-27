import { useState,useRef } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./AccountCreatorScreen.css"
import crestLineBankLogo from "./images/crest-clipart-3.png.crdownload";
import AccountHolder from './AccountHolder';
import App from "./App";

function AccountCreatorScreen({toHomeScreen}){
    const username = useRef(null); 
    const firstName = useRef(null);
    const newUser = () =>{
        const userValue = username.current?.value.trim();
        const firstNameValue = firstName.current?.value.trim();
        const account = new AccountHolder(userValue,firstNameValue,true,false,300,0);
        if ((firstNameValue && userValue) != null){
            toHomeScreen();//maybe use userValue here 
            localStorage.setItem( userValue ,JSON.stringify(account));//this is where the new account is created 
            console.log("Account Created:", localStorage.getItem(userValue)); //
        } else {
            console.log("Username not recognized, retry.");
        }
    }

    const clearLocalStroage = () =>{
        localStorage.clear();
    }

    return(<>
    
    <form className="formForCreatorScreen">
        <div className="accountCreatorScreenContainer">
        <Form.Group className = "inputAreas" >
            <h2 className="inputYourInfoTitle">Input your information please.</h2>
            <Form.Label className="formLabels">First Name</Form.Label>
            <Form.Control className="formControls" type="first name" placeholder="Enter First Name Here"ref={firstName}></Form.Control>
            <Form.Label className="formLabels">Create a Username</Form.Label>
            <Form.Control className="formControls" type="Username" placeholder="Create a User Name for Yourself" ref={username}></Form.Control>
            <Button className="submitButton" onClick={newUser}>Submit</Button>
            <Button onClick={clearLocalStroage}>Clear localStorage </Button>
            
        </Form.Group>
        
        </div>
        <div className="rightHalfOfCreatorScreen">
        <img src={crestLineBankLogo} alt="" className="crestLineBankLogo" />{" "}
        <h2 className="crestLineTitle">Crestline </h2>
        </div>
    </form>
    
    
    </>)
}

export default AccountCreatorScreen;