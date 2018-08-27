csOutput = document.getElementById("csoutput")

age = 19
if age >= 18
	csOutput.insertAdjacentHTML('beforeend', "You can Vote")
else
	csOutput.insertAdjacentHTML('beforeend', "You can't Vote")

unless (age >= 19)
	csOutput.insertAdjacentHTML('beforeend', " Still you are in school<br>")

if(age<4) || (age > 65)
	csOutput.insertAdjacentHTML('beforeend', "You are child or retired")

votingAge = if age > 18 then true else false
csOutput.insertAdjacentHTML('beforeend', " #{votingAge}<br>")

childAge = 7
switch childAge
	when 5 then csOutput.insertAdjacentHTML('beforeend', " Go to preschool")
	when 6,7,8,9,10,11,12,13,14,15,16,17,18,19 then csOutput.insertAdjacentHTML(
		'beforeend', " Go to school")

if age?
	csOutput.insertAdjacentHTML('beforeend', "<br>#{age} years old")