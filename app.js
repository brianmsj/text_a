

function wordCount(text, element) {
  text = text.split(' ')
  let count = text.length
  element.html(count)
}

function uniqueCount(text, element) {
  let hash = {}
  text = text.split(' ')
  for(let i=0;i<text.length;i++) {
    if(text[i] in hash) {
      hash[text[i]]++
    }
    else {
      hash[text[i]]=1
    }
  }
  let result = Object.keys(hash).length
  element.html(result)
}

function averageWordLength(text, element) {
  let sum = 0
  let hash = {}
  text = text.split(' ')
  for(let i=0;i<text.length;i++) {
    hash[text[i]] = text[i].length
  }
  for(var word in hash) {
    sum +=hash[word]
}
  let result = sum / Object.keys(hash).length
  result = result.toString().slice(0,3)
  element.html(result)
}

function eventListeners() {
 $('.main-submit').click(function(event) {
   event.preventDefault()
   $('dl').removeClass('hidden')
   wordCount($('#user-text').val(), $('.stat1') )
   uniqueCount($('#user-text').val(), $('.stat2'))
   averageWordLength($('#user-text').val(), $('.stat3'))
 })

} $(eventListeners)
