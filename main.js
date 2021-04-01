// Tab options 
$('.tab span').click(function(e){
  $('.tab-item').removeClass('tab-active');
  $(e.currentTarget).addClass('tab-active');
})

// Timer 
var minutes = 25;
var seconds = "00";
var isPaused = true;

$('.timer-minutes').html(minutes);
$('.timer-seconds').html(seconds);

// Start the timer
function play() {
  if(isPaused) {
    timer();
    $('#play-btn').removeClass('fa-play').addClass('fa-stop');
  } else{
    $('#play-btn').removeClass('fa-stop').addClass('fa-play');
  }
}

function timer() {
  isPaused = false;
  
  minutes = 24;
  seconds = 59;

  $('.timer-minutes').html(minutes);
  $('.timer-seconds').html(seconds);

  var minutes_interval = setInterval(minutesTimer,60000);
  var seconds_interval = setInterval(secondsTimer,1000);

  function minutesTimer() {
    minutes = minutes - 1;
    $('.timer-minutes').html(minutes);
  }

  function secondsTimer() {
    seconds = seconds - 1;
    $('.timer-seconds').html(seconds);
    
    if(seconds < 1) {
      if (minutes < 1) {
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);
        isPaused = true;
      }
      seconds = 60;
    }
  }
}

$('.play-btn').click(()=> {play()});

// Reset the timer
$('.reset-btn').click(function() {
  $('.timer-minutes').html(25);
  $('.timer-seconds').html("00");
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

