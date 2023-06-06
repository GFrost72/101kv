var tabBtnOne = document.getElementById('technical-tab');
var tabBtnTwo = document.getElementById('design-tab');
var technicalContent = document.querySelector('.technical__block');
var designContent = document.getElementById('design-content');

tabBtnOne.addEventListener('click', function() {
  technicalContent.style.display = "flex"; // Измените 'block' на 'flex' здесь
  designContent.style.display = "none";
  tabBtnOne.classList.add('active');
  tabBtnTwo.classList.remove('active');
});

tabBtnTwo.addEventListener('click', function() {
  technicalContent.style.display = "none";
  designContent.style.display = "block"; // Устанавливаем значение 'block' для 'designContent'
  tabBtnOne.classList.remove('active');
  tabBtnTwo.classList.add('active');
});

