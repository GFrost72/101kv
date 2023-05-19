var tabBtnOne = document.getElementById('technical-tab');
var tabBtnTwo = document.getElementById('design-tab');
var technicalContent = document.querySelector('.technical__block');
var designContent = document.getElementById('design-content');

tabBtnOne.addEventListener('click', function() {
  technicalContent.style.display = "block";
  designContent.style.display = "none";
});

tabBtnTwo.addEventListener('click', function() {
  technicalContent.style.display = "none";
  designContent.style.display = "block";
});
