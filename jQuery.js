// * @name: Assignement1
// * @Course Code: SODV1201
// * @class: Software Development Diploma program
// * @author: Dan Lu 

$(function () {
  $('#temperatureConvert').on('click', function () {
    const fahrenheit = parseFloat($('#finput').val());
    const celsius = parseFloat($('#cinput').val());
    const kelvin = parseFloat($('#kinput').val());

    if (!isNaN(fahrenheit)) {
      const celsius = (fahrenheit - 32) / 1.8;
      const kelvin = celsius + 273.15;
      $('#cinput').val(celsius.toFixed(2));
      $('#kinput').val(kelvin.toFixed(2));
      $('#text1').empty();
    } else if (!isNaN(celsius)) {
      const fahrenheit = celsius * 1.8 + 32;
      const kelvin = celsius + 273.15;
      $('#finput').val(fahrenheit.toFixed(2));
      $('#kinput').val(kelvin.toFixed(2));
      $('#text1').empty();
    } else if (!isNaN(kelvin)) {
      const celsius = kelvin - 273.15;
      const fahrenheit = celsius * 1.8 + 32;
      $('#cinput').val(celsius.toFixed(2));
      $('#finput').val(fahrenheit.toFixed(2));
      $('#text1').empty();
    } else {
      $('#text1').html('Please enter a valid temperature.');
      $('#text1').css('color', 'red')
      $('#finput').empty();
      $('#cinput').empty();
      $('#kinput').empty();
    }
  });
});

