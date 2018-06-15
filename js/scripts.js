// $("#button").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#elementtoScrollToID").offset().top
//     }, 2000);
// });
// will maybe use something like this to scroll to ids


function inViewport (id) {
  let idElement = document.getElementById(id);
  let bounding = idElement.getBoundingClientRect();
  if (bounding.top >= 0 || bounding.bottom >= 0) {
    return true;
  } else {
    return false;
  }
}

document.addEventListener('scroll', function(){
  if (inViewport("about")) {
    document.getElementById("about-link").style.textDecoration = "underline";
  } else if (inViewport("work")){
    document.getElementById("work-link").style.textDecoration = "underline";
  } else if (inViewport("contact")){
    document.getElementById("contact-link").style.textDecoration = "underline";
  } else {
    let navs = document.getElementsByClassName("nav-links");
    for (let i=0; i<navs.length; i++) {
      navs[i].style.textDecoration = "none";
    }
  }
});
