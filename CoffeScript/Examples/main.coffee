name = "Joe"
csOutput = document.getElementById('csoutput');
csOutput.innerHTML = "Hello #{name}" + '<br>'

largestNum = Number.MAX_VALUE
smallestNum = Number.MIN_VALUE

largestNumStr = "The largestNum is: #{largestNum} "
smallestNumStr = "The smallestNum is: #{smallestNum} "

csOutput.insertAdjacentHTML('beforeend', largestNumStr + '<br>')
csOutput.insertAdjacentHTML('beforeend', smallestNumStr + '<br>')

areYouHappy = no
csOutput.insertAdjacentHTML('beforeend', "areYouHappy is a boolean" + '<br>') if typeof
areYouHappy is 'boolean'