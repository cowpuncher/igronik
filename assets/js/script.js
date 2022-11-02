document.addEventListener("DOMContentLoaded", function() {
    
    let activedSlider = (slider) => {
        newSlider = new Swiper('.clientsItem', {
            loop: true,   
            slidesPerView: 5, 
            navigation: {
              nextEl: '.arrow-right',
              prevEl: '.arrow-left',
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 3,
                  spaceBetween: 40
                },
                993: {
                  slidesPerView: 4,
                  spaceBetween: 40
                },
                1200: {
                  slidesPerView: 5,
                  spaceBetween: 40
                }
            }
        });
    }
    const clientsItem = document.querySelectorAll('.clientsItem');
    const clientsTabs = document.querySelectorAll('.clientsTabs .tab');
    clientsItem.forEach(element => activedSlider(element));
    clientsTabs.forEach((item,index) => {
        item.addEventListener('click', e => {
            clientsTabs.forEach(el => el.classList.remove('active'));
            clientsItem.forEach((elTab,iTab) => {
                elTab.classList.remove('active');
                if(iTab == index) {                           
                    elTab.classList.add('active');
                }
            });            
            e.target.classList.add('active');
        });
    });

    const teamSlider = new Swiper('.teamSlider', {
        loop: true,   
        slidesPerView: 4, 
        spaceBetween: 10,
        navigation: {
          nextEl: '.arrow-right',
          prevEl: '.arrow-left',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 640px
            568: {
              slidesPerView: 3,
            },
            993: {
              slidesPerView: 4,
            },
        }
    });

});