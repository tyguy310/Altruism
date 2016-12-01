
var $carousel = $('.carousel');
var $image = 'li';
var $fadeTime = 1000;
var $slideTime = 4000;
var interval;

function slides () {
  return $carousel.find($image);
}

function auto () {
  slides().first().addClass('active');
  slides().first().fadeIn($fadeTime);
  startInterval();
}

function startInterval() {
  interval = setInterval(function () {
    var $i = $carousel.find($image + '.active').index();
    if (slides().length === $i + 1)
     {$i = -1;} // loop to start
    deactivate($i);
    activate($i + 1);
  }, $fadeTime + $slideTime);
}

function deactivate (el) {
  slides().eq(el).removeClass('active');
  slides().eq(el).fadeOut($fadeTime);
}

function activate (el) {
  slides().eq(el).addClass('active');
  slides().eq(el).fadeIn(500);
}

$('.previous').on('click', function ()  {
  var $k = $carousel.find($image + '.active').index();
  deactivate($k);
  activate($k - 1);
  clearInterval(interval);
  startInterval();
});

$('.next').on('click', function() {
  var $j = $carousel.find($image + '.active').index();
  deactivate($j);
  activate($j + 1);
  clearInterval(interval);
  startInterval();
});
