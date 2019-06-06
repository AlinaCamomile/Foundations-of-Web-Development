console.log('hi there');



// $('body').css('background-image' , 'url(assets/images/a_red.png)');
// $('body').css('background-image' , 'url(assets/images/a_white.png)');

$(".where h1").hover(function(){
    $('.where h1').html('Were is "u"?');
    }, function(){
    $('.where h1').html('Click on it')
  });


$(document).on('click', '.u', function(event) {
    event.preventDefault();
    // write code here
    console.log("AAAA");
    $('main').html('visibility', 'hidden');
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
}, 400);




setTimeout(() => {
    // write your code that happens after 500 ms
    clearInterval(myinterval);
    window.location = "file:///C:/Users/Trisha/3D%20Objects/JoshuaTuscan/Not%20possessed%20folder/escape_the_web.html";
}, 4000);





// if ( num % 2 == 0) {
// 	console.log('Even Number');
// }else{
// 	console.log('Odd Number');
// }
});