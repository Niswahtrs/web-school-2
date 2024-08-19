const nav = document.querySelector('.navbar');
window.addEventListener('scroll', function(){
    if(this.window.scrollY > 200){
        nav.classList.add('nav-color');
    } else {
        nav.classList.remove('nav-color');
    }
});