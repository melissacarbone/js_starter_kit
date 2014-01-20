alert('Guess a number between 0 and 100');

$(document).ready(function(){

  $('#guess').keydown(function(e){
    var number = 30
    if (e.keyCode == 13) {
        var guess = $('#guess').val();

      if(number < guess)
      {
        $('.alert-box').html(guess + ' ' + 'is too high')
      }
      else if (number > guess)
      {
        $('.alert-box').html(guess + ' ' + 'is too low');
      }
      else
      {
        alert('Yes it was' + ' ' + guess + '!' + ' ' + 'You Win!')
      }
    }
});

});

