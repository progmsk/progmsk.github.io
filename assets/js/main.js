$(function() {
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
