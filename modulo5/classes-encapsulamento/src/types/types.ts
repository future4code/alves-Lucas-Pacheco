

// type Transaction = {
//     description: string,
//     value: number,
//     date: string
//   }

  class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
       transactions: Transaction[]
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
       this.transactions = transactions
    }
   public getCpf() : string {
    return this.cpf

   }
                    
   public getName(): string {
    return this.name
   }

   public getAge(): number {
    return this.age
   }

   public setCpf(cpf: string) {
    this.cpf = cpf
   }

   public setName(name: string) {
    this.name = name
   }

   public setAge(age: number) {
    this.age = age
   }

   public getTransactions(){
    return this.transactions
   }



}

  class Transaction {
    private date: string
    private value: number
    private description: string

    constructor(
        date: string,
        value: number,
        description: string
    ) {
        this.date = date,
        this.value = value;
        this.description = description
    }
    public getDate(){
        return this.date
    }
    public getValue(){
        return this.value
    }
    public getDescription(){
        return this.description
    }

    public setDate(date: string){
        this.date = date
    }
    public setValue(value: number){
        this.value = value
    }
    public setDescription(description: string){
        this.description = description
    }

    
  }

  class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts
    }

    public setAccounts(accounts: UserAccount[]){
        this.accounts = accounts
    }

    public getAccounts(){
        return this.accounts
    }
  }

  

  // 1 - A - Ele serve para fazer uma classe funcionar internamente construindo seu funcionamento e seu this.

  // 1  - B  - Como type Transaction ainda não foi criado, nenhuma, retirando o transaction aparece 1 vez.

  const primeiraTransação: Transaction = new Transaction("Crédito", 200, "05/09/2022")

  const newUser: UserAccount = new  UserAccount("12312312312312312312", "Jorge", 69, [primeiraTransação] )

  export const contaJorge: Bank = new Bank([newUser])

  

  