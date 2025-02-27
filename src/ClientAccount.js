class ClientAccount {
    constructor(first,last,email,password,balance){
        this.first = first;
        this.last = last;
        this.balance = balance;
        this.email = email;
        this.password = password;
        
        ClientAccount.clientDataBase.set(this.password, this);
        
    }
    static clientDataBase = new Map();
    
    getAccountDetails() {
        console.log(ClientAccount.clientDataBase.get(this.password));
        
        return `Account Name: ${this.first}, last: ${this.last}, email: ${this.email}}, password: ${this.password}}, balance: ${this.balance}`;
        
      }
    
    getClientByPassword() {
        return ClientAccount.clientDataBase.get(this.password);
    }
    
    login(email, password){
        if((ClientAccount.clientDataBase.get(email) !== undefined) &&(ClientAccount.clientDataBase.get(password) !== undefined)){
            console.log('has an account');
        }

    }
    
    
}

export default ClientAccount;