var HandleBars = (function(){
  var templateScript, template, compiledHtml
  var container = $('.load-here')

  function createThis(entry){
    templateScript = $("#feed-template").html();
    template = Handlebars.compile(templateScript);
    var cleanedEntryObject = new Object

    // make into another specific function that cleans title and author
    var titleAuth = filterTitleAuthor(entry.title)
    cleanedEntryObject.title = titleAuth[0]
    cleanedEntryObject.author = titleAuth[1]

    // function cleans content of img tag
    cleanedEntryObject.content = removeImgTagFromContent(entry.content)

    // add contentsnippet
    cleanedEntryObject.contentSnippet = entry.contentSnippet

    // function that removes seconds hours etc from date content
    cleanedEntryObject.publishedDate = removeHoursSecondsAndTimeZone(entry.publishedDate)

    compiledHtml = template(cleanedEntryObject);
    container.append(compiledHtml);
    }

  function filterTitleAuthor(titleAuthor){
    var container = []
    titleAuthorArray = titleAuthor.split("|")
    titleAuthorArray.forEach(function(string){
      container.push(string.trim())
    })
    return container
  }

  function removeImgTagFromContent(content){
    contentArray = content.split("<")
    return contentArray[0]
  }

  function removeHoursSecondsAndTimeZone(datePublished){
    var publishedDateArray = datePublished.split(" ")
    publishedDateArray.splice(4,2)
    var publishedDateString = publishedDateArray.join(" ")
    return publishedDateString
  }

  return {
    createThis: createThis
  }
})()
