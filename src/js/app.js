
function mob_menu_onclick(){
    mob_set_class('top_menu','top_cat');
}

function mob_cat_onclick(){
    mob_set_class('top_cat','top_menu');
}

function mob_set_class(this_opened, this_closed){
    let opened = document.getElementById(this_opened);
    let closed = document.getElementById(this_closed);
    opened.classList.toggle('active');
    closed.classList.remove('active');

}

function mob_menu_close(name){
    let element = document.getElementById(name);
    element.classList.remove('active');
}

function footer_up_click(){
    console.log('start', window.pageYOffset)
    window.scrollTo(10, 0);
}

// import * as flsFunctions from './modules/functions.js';

let index_banner_swiper = null;
if (document.querySelector('.banner-slider-background')) {index_banner_swiper = new Swiper('.banner-slider-background',{
    loop : true,
    autoplay:{
        delay:5000
    }
});}
