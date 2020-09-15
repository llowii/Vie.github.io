$('.hamburger').click(function(){       
    $('#span1').toggleClass('active');
    $('#span2').toggleClass('active');
    $('.ex').toggleClass('active');
    $('.np').toggleClass('active');
    $('.na').toggleClass('active');
    $('.ap').toggleClass('active');
    $('.c').toggleClass('active');
    $('body').toggleClass('active');
 })
 $('.header_btn_contact').click(function(){       
    $('.header_btn_contact').toggleClass('hoover');
    $('.header_btn').toggleClass('.header_btn--trans');
 })
 $('.header_btn_a_propos').click(function(){       
    $('.header_btn_a_propos').toggleClass('hoover');
    $('.header_btn').toggleClass('.header_btn--trans');
 })

 
var mymap = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZmxvd2kiLCJhIjoiY2tleXJ4bm90MGR0MjJzcGhiY2llb280ZiJ9.ydgTe5L65eukcYWEltXZkw'
}).addTo(mymap);
var marker = L.marker([51.5, -0.09]).addTo(mymap);