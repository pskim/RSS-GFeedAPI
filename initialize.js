function initialize() {
  var feed = new google.feeds.Feed("http://feeds.feedburner.com/tedtalks_video")
  feed.setNumEntries(10);
  feed.setResultFormat(google.feeds.Feed.JSON_FORMAT)
  feed.load(function(result){
    if (!result.error) {
      console.log(result.feed.entries[2])
         var container = document.getElementById("load-here");
         var entry, a, li, p;
         for (var i = 0; i < result.feed.entries.length; i++) {
           entry = result.feed.entries[i];

           var theTemplateScript = $("#feed-template").html();
           var theTemplate = Handlebars.compile(theTemplateScript);
           var theCompiledHtml = theTemplate(entry);

           $('.load-here').append(theCompiledHtml);

          //  a = document.createElement("a");
          //  p = document.createElement("p")
           //
          //  a.appendChild(document.createTextNode(entry.title));
          //  p.appendChild(document.createTextNode(entry.content))
          //  a.appendChild(p);
          //  container.appendChild(a);
         }
       }
  });
};
