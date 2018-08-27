fName = "Joe"
lName = "Doe"

longString = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sed sunt delectus molestias voluptatum hic! Ratione velit, explicabo ullam, eligendi dolor numquam, sint aliquam maiores pariatur quibusdam rem porro illo."

csOutput = document.getElementById('csoutput');
csOutput.insertAdjacentHTML('beforeend', "Name: #{fName + lName}<br>")
csOutput.insertAdjacentHTML('beforeend', "StringLength: #{longString.length}<br>")
csOutput.insertAdjacentHTML('beforeend', "IndexOfString: #{longString.indexOf("elit")}<br>")
csOutput.insertAdjacentHTML('beforeend', "Index10: #{longString.charAt(10)}<br>")
csOutput.insertAdjacentHTML('beforeend', "Word: #{longString.slice(20,25)}<br>")

strArray = longString.split(" ")
for x in strArray
	csOutput.insertAdjacentHTML('beforeend', "#{x}<br>")