function appendToInput(val) {
    document.getElementById("input").value += val;
   }
   function clearInput() {
    document.getElementById("input").value = "";
   }
   function calculate() {
    let inputStr = document.getElementById("input").value;
   if (!inputStr) {
    return;
    }
   let result = eval(inputStr);
   document.getElementById("input").value = result;
   }