$(document).ready(function(){
  console.log("ready")

  google.load("feeds", "1");
  var allArticles = []
    function initialize() {
      var feed = new google.feeds.Feed("http://feeds.feedburner.com/tedtalks_video")
      feed.setNumEntries(10);
      feed.load(function(result) {
        if (!result.error) {
          var container = $("#load-here");
          $.each(result.feed.entries, function(i, entry){
            allArticles.push(entry)
          })
        }
        console.log(allArticles)
      });
    }
    google.setOnLoadCallback(initialize);
})
