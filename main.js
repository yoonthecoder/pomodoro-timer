const song = $('.song')[0];


// Play the music
$('#play-btn').click(()=>{
  checkPlaying(song);
})

// Create a function to stop and play the music
const checkPlaying = (song) => {
  if(song.paused) {
    song.play();
    $('#play-btn').removeClass('fa-play').addClass('fa-stop');
  } else {
    song.pause();
    $('#play-btn').removeClass('fa-stop').addClass('fa-play');
  }
};

let duration = 1500;
const outline =  $('.progress-ring-circle')[0];
const outlineLength = outline.getTotalLength();
outline.style.strokeDasharray = outlineLength;
outline.style.strokeDashoffset = outlineLength;

// Get the timer working 
song.ontimeupdate = () => {
  let currentTime = song.currentTime;
  let elapsed = duration - currentTime;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor(elapsed / 60);
  
  // Animate the circle
  let progress = outlineLength - (currentTime / duration) * outlineLength;
  outline.style.strokeDashoffset = progress;
  $('.time-display')[0].textContent = `${minutes}:${seconds}`;
 
  if(currentTime >= duration){
    song.pause();
    song.currentTime = 0;
    $('#play-btn').removeClass('fa-stop').addClass('fa-play');
}
}

const reset = () => {
    song.pause();
    song.currentTime = 0;
    $('#play-btn').removeClass('fa-stop').addClass('fa-play');
}

// Tab options 
$('.tab span').click(function(e){
  $('.tab-item').removeClass('tab-active');
  $(e.currentTarget).addClass('tab-active');

  if(e.currentTarget.textContent === "short break"){
    reset();
    $('.time-display')[0].textContent = "5:00";
    duration = 300;
  } else if(e.currentTarget.textContent === "pomodoro"){
    reset();
    $('.time-display')[0].textContent = "25:00";
    duration = 1500;
  } else if(e.currentTarget.textContent === "long break"){
    reset();
    $('.time-display')[0].textContent = "10:00";
    duration = 600;
  }
})
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

