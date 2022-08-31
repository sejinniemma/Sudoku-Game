// Adding sound to play,gohome, challengeAgain button.
$('#playbtn, #gohome, #tryagain').click(function(){
  const audio = new Audio();
  audio.src = './audios/magic.mp3';
  audio.play();
});

// Adding sound to Easy mode.
$('#gotoeasy').click(function(){
  const audio = new Audio();
  audio.src = './audios/magic.mp3';
  audio.play();
});

// Adding sound to Difficult mode.
$('#gotodifficult').click(function(){
  const audio = new Audio();
  audio.src = './audios/magic.mp3';
  audio.play();
});

// Adding sound to li.
$('li').click(function () {
  const audio = new Audio();
  audio.src = './audios/button-09a.mp3';
  audio.play();
});

// Adding sound to sudoku click event.
$('.boxLine').click(function(){
  const audio = new Audio();
  audio.src = './audios/button-09a.mp3';
  audio.play();
});

// Adding sound to Challenge Again.
$('.button').click(function(){
  const audio = new Audio();
  audio.src = './audios/magic.mp3';
  audio.play();
});

// Function to return when user make a wrong choice.
function wrongChoiceAudio(){
  const audio = new Audio();
  audio.src = './audios/fail.mp3';
  audio.play(); 
};


// If every cell has a number is going to make a congratulations sound.
function completedSound(){
  if(checkValueCompleted() == true){
    const audio = new Audio();
    audio.src = './audios/congratulations.wav';
    audio.play(); 
  };
}


