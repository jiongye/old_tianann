// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery.cycle.all.min
//= require_tree .

$('#locale a').click(function(){
  var locale = $(this).attr("href");
  var pathname = location.pathname;
  if(pathname == "/"){
    location.href = locale;
  }else if(pathname.match(/^\/(zh-TW|en)/) != null){
    pathname = pathname.replace(/^\/(zh-TW|en)/, locale);
    location.href = pathname + location.search;
  }else{
    pathname = locale + pathname;
    location.href = pathname + location.search;
  }

  return false
})

$("#email").html("<a href='mailto:webmaster@tiananntemple.org'>webmaster@tiananntemple.org</a>")

$('.image_url').click(function(){
  var locale = $('#locale_value').data("value");
  var url = $(this).attr("href");
  location.href = "/" + locale + url;
  return false;
})

$('#slideshow').cycle({
    fx:     'fade',
    speed:  'slow',
    timeout: 3000,
    pager:  '#slider_nav',
    pause: true,
    pagerAnchorBuilder: function(idx, slide) {
        // return sel string for existing anchor
        return '#slider_nav li:eq(' + (idx) + ') a';
    }
});
