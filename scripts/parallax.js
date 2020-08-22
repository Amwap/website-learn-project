$('body').on('mousemove',(e) =>{
    const x = e.pageX / $(window).width();
    const y = e.pagey / $(window).height();
    console.log(x)
    $('.mouse_parallax_background').css(
        'transform',
        `translate(-${x*30}px, -${y*30}px)`
    );
});