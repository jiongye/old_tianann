$ ->
  if $('#gallery').length > 0
    $('.lightbox').lightbox({
        imageClickClose: false,
        loopImages: true
    });