import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


document.addEventListener( 'DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        loop:true,
        // configure Swiper to use modules
        modules: [Navigation, Pagination],
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
        //loop the slider

      });
});