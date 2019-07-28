;
(function ($) {
   'use strict';
   

   $('.my-slider').slick( {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll : 1,
      fade: true,
      
   });

   $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      prevArrow: '<button id="prev" type="button" class=" btn-juliet"><i class="fas">&#xf104;   </i></button>',
      nextArrow: '<button id="next type="button"><i class="fas fa-chevron-right"></i></button>',
      centerMode: true,
      focusOnSelect: true
    });

    $('.news-slider').slick( {
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll : 5,
      fade: false,
      
   });
   

      
   })
(jQuery);
$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
  //отменяем стандартную обработку нажатия по ссылке
  event.preventDefault();
  
  //забираем идентификатор бока с атрибута href
  var id = $(this).attr('href'),
  
  //узнаем высоту от начала страницы до блока на который ссылается якорь
  top = $(id).offset().top;
  
  //анимируем переход на расстояние - top за 1500 мс
  $('body,html').animate({scrollTop: top}, 1500);
  });
  });

   // $('#btn-play').on('click', function () {
   //    $('.ba-slider').slick('slickPlay');
   // });
   // $('#btn-pause').on('click', function () {
   //    $('.ba-slider').slick('slickPause');
   // });
   // $('#btn-next').on('click', function () {
   //    $('.ba-slider').slick('slickNext');
   // });
   // $('#btn-prev').on('click', function () {
   //    $('.ba-slider').slick('slickPrev');
   // });
   // $('#btn-CurrentSlide').on('click', function () {

   // });

   // $('#goToSlide').on('change', function () {
   //    var numberOfSlide = $(this).val();
   //    $('.ba-slider').slick('slickGoTo', numberOfSlide)
   // });

   // $('.portfolio-examp').masonry({
   //    // options
   //    itemSelector: '.portfolio-item',

   // });
   // $('.portfolio-examp').isotope();


//    var filters = [];

//    $('.portfolio-navi').on('click', 'a', function (event) {
//       event.preventDefault();
//       $(this).toggleClass('active');
//       var isChecked = $(this).hasClass('active');
//       var filter = $(this).attr('data-filter');

//       if (isChecked) {
//          addFilter(filter);
//       } else {
//          removeFilter(filter);
//       }
//       console.log(filters);
//       $('.portfolio-examp').isotope({
//          filter: filters.join(',')
//       });
//    });

//    function addFilter(filter) {
//       if (filters.indexOf(filter) == -1) {
//          filters.push(filter);
//       }
//    }

//    function removeFilter(filter) {
//       var index = filters.indexOf(filter);
//       if (index != -1) {
//          filters.splice(index, 1);
//       }
//    }


//    $('.ba-slider-new').masonry({
//       // options
//       itemSelector: '.portfolio-item',

//    });

//    function initSlider() {
//       $('.ba-slider-new').slick({
//          slidesToShow: 1,
//          slidesToScroll: 1,
//          arrows: false,
//          fade: true,
//          asNavFor: '.ba-slider-new-nav'
//       });

//    }
//    $('.ba-slider-new-nav').slick({
//       slidesToShow: 6,
//       slidesToScroll: 1,
//       asNavFor: '.ba-slider-new',
//       dots: true,

//       focusOnSelect: true
//    });

//    $('.items-navi button').on('click', function () {
//       initSlider();
//       $('.items-navi button').addClass('nav-btn');
//    })


// })(jQuery);

var map;
var baOffices;
function initMap() {

   var markerBA = {
      lat:40.650002,
      lng: -73.949997
   };


   
   map = new google.maps.Map(document.getElementById('map'), {
      center: markerBA,
      zoom: 15,
      styles: [
         {
           "elementType": "geometry",
           "stylers": [
             {
               "color": "#f5f5f5"
             }
           ]
         },
         {
           "elementType": "labels.icon",
           "stylers": [
             {
               "visibility": "off"
             }
           ]
         },
         {
           "elementType": "labels.text.fill",
           "stylers": [
             {
               "color": "#616161"
             }
           ]
         },
         {
           "elementType": "labels.text.stroke",
           "stylers": [
             {
               "color": "#f5f5f5"
             }
           ]
         },
         {
           "featureType": "administrative.land_parcel",
           "elementType": "labels.text.fill",
           "stylers": [
             {
               "color": "#bdbdbd"
             }
           ]
         },
         {
           "featureType": "poi",
           "elementType": "geometry",
           "stylers": [
             {
               "color": "#eeeeee"
             }
           ]
         },
         {
           "featureType": "poi",
           "elementType": "labels.text.fill",
           "stylers": [
             {
               "color": "#757575"
             }
           ]
         },
         {
           "featureType": "poi.park",
           "elementType": "geometry",
           "stylers": [
             {
               "color": "#e5e5e5"
             }
           ]
         },
         {
           "featureType": "poi.park",
           "elementType": "labels.text.fill",
           "stylers": [
             {
               "color": "#9e9e9e"
             }
           ]
         },
         {
           "featureType": "road",
           "elementType": "geometry",
           "stylers": [
             {
               "color": "#ffffff"
             }
           ]
         },
         {
           "featureType": "road.arterial",
           "elementType": "labels.text.fill",
           "stylers": [
             {
               "color": "#757575"
             }
           ]
         },
         {
           "featureType": "road.highway",
           "elementType": "geometry",
           "stylers": [
             {
               "color": "#dadada"
             }
           ]
         },
         {
           "featureType": "road.highway",
           "elementType": "labels.text.fill",
           "stylers": [
             {
               "color": "#616161"
             }
           ]
         },
         {
           "featureType": "road.local",
           "elementType": "labels.text.fill",
           "stylers": [
             {
               "color": "#9e9e9e"
             }
           ]
         },
         {
           "featureType": "transit.line",
           "elementType": "geometry",
           "stylers": [
             {
               "color": "#e5e5e5"
             }
           ]
         },
         {
           "featureType": "transit.station",
           "elementType": "geometry",
           "stylers": [
             {
               "color": "#eeeeee"
             }
           ]
         },
         {
           "featureType": "water",
           "elementType": "geometry",
           "stylers": [
             {
               "color": "#c9c9c9"
             }
           ]
         },
         {
           "featureType": "water",
           "elementType": "labels.text.fill",
           "stylers": [
             {
               "color": "#9e9e9e"
             }
           ]
         }
       ]
      
  
   });
         var marker = new google.maps.Marker({
            position: markerBA,
            map: map,
            title: 'Marker',
            icon: 'img/map.png'
         })
         function newLocation(newLat, newLng) {
            map.setCenter({
               lat: newLat,
               lng: newLng
            });
         }


}

   // for (var i = 0; i < baOffices.length; i++) {
   //    var marker = new google.maps.Marker({
   //       position: baOffices[i].position,
   //       title: baOffices[i].city,
   //       icon: baOffices[i].img,
   //       map: map
   //    })
   // }

   // var ourSelect = document.querySelector('#mapSelect');
   // document.querySelector('#mapSelect').onchange = function () {
   //    let coordinate = this.value.slice(1,-1).split(',');
   //    console.log(coordinate);

   //    newLocation(parseFloat(coordinate[0]), parseFloat(coordinate[1]))


//    }

//    function addCityToSelect() {
//       for (let j = 0; j < baOffices.length; j++) {
//          let opt = document.createElement('option');
//          opt.value = baOffices[j].position;
//          opt.innerHTML = baOffices[j].city;
//          ourSelect.appendChild(opt);
//       }
//    }
//    addCityToSelect();
// }

const googleMapsScript = document.createElement('script');
googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBwhMV3GWnFZdW1W0Mad3a96tgifcvAD5E&callback=initMap';
document.head.appendChild(googleMapsScript);
