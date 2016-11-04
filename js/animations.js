$(document).ready(function() {

  // $('#nav-icon').click(function() {
  //   $('.nav-menu').slideToggle();
  // });

  // $(document).on('click', '#rules-link', function() {
  //   $('#rules-container').css('display', 'block');
  // });
  //
  // $(document).on('click', '.exit', function() {
  //   $('#rules-container').css('display', 'none');
  // });

  $(document).on('click', '#rules-link', function() {
    $('.rules-container').addClass('rules-container-center');
    // $('.rules-text').addClass('rules-text-center');
    setTimeout(function() {$('.rules-text').addClass('rules-text-center');}, 1800);
  });

  $(document).on('click', '.exit', function() {
    $('.rules-container').removeClass('rules-container-center');
    $('.rules-text').removeClass('rules-text-center');
  });

});
