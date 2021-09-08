/* 
모바일에서 바를 클릭하면 nav가 보임.
이 nav는 css가 다르다. 전체보기이고, ul과 li에선 큰 차이가 없을듯.
x를 누르면 nav는 다시 none이 된다.
*/
$( function () {
    $( ".fa-bars" ).click( function() {
        $( "nav" ).css( "display", "block" );
        $( "nav" ).addClass( "nav_on" );
    } );
    $( ".fa-arrow-left" ).click( function () {
        $( "nav" ).css( "display", "none" );
        $( "nav" ).removeClass( "nav_on" );
    } );
} );
/*
네비게이션을 미들 높이에 위치하기.
CSS로는 불가능하다.
브라우저의 높이 값을 내장객체에서 받기.
x값을 반으로 나눠서
완전히 정중앙으로 하려면 24px정도 위로.
*/
$( function () {
    var wh = $( window ).height();
    console.log(wh);
    var whm = wh/2;
    var whmd = whm-24;
    $( ".fa-bars" ).click( function() {
       $( "ul" ).css( "margin-top", whmd );
    } );
} );
/*
브라우저 해상도에서도
마진탑이 적용되는데 어떻게 하지?ㅠ
클릭으로 감쌀까?
*/
