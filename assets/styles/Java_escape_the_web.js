console.log('hi there');

// $('h1').css('color', 'blue');
// $('.explanation h3').html('hey man');
// document.querySelector('.explanation').innerHTML = 'no way';

// document.querySelector('html').onclick = function() { 
//     alert('Ouch! Stop poking me!');


// $('body').css('background-image', 'url(assets/images/two.png)');
// $('body').css('background-image', 'url(assets/images/c.png)');
// $('.winner').css('visibility', 'visible')


let count_bottom = 0;
let count_top = 0;
$(window).scroll(function() {
    
    if ($(window).scrollTop() == 0) {
        console.log;

        count_top++;
    }

    if($(window).scrollTop() + $(window).height() > $(document).height() - 30) {
        console.log("near bottom!");

        if (count === 0) {
            $('body').css('background-image', 'url(assets/images/two.png)');
        } if (count == 1) {
            $('body').css('background-image', 'url(assets/images/c.png)');
            $('.winner').css('visibility', 'visible')
        }

        count++;
        
    }
 });