
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

function form_buy_open(){
    document.querySelector('.form_confirm').classList.add('form-bk__show');
}

function form_buy_close(){
    document.querySelector('.form_confirm').classList.remove('form-bk__show');
}

function form_req_open(){
    document.querySelector('.form-request').classList.add('form-bk__show');
}

function form_req_close(){
    document.querySelector('.form-request').classList.remove('form-bk__show');
}


function scroll_up(){
    document.querySelector('.wrapper').scrollTo(0,0);
}



// import * as flsFunctions from './modules/functions.js';

let index_banner_swiper = null;
if (document.querySelector('.banner-slider-background')) {index_banner_swiper = new Swiper('.banner-slider-background',{
    loop : true,
    watchOverflow : true,
    autoplay:{
        delay:5000
    }
});}

let saloon_swiper = null;
if (document.querySelector('.saloon-slider')) {saloon_swiper = new Swiper('.saloon-slider',{
    loop : true,
    watchOverflow : true,
    navigation: {
        nextEl: '.saloon-slider__next',
        prevEl: '.saloon-slider__prev',
        },
    autoplay:{
        delay:5000
        },
    breakpoints: {
        
        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        
        480: {
            
        },
        
        728: {
            slidesPerView: 1.5,
            spaceBetween: 40,
        }
        }   
});}


let goods_swiper = null;
if (document.querySelector('.goods-slider')) {index_banner_swiper = new Swiper('.goods-slider',{
    autoHeight : true,
    watchOverflow : true,
    autoplay:{
        delay:5000
    },
    thumbs:{
        swiper: {
            el : '.goods-navslider',
            slidesPerView : 3,
            spaceBetween: 40,
        },
    },
    spaceBetween: 40,
    navigation: {
        nextEl: '.goods-slider__next',
        prevEl: '.goods-slider__prev',
        },

}) };

// let saloon_swiper = null;
// if (document.querySelector('.goods-navslider')) {index_banner_swiper = new Swiper('.goods-navslider',{

// }) };


let goods_subswiper = null;
if (document.querySelector('.goods-subslider')) {goods_subswiper = new Swiper('.goods-subslider',{
    loop : true,
    watchOverflow : true,
    navigation: {
        nextEl: '.goods-subslider__next',
        prevEl: '.goods-subslider__prev',
        },
    autoplay:{
        delay:5000
        },
    breakpoints: {
        
        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        
        480: {
            
        },
        
        728: {
            slidesPerView: 1,
            spaceBetween: 40,
        }
        }   
});}