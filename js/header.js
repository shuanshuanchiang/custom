$(document).ready(function () {
    //header動態增加白底
    lastScrollY = 0;
     window.addEventListener('scroll', function(){
    var st = this.scrollY;
    
    if( st < lastScrollY) {
        $('.header_bg').removeClass('hideUp');
        $('.header_bg').addClass('addbg');
    }else{
        $('.header_bg').addClass('hideUp');
        $('.header_bg').removeClass('addbg');
    }
    lastScrollY = st;
    });

    // header 手機版選單出現 
    $('.ham').click(function(){
        $(this).toggleClass('-hamclose');
        $('.header_bg ul').toggleClass('-showmenu');
    });


});