document.getElementById("withdraw-btn").addEventListener("click",function(){
    const previousWithdraw = document.getElementById("withdraw-field");
    const previousValueString = previousWithdraw.value ;
    const previousvalue = parseFloat(previousValueString);
    previousWithdraw.value = ''


    const currentwithdraw = document.getElementById("Withdraw-total");
    const currevaluestring = currentwithdraw.innerText ;
    const currentvalue = parseFloat( currevaluestring);

    const newWithdrawAmount = currentvalue +  previousvalue

    currentwithdraw.innerText =  newWithdrawAmount


    const curretbalance = document.getElementById("current-balance");
    const getvaluestring = curretbalance.innerText ; 
    const getvalue = parseFloat(getvaluestring);

    const totalamount =  getvalue - previousvalue ;
    curretbalance.innerText = totalamount  

})


document.getElementById("deposit-btn").addEventListener("click",function(){
   
    const depositField =  document.getElementById("deposit-field");
    const depositFieldstring = depositField.value ;
    const depositvalue = parseFloat (depositFieldstring);

    depositField.value  = ''
    

    const currentdeposit = document.getElementById("deposit-total");
    const currenValueString = currentdeposit.innerText ; 
    const currenValue = parseFloat(currenValueString);

    const newDepositAmount = currenValue +  depositvalue
    currentdeposit.innerText =  newDepositAmount ; 


    const curretbalance = document.getElementById("current-balance");
    const getvaluestring = curretbalance.innerText ; 
    const getvalue = parseFloat(getvaluestring);

    const totaldeposit = getvalue +depositvalue ;

    curretbalance.innerText = totaldeposit




})