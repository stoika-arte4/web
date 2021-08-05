const body = document.getElementsByClassName('down-arrow-container');
const notTop = "not-top";
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll == 0) {
    body.classList.remove(scrollUp);
    body.classList.remove(notTop);
    return;
  }
   
  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
    body.classList.add(notTop);
  } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});

$('.down-arrow-container').on('click', function() {
  var body = $("html, body");
  body.stop().animate({scrollTop:$('.item_1').offset().top}, '500');

  var scrollLocation = document.location.toString().split('#')[0];
   document.location = scrollLocation + '#about';
})