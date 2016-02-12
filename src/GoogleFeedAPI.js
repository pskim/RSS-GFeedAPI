var GoogleFeed = (function(){
  function loadApiData(){
    google.load("feeds", "1");
  }

  function runAfterLoad(){
    google.setOnLoadCallback(initialize);
  }

  function initialize() {
    var feed = new google.feeds.Feed("http://feeds.feedburner.com/tedtalks_video")
    feed.setNumEntries(10);
    feed.setResultFormat(google.feeds.Feed.JSON_FORMAT);
    feed.load(function(result){
      if (!result.error) {
           var container = document.getElementById("load-here");
           for (var i = 0; i < result.feed.entries.length; i++) {
             entry = result.feed.entries[i];
             HandleBars.createThis(entry);
           }
         }
    });
  };

  return {
    loadApiData: loadApiData,
    runAfterLoad: runAfterLoad
  }
})()
