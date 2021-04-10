function data(val) {
    calc.display.value += val;
}
function clr() {
    calc.display.value="";
}
function equal() {
    calc.screen.value=eval(calc.display.value);
}