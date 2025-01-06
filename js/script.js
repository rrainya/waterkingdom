$(function () {

    //************ */
    //*tab메뉴
    //************ */
    const tabMenu = $('.tab-menu a')

    tabMenu.on('click', function (e) {
        e.preventDefault();
        let activeTabCon = $(this).attr('data-tab')

        //$(this).parent().siblings('.tab-con').hide()
        $('.tab-con').hide()
        $('#' + activeTabCon).show()

        tabMenu.removeClass('on')
        $(this).addClass('on')
        
        tabMenu.attr('title','')
        $(this).attr('title','선택됨')

        console.log(activeTabCon)
    })


    //************ */
    //*gnb메뉴
    //************ */

    const mainHeader = $('.main-header'),
        gnb = $('#gnb'),
        gnbLi = gnb.children('li'),
        dep1 = gnbLi.children('a'),
        dep2 = gnbLi.children('ul.depth2');
    
    /* gnbLi.mouseenter(function () {
        console.log('마우스 들어감')
    })
    gnbLi.mouseleave(function () {
        console.log('마우스 떠남')
    }) */
    
    gnbLi.on('mouseenter', function () { 
        $(this).addClass('on')
        $(this).children('.depth2').stop().fadeIn(600)

    }).on('mouseleave', function () {
        $(this).removeClass('on')
        $(this).children('.depth2').stop().fadeOut(300)
    })

    //************ */
    //*swiper 슬라이드
    //************ */

    let swiper = new Swiper("#main-slide", {

        loop: true,

        /* autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        }, */

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    
    

})/////문서가 준비되면 작업 끝