$(document).ready(function(){

    function animateBird(){
        $("#bird").animate(   
            {   left: '240px',
                top: '7px',
                height: '30px'
            }
            
            , 2000); //2000 milliseconds to run
    }

animateBird();

});