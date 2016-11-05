$(document).ready(function() {

  $(document).on('click', '#rules-link', function() {
    $('.rules-container').addClass('rules-container-center');
    $('.exit').css('display', 'block');
    setTimeout(function() {$('.rules-text').addClass('rules-text-center');}, 1100);
  });

  $(document).on('click', '.exit', function() {
    $('.rules-container').removeClass('rules-container-center');
    $('.exit').css('display', 'none');
    $('.rules-text').removeClass('rules-text-center');
  });

});
