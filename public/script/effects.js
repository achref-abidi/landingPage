$(document).ready(function () {
    //Smooth scrolling with links
    $('a[href*=\\#]').on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
    });
})


/*---------------------------------- For the slide Show ---------------------------------*/
const HIDDEN = "hidden-slide";

function slideShow(n) {
    const slidesArr = $(".slides");
    const dotArr = $(".dot");
    for (let i = 0; i < slidesArr.length; i++) {
        if (i === n - 1) {
            $(slidesArr[i]).removeClass(HIDDEN);
            $(dotArr[i]).addClass("selected");
        } else {
            $(slidesArr[i]).addClass(HIDDEN);
            $(dotArr[i]).removeClass("selected");
        }
    }

}


$(window).scroll(function () {
    $(".slideanim").each(function () {
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
            $(this).addClass("slide");
        }
    });
});
