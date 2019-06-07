console.log('hi there');

// $('h1').css('color', 'blue');
// $('.explanation h3').html('hey man');
// document.querySelector('.explanation').innerHTML = 'no way';

// document.querySelector('html').onclick = function() { 
//     alert('Ouch! Stop poking me!');


// && - means "and"
// || - means "or"

// $('body').css('background-image', 'url(assets/images/two.png)');
// $('body').css('background-image', 'url(assets/images/c.png)');
// $('.winner').css('visibility', 'visible');
// $('.downdowndown').html('And again!');
// $('.upupup').html('One more time');
// $('.downdowndown').html('Last one up!');
// $('.upupup').html('Yay! Go down now');

 // if (count === 0) {
        //     $('body').css('background-image', 'url(assets/images/two.png)');
        // } if (count == 1) {
        //     $('body').css('background-image', 'url(assets/images/c.png)');
        //     $('.winner').css('visibility', 'visible')
        // }



let count_bottom = 0;
let count_top = 0;
$(window).scroll(function() {
    
    if ($(window).scrollTop() == 0) {

        count_top++;
        console.log('top ' + count_top);
    }

    if($(window).scrollTop() + $(window).height() > $(document).height()) {
        
        count_bottom++;
        console.log('bottom' + count_bottom);
    }

       
    if  (count_bottom === 1 && count_top === 0) {
        $('.downdowndown').html('One more time');
    }
    else if (count_bottom === 1 && count_top === 1) {
        $('body').css('background-image', 'url(assets/images/two.png)');
        $('.upupup').html('And again!');
        console.log('1d');
    }

    else if (count_bottom === 2 && count_top === 1) {
        $('.downdowndown').html('Yay! Go down now');
        console.log('2u');
    }

    else if (count_bottom === 2 && count_top === 2) {
        $('body').css('background-image', 'url(assets/images/c.png)');
        $('.winner').css('visibility', 'visible');
        $('.upupup').html('Last one up!');
        console.log('2d');
        
    }

    else if (count_bottom === 3 && count_top === 2) {
        $('.bottomscroll').css('visibility', 'hidden');
    }
    
 });