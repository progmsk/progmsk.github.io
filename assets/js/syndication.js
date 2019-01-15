$(function() {
    var blogUris = [
        'http://markshevchenko.pro/feed.xml',
        'https://xenidev.github.io/feed.xml',
        'https://medium.com/feed/wemake-services',
        'https://dev.to/feed/sobolevn',
    ];

    for (var i = 0; i < blogUris.length; i++) {
        $.get('https://api.rss2json.com/v1/api.json?' + $.param({ rss_url: blogUris[i] }), function (data) {
            var entries = data.items;

            var posts = $('#syndication');
            var newPosts = entries.map(makeHtmlPostFromEntry);
            $.merge(posts, newPosts);

            posts.sort(function (a, b) {
                var dateA = new Date(a.dataset.published);
                var dateB = new Date(b.dataset.published);

                return dateA - dateB;
            });

            $('#syndication').append(posts);

            $('#waiting').hide();
        }, 'json');
    }

    function makeHtmlPostFromEntry(entry) {
        var result = $('<div class="syndication-post clearfix" data-published="' + entry.pubDate + '"></div>');

        result.append('<h2 class="syndication-post-title"><a href="' + entry.link + '">' + entry.title + '</a></h2>');
        result.append('<p class="syndication-post-author">' + entry.author + '</p>');
        result.append('<p class="syndication-post-date"><span class="fa fa-calendar"></span>' + new Date(entry.pubDate).toLocaleDateString('ru-RU') + '</p>');

        if (entry.thumbnail)
            result.append('<img class="syndication-post-image" src="' + entry.thumbnail + '" alt="' + entry.title + '" />');

        if (entry.description)
            result.append('<p class="post-summary">' + entry.description + '</p>');

        return result;
    }
});
  