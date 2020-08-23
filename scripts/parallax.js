
$('body').on('mousemove',(k) =>{
    const x = k.pageX / $(window).width();
    const y = k.pagey / $(window).height();
    console.log(x);
    $('.mouse_parallax_background').css(
        'transform',
        'translate(-'+ x*30 + 'px,-' + y*30 + 'px)'
    );
});