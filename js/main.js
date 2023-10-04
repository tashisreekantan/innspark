jQuery(window).scroll(function(){
jQuery(window).scrollTop()>=90?jQuery(".header_area").addClass("navbar_fixed"):jQuery(".header_area").removeClass("navbar_fixed")
})

$(document).on("click", ".cookie-btn_container .btn", function(){
    $(".cookies-box").hide();
})