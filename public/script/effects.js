$(document).ready(function(){

    //Smooth scrolling with links
    $('a[href*=\\#]').on('click', function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });


    // For the navigation bar : it will change color after scrolling
    var scroll = $(window).scrollTop();
    if (scroll > 70) {
        $(".nav-link").css("color" , "black");
        $("#nav-bar").css({
        "background": "white",
        "box-shadow":"5px 1px 5px black"
        }); 
        $(".logo").attr("src", "../public/img/black_logo.png");

    }

    else{
        $("#nav-bar").css("background" , "transparent"); 
        $("#nav-bar").css("box-shadow","initial"); 	
        $(".nav-link").css("color" , "white");
        $(".logo").attr("src", "../public/img/white_logo.png");
    }
    
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 70) {
            $(".nav-link").css("color" , "black");
            $("#nav-bar").css({
            "background": "white",
            "box-shadow":"5px 1px 5px black"
            }); 
            $(".logo").attr("src", "../public/img/black_logo.png");

        }
  
        else{
            $("#nav-bar").css("background" , "transparent"); 
            $("#nav-bar").css("box-shadow","initial"); 	
            $(".nav-link").css("color" , "white");
            $(".logo").attr("src", "../public/img/white_logo.png");
        }
    })


    
})


/*---------------------------------- For the slide Show ---------------------------------*/
const HIDDEN  = "hidden-slide";
    
 
function slideShow (n){
    const slidesArr = $(".slides");
    const dotArr = $(".dot");
    for(let i=0; i< slidesArr.length; i++){
        if (i === n-1){
            $(slidesArr[i]).removeClass(HIDDEN);
            $(dotArr[i]).addClass("selected");
        }else{
            $(slidesArr[i]).addClass(HIDDEN);
            $(dotArr[i]).removeClass("selected");
        }
    }

}

    /*----------- for the mobile nav-bar ----------------------------*/
    $("#dropbtn").on("click",function(){
        $(".nav-link")[0].css("display", "inline")
    })
