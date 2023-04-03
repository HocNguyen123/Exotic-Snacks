//Variables
var chips = 0;
var drinks = 0;
var candy = 0;
var packOne = 0;
var packTwo = 0;
var monthlyOne = 0;
var monthlyTwo = 0;
var total = parseFloat(0).toFixed(2);

//loading screen
onEvent("loadingToLogin", "click", function( ) {
  setScreen("loginScreen");
});

//home screen
onEvent("chipButton", "click", function( ) {
  setScreen("chipScreen");
});
onEvent("drinkButton", "click", function( ) {
  setScreen("drinkScreen");
});
onEvent("candyButton", "click", function( ) {
  setScreen("candyScreen");
});
onEvent("exoticBundles", "click", function( ) {
  setScreen("product/serviceScreen");
});
onEvent("mysteryBox", "click", function( ) {
  setScreen("product/serviceScreen");
});

//chip screen
onEvent("chipBackButton", "click", function( ) {
  setScreen("homeScreen");
});
onEvent("orderButton3", "click", function( ) {
  setScreen("chipsCheckOutScreen");
});

//Chip Checkout
setNumber("priceCounter5", drinks);
setNumber("chipCounter2", drinks);
onEvent("Plusbutton5", "click", function( ) {
  if (drinks < 9) {
    drinks = drinks + 1;
  }
  setNumber("chipCounter2", drinks);
  setNumber("priceCounter5", (parseFloat(drinks * 2.99)).toFixed(2));
  total = getNumber("priceCounter4")+ getNumber("priceCounter5") + getNumber("priceCounter6");
  setNumber("chipsTotal", "$ " + (parseFloat(total)).toFixed(2));
});
onEvent("minusButton5", "click", function( ) {
  if (drinks > 0) {
    drinks = drinks - 1;
  }
  setNumber("chipCounter2", drinks);
  setNumber("priceCounter5", (parseFloat(drinks * 2.99)).toFixed(2));
  total = getNumber("priceCounter4")+ getNumber("priceCounter5") + getNumber("priceCounter6");
  setNumber("chipsTotal", "$ " + (parseFloat(total)).toFixed(2));
});
setNumber("priceCounter4", chips);
setNumber("chipCounter", chips);
onEvent("Plusbutton4", "click", function( ) {
  if (chips < 9) {
    chips = chips + 1;
  }
  setNumber("chipCounter", chips);
  setNumber("priceCounter4", (parseFloat(chips * 2.99)).toFixed(2));
  total = getNumber("priceCounter4")+ getNumber("priceCounter5") + getNumber("priceCounter6");
  setNumber("chipsTotal", "$ " + (parseFloat(total)).toFixed(2));
});
onEvent("minusButton4", "click", function( ) {
  if (chips > 0) {
    chips = chips - 1;
  }
  setNumber("chipCounter", chips);
  setNumber("priceCounter4",(parseFloat(chips * 2.99)).toFixed(2));
  total = getNumber("priceCounter4")+ getNumber("priceCounter5") + getNumber("priceCounter6");
  setNumber("chipsTotal", "$ " + (parseFloat(total)).toFixed(2));
});
setNumber("priceCounter6", candy);
setNumber("chipCounter3", candy);
onEvent("Plusbutton6", "click", function( ) {
  if (candy < 9) {
    candy = candy + 1;
  }
  setNumber("chipCounter3", candy);
  setNumber("priceCounter6", (parseFloat(candy * 2.99)).toFixed(2));
  total = getNumber("priceCounter4")+ getNumber("priceCounter5") + getNumber("priceCounter6");
  setNumber("chipsTotal", "$ " + (parseFloat(total)).toFixed(2));
});
onEvent("minusButton6", "click", function( ) {
  if (candy > 0) {
    candy = candy - 1;
  }
  setNumber("chipCounter3", candy);
  setNumber("priceCounter6", (parseFloat(candy * 2.99)).toFixed(2));
  total = getNumber("priceCounter4")+ getNumber("priceCounter5") + getNumber("priceCounter6");
  setNumber("chipsTotal", "$ " + (parseFloat(total)).toFixed(2));
});
onEvent("checkoutBackButton2", "click", function( ) {
  setScreen("chipScreen");
});

//candy screen
onEvent("candyBackButton", "click", function( ) {
  setScreen("homeScreen");
});
onEvent("orderButton2", "click", function( ) {
  setScreen("candyCheckOutScreen");
});

//Candy Checkout
setNumber("priceCounter9", drinks);
setNumber("candyCounter3", drinks);
onEvent("Plusbutton9", "click", function( ) {
  if (drinks < 9) {
    drinks = drinks + 1;
  }
  setNumber("candyCounter3", drinks);
  setNumber("priceCounter9", (parseFloat(drinks * 2.99)).toFixed(2));
  total = getNumber("priceCounter7")+ getNumber("priceCounter8") + getNumber("priceCounter9");
  setNumber("candyTotal", "$ " + (parseFloat(total)).toFixed(2));
});
onEvent("minusButton9", "click", function( ) {
  if (drinks > 0) {
    drinks = drinks - 1;
  }
  setNumber("candyCounter3", drinks);
  setNumber("priceCounter9", (parseFloat(drinks * 2.99)).toFixed(2));
  total = getNumber("priceCounter7")+ getNumber("priceCounter8") + getNumber("priceCounter9");
  setNumber("candyTotal", "$ " + (parseFloat(total)).toFixed(2));
});
setNumber("priceCounter8", chips);
setNumber("candyCounter2", chips);
onEvent("Plusbutton8", "click", function( ) {
  if (chips < 9) {
    chips = chips + 1;
  }
  setNumber("candyCounter2", chips);
  setNumber("priceCounter8", (parseFloat(chips * 2.99)).toFixed(2));
  total = getNumber("priceCounter7")+ getNumber("priceCounter8") + getNumber("priceCounter9");
  setNumber("candyTotal", "$ " + (parseFloat(total)).toFixed(2));
});
onEvent("minusButton8", "click", function( ) {
  if (chips > 0) {
    chips = chips - 1;
  }
  setNumber("candyCounter2", chips);
  setNumber("priceCounter8", (parseFloat(chips * 2.99)).toFixed(2));
  total = getNumber("priceCounter7")+ getNumber("priceCounter8") + getNumber("priceCounter9");
  setNumber("candyTotal", "$ " + (parseFloat(total)).toFixed(2));
});
setNumber("priceCounter7", candy);
setNumber("candyCounter", candy);
onEvent("Plusbutton7", "click", function( ) {
  if (candy < 9) {
    candy = candy + 1;
  }
  setNumber("candyCounter", candy);
  setNumber("priceCounter7", (parseFloat(candy * 2.99)).toFixed(2));
  total = getNumber("priceCounter7")+ getNumber("priceCounter8") + getNumber("priceCounter9");
  setNumber("candyTotal", "$ " + (parseFloat(total)).toFixed(2));
});
onEvent("minusButton7", "click", function( ) {
  if (candy > 0) {
    candy = candy - 1;
  }
  setNumber("candyCounter", candy);
  setNumber("priceCounter7", (parseFloat(candy * 2.99)).toFixed(2));
  total = getNumber("priceCounter7")+ getNumber("priceCounter8") + getNumber("priceCounter9");
  setNumber("candyTotal", "$ " + (parseFloat(total)).toFixed(2));
});
onEvent("checkoutBackButton3", "click", function( ) {
  setScreen("candyScreen");
});

//drink screen
onEvent("drinkBackButton", "click", function( ) {
  setScreen("homeScreen");
});
onEvent("orderButton", "click", function( ) {
  setScreen("drinkCheckOutScreen");
});

//Drink Checkout
setNumber("priceCounter", drinks);
setNumber("drinkCounter", drinks);
onEvent("Plusbutton", "click", function( ) {
  if (drinks < 9) {
    drinks = drinks + 1;
  }
  setNumber("drinkCounter", drinks);
  setNumber("priceCounter", (parseFloat(drinks * 2.99)).toFixed(2));
 total = getNumber("priceCounter")+ getNumber("priceCounter2") + getNumber("priceCounter3");
  setNumber("drinkTotal", "$ " + (parseFloat(total)).toFixed(2));
});
onEvent("minusButton", "click", function( ) {
  if (drinks > 0) {
    drinks = drinks - 1;
  }
  setNumber("drinkCounter", drinks);
  setNumber("priceCounter",(parseFloat(drinks * 2.99)).toFixed(2));
  total = getNumber("priceCounter")+ getNumber("priceCounter2") + getNumber("priceCounter3");
  setNumber("drinkTotal", "$ " + (parseFloat(total)).toFixed(2));
});
setNumber("priceCounter2", chips);
setNumber("drinkCounter2", chips);
onEvent("Plusbutton2", "click", function( ) {
  if (chips < 9) {
    chips = chips + 1;
  }
  setNumber("drinkCounter2", chips);
  setNumber("priceCounter2", (parseFloat(chips * 2.99)).toFixed(2));
  total = getNumber("priceCounter")+ getNumber("priceCounter2") + getNumber("priceCounter3");
  setNumber("drinkTotal", "$ " + (parseFloat(total)).toFixed(2));
});
onEvent("minusButton2", "click", function( ) {
  if (chips > 0) {
    chips = chips - 1;
  }
  setNumber("drinkCounter2", chips);
  setNumber("priceCounter2", (parseFloat(chips * 2.99)).toFixed(2));
  total = getNumber("priceCounter")+ getNumber("priceCounter2") + getNumber("priceCounter3");
  setNumber("drinkTotal", "$ " + (parseFloat(total)).toFixed(2));
});
setNumber("priceCounter3", candy);
setNumber("drinkCounter3", candy);
onEvent("Plusbutton3", "click", function( ) {
  if (candy < 9) {
    candy = candy + 1;
  }
  setNumber("drinkCounter3", candy);
  setNumber("priceCounter3", (parseFloat(candy * 2.99)).toFixed(2));
  total = getNumber("priceCounter")+ getNumber("priceCounter2") + getNumber("priceCounter3");
  setNumber("drinkTotal", "$ " + (parseFloat(total)).toFixed(2));
});
onEvent("minusButton3", "click", function( ) {
  if (candy > 0) {
    candy = candy - 1;
  }
  setNumber("drinkCounter3", candy);
  setNumber("priceCounter3", (parseFloat(candy * 2.99)).toFixed(2));
  total = getNumber("priceCounter")+ getNumber("priceCounter2") + getNumber("priceCounter3");
  setNumber("drinkTotal", "$ " + (parseFloat(total)).toFixed(2));
});
onEvent("checkoutBackButton", "click", function( ) {
  setScreen("drinkScreen");
});

//product and services screen
onEvent("prodServBackButton", "click", function( ) {
  setScreen("homeScreen");
});
onEvent("orderButton4", "click", function( ) {
  setScreen("product/serviceCheckoutScreen");
});

//Product and Services Checkout
setNumber("priceCounter10", packOne);
setNumber("prodSerCounter", packOne);
onEvent("Plusbutton10", "click", function( ) {
  if (packOne < 5) {
    packOne = packOne + 1;
  }
  setNumber("prodSerCounter", packOne);
  setNumber("priceCounter10", (parseFloat(packOne * 19.69)).toFixed(2));
  total = getNumber("priceCounter10")+ getNumber("priceCounter11") + getNumber("priceCounter12") + getNumber("priceCounter13");
  setNumber("prodSerTotal", "$ " + (parseFloat(total)).toFixed(2));
});
onEvent("minusButton10", "click", function( ) {
  if (packOne > 0) {
    packOne = packOne - 1;
  }
  setNumber("prodSerCounter", packOne);
  setNumber("priceCounter10", (parseFloat(packOne * 19.69)).toFixed(2));
  total = getNumber("priceCounter10")+ getNumber("priceCounter11") + getNumber("priceCounter12") + getNumber("priceCounter13");
  setNumber("prodSerTotal", "$ " + (parseFloat(total)).toFixed(2));
});
setNumber("priceCounter11", packTwo);
setNumber("prodSerCounter2", packTwo);
onEvent("Plusbutton11", "click", function( ) {
  if (packTwo < 5) {
    packTwo = packTwo + 1;
  }
  setNumber("prodSerCounter2", packTwo);
  setNumber("priceCounter11", (parseFloat(packTwo * 29.69)).toFixed(2));
  total = getNumber("priceCounter10")+ getNumber("priceCounter11") + getNumber("priceCounter12") + getNumber("priceCounter13");
  setNumber("prodSerTotal", "$ " + (parseFloat(total)).toFixed(2));
});
onEvent("minusButton11", "click", function( ) {
  if (packTwo > 0) {
    packTwo = packTwo - 1;
  }
  setNumber("prodSerCounter2", packTwo);
  setNumber("priceCounter11", (parseFloat(packTwo * 29.69)).toFixed(2));
  total = getNumber("priceCounter10")+ getNumber("priceCounter11") + getNumber("priceCounter12") + getNumber("priceCounter13");
  setNumber("prodSerTotal", "$ " + (parseFloat(total)).toFixed(2));
});
setNumber("priceCounter12", monthlyOne);
setNumber("prodSerCounter3", monthlyOne);
onEvent("Plusbutton12", "click", function( ) {
  if (monthlyOne < 1) {
    monthlyOne = monthlyOne + 1;
  }
  setNumber("prodSerCounter3", monthlyOne);
  setNumber("priceCounter12", (parseFloat(monthlyOne * 24.69)).toFixed(2));
  total = getNumber("priceCounter10")+ getNumber("priceCounter11") + getNumber("priceCounter12") + getNumber("priceCounter13");
  setNumber("prodSerTotal", "$ " + (parseFloat(total)).toFixed(2));
});
onEvent("minusButton12", "click", function( ) {
  if (monthlyOne > 0) {
    monthlyOne = monthlyOne - 1;
  }
  setNumber("prodSerCounter3", monthlyOne);
  setNumber("priceCounter12", (parseFloat(monthlyOne * 24.69)).toFixed(2));
  total = getNumber("priceCounter10")+ getNumber("priceCounter11") + getNumber("priceCounter12") + getNumber("priceCounter13");
  setNumber("prodSerTotal", "$ " + (parseFloat(total)).toFixed(2));
});
setNumber("priceCounter13", monthlyTwo);
setNumber("prodSerCounter4", monthlyTwo);
onEvent("Plusbutton13", "click", function( ) {
  if (monthlyTwo < 1) {
    monthlyTwo = monthlyTwo + 1;
  }
  setNumber("prodSerCounter4", monthlyTwo);
  setNumber("priceCounter13", (parseFloat(monthlyTwo * 34.69)).toFixed(2));
  total = getNumber("priceCounter10")+ getNumber("priceCounter11") + getNumber("priceCounter12") + getNumber("priceCounter13");
  setNumber("prodSerTotal", "$ " + (parseFloat(total)).toFixed(2));
});
onEvent("minusButton13", "click", function( ) {
  if (monthlyTwo > 0) {
    monthlyTwo = monthlyTwo - 1;
  }
  setNumber("prodSerCounter4", monthlyTwo);
  setNumber("priceCounter13", (parseFloat(monthlyTwo * 34.69)).toFixed(2));
  total = getNumber("priceCounter10")+ getNumber("priceCounter11") + getNumber("priceCounter12") + getNumber("priceCounter13");
  setNumber("prodSerTotal", "$ " + parseFloat(total).toFixed(2));
});
onEvent("checkoutBackButton4", "click", function( ) {
  setScreen("product/serviceScreen");
});

//Checkout Screen(Drink, Candy, Chips
onEvent("conToPayButton", "click", function( ) {
  setScreen("paymentScreen");
});
onEvent("conToPayButton2", "click", function( ) {
  setScreen("paymentScreen");
});
onEvent("conToPayButton3", "click", function( ) {
  setScreen("paymentScreen");
});
onEvent("conToPayButton4", "click", function( ) {
  setScreen("paymentScreen");
});

//Payment screen
onEvent("paymentFinishButton", "click", function( ) {
  setScreen("endScreen");
});

//End screen
onEvent("returnHome", "click", function( ) {
  setScreen("homeScreen");
});

//Sign-In and Login-In
onEvent("signUp", "click", function( ) {
  setScreen("signUpNewInfoScreen");
});
onEvent("signUpOk", "click", function( ) {
  setScreen("signUpScreen");
  createRecord("LoginInformation", {Username:(getText("signUpUserInput")),Passwords :(getText("signUpPassInput")),LoginTime: (Date.now())}, function(record) {
    
  });
});
onEvent("signUpCancel", "click", function( ) {
  setScreen("loginPage");
});
onEvent("backToLogin", "click", function( ) {
  setScreen("loginPage");
});
onEvent("loginToHome", "click", function( ) {
  readRecords("LoginInformation", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if (getText("usernameInput") == (records[i]).Username && getText("passwordInput") == (records[i]).Passwords) {
        setScreen("homeScreen");
      }
    }
  });
});
