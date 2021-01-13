var markMass = 67;
var johnMass = 68;
var markHeight = 1.75;
var johnHeight = 1.73;
var markBMI = markMass/(markHeight*markHeight);
var johnBMI = johnMass/(johnHeight*johnHeight);
console.log("Mark's BMI: "+markBMI);
console.log("John's BMI: "+johnBMI);
console.log("Is Mark's BMI higher than John's BMI? "+(markBMI>johnBMI));