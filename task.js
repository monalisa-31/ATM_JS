console.log("Welcome to Money World !\nPlease insert your Card")
console.log("Hi,Please Do not Remove your ATM Card.\nLeave your Card Inserted during  the Entire Transaction")
var number = require('readline-sync');
var language=number.question("Please Select  Your Language")
if (language==1){
    console.log("English")
}
else if (language==2){
    console.log("Hindi")
}
else{
    console.log("ODIA")
}
var account=1676120000271
var mypin=4234
var total=50000
var number = require('readline-sync');
var pin=number.questionInt("Please Enter Your PIN")
if (pin==mypin){
    console.log("PIN GENERATION")
    var number = require('readline-sync');
    var transaction=number.questionInt("Please Select Your Transaction\n1.Cash Withdrawal\n2.Balance Inquiry\n3.Deposit\n4.PIN Change")
    if (transaction==1){
        var number = require('readline-sync');
        var withdraw=number.questionFloat("Please Enter your Amount to Withdrawal")
        console.log("your Available cash:Rs.10,Rs.20,Rs.50,Rs.100,Rs.200,Rs.500,Rs.2000")
        if (total>withdraw){
            var balance=total-withdraw
            console.log("Your Transaction is Being Processed.\nHold on a Minitue")
            console.log("Please Collect Cash from your ATM")
            console.log("Your Availbl Balance is :",balance)
        }
        else{
            console.log("You Have Insufficient Balance")
        }
    }
    else if (transaction==2){
        console.log("Your Rest Balance is :",total)
    }
    else if (transaction==3){
        var number = require('readline-sync');
        var deposit=number.questionFloat("Enter Your Amount to Depost")
        var balance=total+deposit
        console.log("Deposit Success")
        console.log("Your Total Balance Now is :",balance)
    }
    else if (transaction==4){
        var number = require('readline-sync');
        var pinchange=number.questionInt("you want to change your PIN code Yes/NO:")
        if (pinchange==1){
            console.log("Enter Yes")
            var number = require('readline-sync');
            var ac=number.questionInt("Please enter your account number Correctly:")
            if (ac==account){
                var number = require('readline-sync');
                var p=number.questionInt("Please Enter Your Previous PINCode")
                if (p==mypin){
                    var number = require('readline-sync');
                    var newpin=number.questionInt("Please Enter Your New PIN Code :")
                    console.log("Your New PIN OTP is :",newpin)
                }
                else{
                    console.log("Your PIN is Invalied")
                }
            }
            else{
                console.log("Your Account Number is Invalied")
            }
        }
        else{
            console.log("You Dont Want Change Your PIN Code")
        }
    }
    else{
        console.log("Choose Only Valied Transaction")
    }
}
else{
    console.log("Your PIN is Invalied")
}
