$(document).ready(function() {
  $('.btn-reset').on('click', function() {
    var $this = $(this);
    var $collapse = $($this.attr('data-target'));
    var $plusIcon = $this.find('.plus-icon');
    var $minusIcon = $this.find('.minus-icon');

    if ($collapse.hasClass('show')) {
      // Коллапс уже открыт и собирается закрыться, меняем иконку на "+".
      $minusIcon.css('opacity', 0); // начинаем анимацию opacity
      setTimeout(function() {
        $minusIcon.removeClass('show');
        $plusIcon.addClass('show');
        $plusIcon.css('opacity', 1); // начинаем анимацию opacity для "+"
      }, 500);
    } else {
      // Коллапс закрыт и собирается открыться, меняем иконку на "-".
      $plusIcon.css('opacity', 0); // начинаем анимацию opacity
      setTimeout(function() {
        $plusIcon.removeClass('show');
        $minusIcon.addClass('show');
        $minusIcon.css('opacity', 1); // начинаем анимацию opacity для "-"
      }, 500);
    }
  });
});
