let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

/*document.querySelectorAll('.acerca .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.acerca.video-container .video').src = src;
    }
})*/

document.querySelectorAll('.acerca .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.acerca .video-container .video').src = src;
    }
})