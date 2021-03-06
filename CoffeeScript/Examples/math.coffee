csOutput = document.getElementById('csoutput');
csOutput.insertAdjacentHTML('beforeend', "5+2 = #{5+2}<br>")
csOutput.insertAdjacentHTML('beforeend', "5-2 = #{5-2}<br>")
csOutput.insertAdjacentHTML('beforeend', "5*2 = #{5*2}<br>")
csOutput.insertAdjacentHTML('beforeend', "5/2 = #{5/2}<br>")

precisionTest = 0.1000000000001
csOutput.insertAdjacentHTML('beforeend', "Precision: #{precisionTest + 0.100000000000}<br>")

balance = 55000.60
csOutput.insertAdjacentHTML('beforeend', "Monthly Payment: #{(balance/12).toFixed(2)}<br>")

randNum = 10
csOutput.insertAdjacentHTML('beforeend', "randNum = #{randNum++}<br>")
csOutput.insertAdjacentHTML('beforeend', "randNum = #{++randNum}<br>")
csOutput.insertAdjacentHTML('beforeend', "randNum = #{randNum--}<br>")
csOutput.insertAdjacentHTML('beforeend', "randNum = #{--randNum}<br>")

csOutput.insertAdjacentHTML('beforeend', "E = #{Math.E}<br>")
csOutput.insertAdjacentHTML('beforeend', "PI = #{Math.PI}<br>")
csOutput.insertAdjacentHTML('beforeend', "MathSqrt = #{Math.sqrt(50)}<br>")