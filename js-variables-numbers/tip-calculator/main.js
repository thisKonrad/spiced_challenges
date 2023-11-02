
const mealPrice = 25.55;
const tipAmount = 10;

function totalBillCalc(){

    const mealPricePercentage = (mealPrice / 100);

    console.log(mealPricePercentage)

    let tipPercentage = mealPricePercentage * tipAmount;

    console.log(tipPercentage)

    let totalBill =  mealPrice + tipPercentage;

    console.log(`Your total Bill is about ${totalBill.toFixed(2)}€.`);
}

totalBillCalc();
