// const backtotop = document.querySelector('.backToTop');

// if (backtotop) {
//   const toggleBacktotop = () => {
//     if (window.scrollY > 100) {
//       backtotop.classList.add('active');
//     } 
   
// else {
//       backtotop.classList.remove('active');
//     }
//   };

  
  
//   window.addEventListener('load', toggleBacktotop());
//   window.addEventListener('scroll', toggleBacktotop());
//     }
 
// function toggleBackToTop() {
    
   
//     const backToTopButton = document.getElementById('backToTop');
        
       
//     if (window.scrollY > 100) {
//             backToTopButton.classList.add('active');
//         } 
       
//     else {
//             backToTopButton.classList.remove('active');
//         }
//     }
    
//     // Event listeners for scroll and window load
//     window.addEventListener('scroll', toggleBackToTop());
//     window.addEventListener('load', toggleBackToTop());

let backtotop = select('.back-to-top')
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('active')
    } else {
      backtotop.classList.remove('active')
    }
  }
  window.addEventListener('load', toggleBacktotop)
  onscroll(document, toggleBacktotop)
}