console.log('You should follow My GitHub page : https://github.com/Dogwaterzx')
console.log('You should add me on discord: ufizzywu#2054 ')
let blook = prompt('What blook are you trying to get?')
let chance = prompt('What chance does it have? Mysticals are usually 0.005')
let boxes = prompt('How many boxes are you opening?')
let amount = prompt('How many are you aiming for?')
alert('Press OK to calculate')
 
let calculation = chance * boxes
alert('You have a ' + calculation + '% chance to get atleast one ' + blook + '. (Press OK to continue)')
console.log('You have a ' + calculation + '% chance to get atleast one ' + blook + '.')
alert('You have a ' + (calculation/amount) + '% chance to get ' + amount + ' ' + blook + '.')
console.log('You have a ' + (calculation/amount) + '% chance to get ' + amount + ' ' + blook + '.')
