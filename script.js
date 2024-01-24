//change header color on scroll
document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', function () {
        if (window.scrollY>0) {
                header.style.backgroundColor = 'rgb(34, 34, 34)';
                header.style.opacity = '0.95';
        } else {
            header.style.backgroundColor = 'rgb(26,30,31)';
            header.style.opacity = '1';
        }
    });
});

//burger bar
const burger=document.getElementById('burger-menu')
const nav=document.getElementById('burger-navbar')
burger.addEventListener('click',function(){
    nav.classList.toggle('d-block');
    burger.classList.toggle('active');
    burger.classList.toggle('color')
})


//slider
   
        const slider = document.querySelector('.slider');
        const prevButton=document.querySelector('.prev')
        const nextButton=document.querySelector('.next')
        const slides = document.querySelectorAll('.slide');
        let dots = document.querySelectorAll(".dot");

        let slideIndex = 0;

     
       // mobile rezoluciaze
      const slideImage=()=>{
        slides.forEach(
          (slide,index)=>{
            slide.style.left = `${index * 100}%`;
          }
        );
        slides.forEach(
          (slide)=>{
            slide.style.transform = `translateX(-${slideIndex * 100}%)`;
          }
        );
      }

      //desktop rezoluciaze
      function showSlidesDesktop() {
        if(slideIndex>slides.length-1){
          slideIndex=0
        }
        else if(slideIndex<0){
          slideIndex=slides.length-1
        }
      
        slides.forEach(
          (slide,i)=>{
            slide.style.display =(i === slideIndex) ? "flex" : "none";
          }
        );
    }
    function handleResize() {
      if (window.innerWidth < 1024) {
          slideImage();
          slides.forEach(
            (slide,i)=>{
              slide.style.display ="flex"
            }
          );
      } else {
          showSlidesDesktop();
      }
  }    

      //ukan
      function prevSlide(){
          showSlidesDesktop()
          slideIndex--
      }

      //win
      function nextSlide(){
          showSlidesDesktop()
          slideIndex++        
      }

      handleResize();
      window.addEventListener('resize', handleResize);
      prevButton.addEventListener('click',prevSlide)
      nextButton.addEventListener('click',nextSlide)

      // setInterval( () => {
      //   setSlideTimer()
      //   }, 1000)

      function setSlideTimer(){
        if(window.innerWidth<1024){
          if (slideIndex >= slides.length ) {         
            slideIndex = 0;
            slideImage();
            // slides.forEach(
            //   (slide)=>{
            //     slide.style.transition = 'none';  
            //     void slide.offsetWidth;
            //     slide.style.transition = '';
            // }
            // );
        } else {
            slideImage()
            slideIndex++
        }
        }else{
          showSlidesDesktop()
          slideIndex++
        }
      }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', function () {
              slideIndex = index;
              if(window.innerWidth<1024){
                  slideImage()
              }else{
                showSlidesDesktop()
              }
            });
        });

        
      
     