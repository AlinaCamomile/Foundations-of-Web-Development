console.log('hi there');



// $('body').css('background-image' , 'url(assets/images/a_red.png)');
// $('body').css('background-image' , 'url(assets/images/a_white.png)');


$(document).on('click', '.u', function() {
    // write code here
    console.log("AAAA");
    let nextthing = true;
let myinterval = setInterval(function() { 
    console.log("Hello"); 

    if (nextthing) {
        // do one thing
        $('body').css('background-image' , 'url(assets/images/a_red.png)');
        nextthing = false;
    } else {
        //do another
        $('body').css('background-image' , 'url(assets/images/a_white.png)');
        nextthing = true;
    }
}, 500);




setTimeout(() => {
    // write your code that happens after 500 ms
    clearInterval(myinterval);
    window.location = "https://makitweb.com";
}, 4000);





// if ( num % 2 == 0) {
// 	console.log('Even Number');
// }else{
// 	console.log('Odd Number');
// }
});