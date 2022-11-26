let inputEl = document.querySelector("#input1")
let lengthEl = document.querySelector("#length")
let volumeEl = document.querySelector("#volume")
let massEl = document.querySelector("#mass")
let convertBtn = document.querySelector("#covert-btnId")
let div2El = document.querySelector(".div2")
let subDivEl = document.querySelector(".subdiv")
let mainSubDivEl = document.querySelector("#main-subDiv")
let mainSubDivEl2 = document.querySelector("#main-subDiv2")
let mainSubDivEl3 = document.querySelector("#main-subDiv3")
inputEl.addEventListener("click",function(){
    console.log(inputEl.value)
})
function clear(){
    inputEl.value = " ";
}
convertBtn.addEventListener("click",function(){
    let inputVal = inputEl.value;
    
    let mtr_ft = inputVal * 3.28084 
    let ft_mtr = inputVal * 0.3048 
    let li_gal = inputVal * 0.264172
    let gal_li = inputVal * 3.78541 
    let kilo_pound = inputVal * 2.20462
    let pound_kilo = inputVal * 0.453592

    lengthEl.textContent =`${inputVal} meters = ${mtr_ft.toFixed(3)} feet | ${inputVal} feet = ${ft_mtr.toFixed(3)} meters`
    volumeEl.textContent =`${inputVal} liters = ${li_gal.toFixed(3)} gallons | ${inputVal} gallons = ${gal_li.toFixed(3)} liters`
    massEl.textContent =`${inputVal} kilos = ${kilo_pound.toFixed(3)} pounds | ${inputVal} pound = ${pound_kilo.toFixed(3)} kilos`
    
    clear();
})
// document.body.classList.toggle("dark")

function dark() {
    div2El.classList.add("dark");
    mainSubDivEl.classList.add("dark-subDiv");
    mainSubDivEl2.classList.add("dark-subDiv");
    mainSubDivEl3.classList.add("dark-subDiv");
}
function normal() {
    div2El.classList.remove("dark");
    mainSubDivEl.classList.remove("dark-subDiv");
    mainSubDivEl2.classList.remove("dark-subDiv");
    mainSubDivEl3.classList.remove("dark-subDiv");
}
