// on scroll change css properties
$(window).scroll(function () {
    let position = $('nav').offset().top;
    let portfolio = $('.portfolio h1').offset().top;
    let scrolled = window.pageYOffset;
    let rate = scrolled * 2;
    //parallex 

    $('landingPage img').css(`transform`, `translateY(${rate}px)`);



    if (position >= portfolio) {

        $('.portfolio h1').fadeIn(3000, () => $('.portfolio h1').show());
    }


    //changes the nav bar css property
    if (position > 100) {
        $('nav ul').css('background-color', "#1f1f1f96");
        $('nav ul').css('padding', "20px");
        $('nav img').css('margin', "40px 0px");

    } else {
        $('nav ul').css('background', "none");
        $('nav ul').css('padding', "50px 10px");
        $('nav img').css('margin', "40px");
    }
    if (position > 500) {
        $('.gotoTop').show();
    } else {
        $('.gotoTop').hide();
    }
});


//scroll on click
function scrollAnimation() {
    $('.menuList a, header nav ul a, .btn-seeMore , .gotoTop-btn').click(function (e) {
        e.preventDefault();
        let hash = this.hash;
        //scrolls to the location of the sections 
        $('html,body').animate({
            scrollTop: $(hash).offset().top
        }, 700)
        //hide animation for the menu list
        $('.menuList').fadeOut(() => {
            $('.menuList').hide();
        });


    });

}




function main() {
    //mobile hamburger icon toggle
    $('.menu-btn').click(() => {

            $('.menuList').toggle("slow");

        }

    )
    $('.btn-seeMore').hide();
    //onload animate landing page
    $('.landingPage img').fadeIn(3000, () => $('.landingPage img, .btn-seeMore').show());
    $('.btn-seeMore').fadeIn(4000, () => $('.btn-seeMore').show());

    scrollAnimation();
}

$(main);