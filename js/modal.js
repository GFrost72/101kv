var openModalButton1 = document.getElementById('openModalButton1');
if (openModalButton1) {
  openModalButton1.addEventListener('click', function() {
    var myModal1 = document.getElementById('myModal1');
    if (myModal1) {
      myModal1.style.display = 'block';
    }
  });
}

var openModalButton2 = document.getElementById('openModalButton2');
if (openModalButton2) {
  openModalButton2.addEventListener('click', function() {
    var myModal2 = document.getElementById('myModal2');
    if (myModal2) {
      myModal2.style.display = 'block';
    }
  });
}

var closeButtons = document.getElementsByClassName('close');
for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', function() {
    var modal1 = document.getElementById('myModal1');
    var modal2 = document.getElementById('myModal2');
    if(modal1 && i == 0) {
      modal1.style.display = 'none';
    } else if(modal2 && i == 1) {
      modal2.style.display = 'none';
    }
  });
}

// Close modals on 'Escape' key press
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    var modal1 = document.getElementById('myModal1');
    var modal2 = document.getElementById('myModal2');
    if (modal1 && modal1.style.display === 'block') {
      modal1.style.display = 'none';
    }
    if (modal2 && modal2.style.display === 'block') {
      modal2.style.display = 'none';
    }
  }
});
