var HandleBars = (function(){
  var templateScript, template, compiledHtml
  var container = $('.load-here')
  // var cleanedEntryObject = new Object

  function createThis(entry){
    templateScript = $("#feed-template").html();
    template = Handlebars.compile(templateScript);

    // create a function that adds all the clean data to object
    // var titleAndAuthor = separateAuthorAndTitle(entry.title)
    // cleanedEntryObject.title = titleAndAuthor[0]
    // cleanedEntryObject.author = titleAndAuthor[1]
    //
    // cleanedEntryObject.content = removeImgTagFromContent(entry.content)
    //
    // cleanedEntryObject.contentSnippet = entry.contentSnippet
    //
    // cleanedEntryObject.publishedDate = removeHoursSecondsAndTimeZone(entry.publishedDate)
    //
    // cleanedEntryObject.url = entry.mediaGroups[0].contents[0].url

    var cleanedEntries = createObjectWithCleanedData(entry)
    compiledHtml = template(cleanedEntries);
    container.append(compiledHtml);
    }

  function separateAuthorAndTitle(titleAuthor){
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

  function createObjectWithCleanedData(entry){
    var cleanedEntryObject = new Object
    var titleAndAuthor = separateAuthorAndTitle(entry.title)
    cleanedEntryObject.title = titleAndAuthor[0]
    cleanedEntryObject.author = titleAndAuthor[1]

    cleanedEntryObject.content = removeImgTagFromContent(entry.content)

    cleanedEntryObject.contentSnippet = entry.contentSnippet

    cleanedEntryObject.publishedDate = removeHoursSecondsAndTimeZone(entry.publishedDate)

    cleanedEntryObject.url = entry.mediaGroups[0].contents[0].url
    return cleanedEntryObject
  }

  return {
    createThis: createThis
  }
})()
