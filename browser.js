/* ajax */
$(function () {
  $( '#container' ).load( 'main.html' );
      var nav = $( 'nav li' );
      
      nav.eq(0).click( function () {
      $( '#container' ).load( 'main.html' );
      $( 'li' ).removeClass( 'on' );
      $( 'li' ).eq(0).addClass( 'on' );
      } );
      nav.eq(1).click( function () {
      $( '#container' ).load( 'about_me.html' );
      $( 'li' ).removeClass( 'on' );
      $( 'li' ).eq(1).addClass( 'on' );
      } );
      nav.eq(2).click( function () {
      $( '#container' ).load( 'support_field.html' );
      $( 'li' ).removeClass( 'on' );
      $( 'li' ).eq(2).addClass( 'on' );
      } );
      nav.eq(3).click( function () {
      $( '#container' ).load( 'webdesign_portfolio.html' );
      $( 'li' ).removeClass( 'on' );
      $( 'li' ).eq(3).addClass( 'on' );
      } );
      nav.eq(4).click( function () {
      $( '#container' ).load( 'customer_service.html' );
      $( 'li' ).removeClass( 'on' );
      $( 'li' ).eq(4).addClass( 'on' );
      } );
      nav.eq(5).click( function () {
      $( '#container' ).load( 'reminder.html' );
      $( 'li' ).removeClass( 'on' );
      $( 'li' ).eq(5).addClass( 'on' );
  } );
});
