let employees: string[] = ["Bob "," Sally "," Sam "];

document.write(employees.toString()) + "<br/>"

interface SuperHero{
	realName: String;
	superName: String;
}

let superheroes: SuperHero[] = [];
superheroes.push({
	realName: "Bruce Wayne",
	superName: "Batman"
})
document.write("<br/>" + superheroes[0].realName + " is " + superheroes[0].superName + "<br/>")