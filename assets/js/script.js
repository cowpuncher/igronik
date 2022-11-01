document.addEventListener("DOMContentLoaded", function() {
    
    let activedSlider = (newSlider) => {
        newSlider = new Swiper('.clientsItem', {
            loop: true,   
            slidesPerView: 5, 
            navigation: {
              nextEl: '.arrow-right',
              prevEl: '.arrow-left',
            },
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

});