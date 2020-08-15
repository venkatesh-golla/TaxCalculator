import Framework7 from 'framework7/framework7.esm.bundle'
import $$ from 'dom7';
const HST = require("./HST.js");
const {OntarioTax,FederalTax} = require('./Tax')

// Init F7
const app = new Framework7({
  root: '#app',
  theme: 'auto',
  // Fix for iPhone X notch
  statusbar: {
    overlay: Framework7.device.ios ? Framework7.device.webView || Framework7.device.cordova : 'auto',
  },
});

$$('#incomeAmount').keypress((e)=>{
  if(e.keyCode==13){
    $$('#incomeDeducted').focus()
  }
})

$$("#adding").on("submit", evt => {
  evt.preventDefault();
  const oData = app.form.convertToData("#adding")
  const income=Number(oData.incomeAmount)
  const deducatedAmount=Number(oData.incomeDeducted)
  const ontarioTax = OntarioTax.calculate(income)
  const federalTax = FederalTax.calculate(income)
  console.log(`Total Tax = ${ontarioTax + federalTax}`)
  const totalTax = ontarioTax+federalTax
  $$("#ontarioTax").html('$'+ontarioTax);
  $$("#federalTax").html('$'+federalTax);
  $$("#totalTax").html('$'+totalTax);
  $$("#owingAmount").html('$'+(deducatedAmount-totalTax));
  $$("#amounts").prepend("<p>" +"<b>" +`For Taxable Income : $${income} and Deduction : $${deducatedAmount} </b>    Ontario Tax is $${ontarioTax} Federal Tax is $${federalTax} Total Tax is ${totalTax} Owing Amount is ${deducatedAmount-totalTax}` + "</p>");
});