body {
    width: 100%;
    background-image: url(../images/one.png);
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    text-align: center;
    margin: 0;
    height: 200vh;
}

/* THE TOP SECTION */

.top{
    height: 40vh;
}
h1, h2, h3, p {
    margin: 0;
}
h1, h2{
    font-family: 'Kalam', cursive;
}
h2, h3, p{
    color: #707070;
}

h2{
    font-size: 36px;
}
h3{
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    font-weight: 600;
}
p{
    font-family: 'Open Sans', sans-serif;
    font-size: 18px
    font-weight: 100;
}

.title h1{
    font-size: 120px;
    margin: 0;
}

.explanation{
    margin: 0;
}

/* THE MIDDLE SECTION */
.middle{
    height: 45vh;
    display: flex;
    flex-direction:row;
    align-items: flex-start;
    justify-content: center;
}
.circle{
    height: 80px;
    width: 80px;
    background-color: #FF0000;
    border-radius: 50%;
    display: inline-block;
    margin: 0;
}

.pay, .click, .look{
    background-color: aquamarine;
    width: 300px;
}


/* THE BOTTOM SECTION */
.bottom{
    background-color: rgba(245, 245, 220, 0.555);
    height: 115vh;
    display: block;
    position: relative;
    width: 100%;
}

.bottom div{
    border: 1px solid cadetblue;
}

.bottom div span {
   background-image: url(../images/arrowdown.png);
   height: 40px;
   width: 120px;
   display: inline-block;
   background-size: contain;
   background-repeat: no-repeat;
   background-position: center;
}
.arrowup{
    transform: rotate(180deg);
}

/* .bottomscroll {
    position: absolute;
    width: 100%;
    float:bottom; */
    
    

    
}

