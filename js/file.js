
// Sticky menu background 
window.addEventListener('scroll', function() {
 
  if (window.scrollY > 50) {
     this.document.querySelector('nav').style.opacity = 0.9;
  }
  else {
     this.document.querySelector('nav').style.opacity = 1;
  }

});

// $('#navbar a, .btn').on('click', function(event){
//   if (this.hash !== '') {
//      event.preventDefault();

//      const hash = this.hash;

//      $('html,body').animate(
//         {
//            scrollTop: $(hash).offset().top - 100
//         },
//         800
//      );

//   }
// });



//Responsive Nav
const navSlide = () => {
  
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.items');
  const navLinks = document.querySelectorAll('.items li');

//   const links = document.querySelectorAll('.items li a');
  
// links.forEach(link => {
//   link.addEventListener('click', (e) => {
//     if(e.target.hash !== "") {
//       event.preventDefault();

//       const hash = e.target.hash;

 

    //   const slide = document.querySelector('body');

    //   slide.window.scrollTo(500, 0);
    //   slide.forEach(element => {
      
    //      element.animate({
    //       top: ['8px', '280px']
    //          },{ duration: 1760,        // number in ms [this would be equiv of your speed].
    //              easing: 'ease-in-out',
    //              iterations: 1,         // infinity or a number.
    //           // fill: ''
    // });  
    //   });
//     }
//   });
// });
  
  

  burger.addEventListener('click', () => {

    nav.classList.toggle('nav-active');

    navLinks.forEach((link,index,event) => { 

      if(link.style.animation){
        link.style.animation = "";
      }else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    
    });
  });

}

navSlide();