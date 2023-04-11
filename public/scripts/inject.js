// Injects the navbar, and footer into the HTML doc
function injectTemplates() {
    $('#nav').load('../text/nav.html');
    $('#foot').load('../text/foot.html');
    console.log("injected the header and footer");
}

// Calls the inject_navfoot function
injectTemplates();
 //this will inject navbar and footer into the page, and will be called on every page, because it is called on every page
// the file will get used for various purposes, however for final release other functions should recieve their own file

//this lil guy makes the bouncy arrow fade out when you scroll down
$(window).scroll(function(){
    $("#bouncyarrow").css("opacity", 1 - $(window).scrollTop() / 400); 
    if ($(window).scrollTop() == 0) { //if we are at the top of the page, the arrow will be shown using the slideDown function
        $('.arrow').slideDown(600);
    }
    else if($(window).scrollTop() > 400){ // when we scroll down 400px the arrow div will be hidden using the slideUp function
        $('.arrow').slideUp(600);
    }
  });




function showhide() {
    $('.arrow').slideToggle(200);
}
