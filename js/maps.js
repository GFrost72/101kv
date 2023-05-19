type="text/javascript">
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [57.16661440404462,65.50776825914261],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 15
    });

// Создание геообъекта с типом точка (метка).
// var myGeoObject = new ymaps.GeoObject({
//   geometry: {
//       type: "Point", // тип геометрии - точка
//       coordinates: [48.872185073737896,2.354223999999991] // координаты точки
//   }
// });

var myPlacemark = new ymaps.Placemark([57.16661440404462,65.50776825914261]
  , {}, {
iconLayout: 'default#image',
iconImageHref: '../marker.svg',
iconImageSize: [35, 50],
iconImageOffset: [-10, -42]
});


// Размещение геообъекта на карте.
myMap.geoObjects.add(myPlacemark);
}
