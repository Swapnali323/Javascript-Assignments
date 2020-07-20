        function BankAccount(){
            this.accountNumber,
            this.accountHolderName,
            this.accountBalance,
            this.saving = function(isSalary){
                this.isSalary = isSalary;
              
            },

            this.current = function(odLimit){
                this.odLimit = odLimit;
            },

            this.withdraw = function(amount){
                if( this.accountBalance-amount == 0){
                    console.log("Balance is not sufficient");
                 }
                else{
                    this.accountBalance = this.accountBalance-amount;
                    console.log("amount is debited from your Account no. " +this.accountNumber)
                }
            }

            this.getCurrentBalance = function(){
                console.log("Current Balance is  "+this.accountBalance);
            }
        }

        var savAcc = new BankAccount();
        
        savAcc.accountNumber = 123456781888;
        savAcc.accountHolderName = "Swapnali Jadhav";
        savAcc.accountBalance = 50000;
        console.log( savAcc.accountHolderName +" Account balance in savings account "+ savAcc.accountBalance)
        

        var curAcc = new BankAccount();
        curAcc.accountNumber = 87878544512;
        curAcc.accountHolderName = "Vaiehee Jadhav";
        curAcc.accountBalance = 60000;
        console.log(curAcc.accountHolderName +" Account balance in current account " +curAcc.accountBalance)
        


        savAcc.withdraw(10000);
        savAcc.getCurrentBalance();

        curAcc.withdraw(30000);
        curAcc.getCurrentBalance();

