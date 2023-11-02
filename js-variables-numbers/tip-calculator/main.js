
const mealPrice = 25.55;
const tipAmount = 10;

function totalBillCalc(){

    const mealPricePercentage = mealPrice / 100;
    let totalBill = mealPricePercentage.toFixed(2) * tipAmount;

    console.log(`Your total Bill is baout ${totalBill}€. `);
}

totalBillCalc();
