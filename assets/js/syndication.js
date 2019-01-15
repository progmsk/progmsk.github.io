$(function() {
    $.get('http://www.rssmix.com/u/8307748/rss.xml', function(data) {
        console.log(data);
        /*
        var feed = data.query.results.feed;
        if (!Array.isArray(feed))
            feed = [ feed ];

        var entries = feed.reduce(function(a, b) { return a.concat(b.entry) }, [])
                          .sort(function(a, b) { return b.published.localeCompare(a.published) });

        var posts = entries.map(makeHtmlPostFromEntry);
        $('#syndication').append(posts);
        $('#waiting').hide();
        */
    }, 'xml');

    function makeHtmlPostFromEntry(entry) {
        var result = $('<div class="syndication-post clearfix"></div>');

        result.append('<h2 class="syndication-post-title"><a href="' + entry.link.href + '">' + (entry.title.content || entry.title) + '</a></h2>');
        result.append('<p class="syndication-post-author">' + entry.author.name + '</p>');
        result.append('<p class="syndication-post-date"><span class="fa fa-calendar"></span>' + new Date(entry.published).toLocaleDateString('ru-RU') + '</p>');

        if (entry.thumbnail)
            result.append('<img class="syndication-post-image" src="' + entry.thumbnail.url + '" alt="' + (entry.title.content || entry.title) + '" />');

        var summary = getSummary(entry);
        if (summary)
            result.append('<p class="post-summary">' + summary + '</p>');

        return result;
    }

    function getSummary(entry) {
        var summary = (entry.summary || {}).content || entry.summary || (entry.content || {}).content || entry.content;
        if (summary && typeof summary == 'string') {
            if (summary.startsWith('<'))
                summary = $(summary);
            else
                summary = $('<p>' + summary + '</p>');

            for (var i = 0; i < summary.length; i++) {
                if (summary[i].tagName == 'P')
                    return summary[i].textContent;
            }
        }

        return null;
    }
});
  