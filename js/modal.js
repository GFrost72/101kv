document.getElementById('openModalButton1').addEventListener('click', function() {
  document.getElementById('myModal1').style.display = 'block';
});

var closeButtons = document.getElementsByClassName('close');
for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', function() {
    document.getElementById('myModal1').style.display = 'none';
  });
}

