$(document).ready(function(){
  $('input[name="phone"]').on('input', function() {
    var number = $(this).val().replace(/[^\d]/g, '');
    if (number.length > 0 && number[0] != 7 && number[0] != 8) {
      number = '7' + number; // автоматически добавляем 7, если пользователь начал вводить номер не с 7 или 8
    } else if (number.length == 1 && number[0] == 8) {
      number = '7' + number.slice(1); // заменяем 8 на 7, если первая цифра - 8
    }
    if (number.length > 11) number = number.slice(0, 11); // не позволяем ввести больше 11 цифр
    var length = number.length;
    if (length > 0) number = '+' + number;
    if (length > 1) number = number.slice(0,2) + ' (' + number.slice(2);
    if (length > 4) number = number.slice(0,7) + ') ' + number.slice(7);
    if (length > 7) number = number.slice(0,12) + '-' + number.slice(12);
    if (length > 9) number = number.slice(0,15) + '-' + number.slice(15);
    $(this).val(number);
  });
});


String.prototype.insertAt=function(index, string) {
return this.substr(0, index) + string + this.substr(index);
}



$(document).ready(function() {
  $('#phoneInput').on('input', function() {
    var number = $(this).val().replace(/[^\d]/g, '');
    if (number.length > 0 && number[0] != 7 && number[0] != 8) {
      number = '7' + number; // автоматически добавляем 7, если пользователь начал вводить номер не с 7 или 8
    } else if (number.length == 1 && number[0] == 8) {
      number = '7' + number.slice(1); // заменяем 8 на 7, если первая цифра - 8
    }
    if (number.length > 11) number = number.slice(0, 11); // не позволяем ввести больше 11 цифр
    var length = number.length;
    if (length > 0) number = '+' + number;
    if (length > 1) number = number.slice(0,2) + ' (' + number.slice(2);
    if (length > 4) number = number.slice(0,7) + ') ' + number.slice(7);
    if (length > 7) number = number.slice(0,12) + '-' + number.slice(12);
    if (length > 9) number = number.slice(0,15) + '-' + number.slice(15);
    $(this).val(number);
  });
});





