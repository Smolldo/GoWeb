window.onscroll = () =>{
    let header = document.querySelector('.header-body');

    if(window.pageYOffset > 70){
        header.classList.add('header-scrolling');
    }
    else{
        header.classList.remove('header-scrolling');
    }
}

