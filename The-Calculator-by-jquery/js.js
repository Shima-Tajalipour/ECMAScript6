let display=$("#display") //done
let clear=$("#clear") //done
let btnResult=$("#btn-equal") //done
let btnClicks="";
var result="";

$(".btn-click").click(function(e) {
    btnClicks = btnClicks + $(e.target).val();
    display.val(btnClicks);
})


btnResult.click(function(){
    result=eval(display.val());
    display.val(result);
    console.log(result);
})

clear.click(function() {
    display.val("");
    result="";
    btnClicks="";
})