
// Tab options 
$('.tab span').click(function(e){
  $('.tab-item').removeClass('tab-active');
  $(e.currentTarget).addClass('tab-active');
})

// Settings Modal 

$('.close-btn , .settings-btn').click(
  function(){
    $('.settings-modal').hide()   
}) 

$('.setting-btn').click(function() {
    $('.settings-modal').show()})

// Settings - Theme Colours

// Blue theme

$('.color-item-blue').click(function() {
  $(this).children().addClass('checked');
  $('.color-item-pink').children().removeClass('checked');
  $('.color-item-orange').children().removeClass('checked');
  $('.tab-active').css("background-color", "var(--blue)");
  $('.timer-btn').css("color", "var(--blue)");
  $('.container').addClass("blue-bg");
})

// Pink theme

$('.color-item-pink').click(function() {
  $(this).children().addClass('checked');
  $('.color-item-blue').children().removeClass('checked');
  $('.color-item-orange').children().removeClass('checked');
  $('.tab-active').css("background-color", "var(--pink)");
  $('.timer-btn').css("color", "var(--pink)");
  $('.container').addClass("pink-bg");
})

// Orange theme

$('.color-item-orange').click(function() {
  $(this).children().addClass('checked');
  $('.color-item-blue').children().removeClass('checked');
  $('.color-item-pink').children().removeClass('checked');
  $('.tab-active').css("background-color", "var(--orange)");
  $('.timer-btn').css("color", "var(--orange)");
  $('.container').addClass("orange-bg");
})

// Quote API - get a random quote
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const quoteObj = data[Math.round(Math.random()*1642)];
    document.querySelector('.quote').innerText ='"'+ quoteObj.text + '"';
    document.querySelector('.quote-by').innerText = '- ' + quoteObj.author;
  });

