$(function() {
  $('.blog-post-date').prepend('<span class="fa fa-calendar"></span>');
  $('.blog-post-tags').prepend('<span class="fa fa-tags"></span>');
  
  $videos = $('iframe[src^="https://www.youtube.com"]');
  $content = $('#content');

  $videos.each(function() {
    $(this).data('aspectRatio', this.height/this.width)
           .removeAttr('height')
           .removeAttr('width');
  });

  $(window).resize(function() {
    var width = $content.width();

    $videos.each(function() {
      $(this).width(width)
             .height(width * $(this).data('aspectRatio'));
    });
  });

  $(window).resize();
});
