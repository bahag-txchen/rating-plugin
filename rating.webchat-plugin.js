!function(){
  var e = {};
  e.type = "rating";
  e.title = "Bitte bewerten Sie unseren Service";
  e.initialRating = 0;
  e.size = "medium";
  e.variant = "star";
  e.maxRatingValue = 5;
  e.precision = 1;
  e.rateButtonText = "Bewertung absenden";
  e.label = "Ich habe bewertet";
  e.payload = "Bewertung";
  window.WebchatPlugin = window.WebchatPlugin || {};
  window.WebchatPlugin.rating = { plugin: e };
}();

