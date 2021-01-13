var johnScore=[89,120,103];
var mikeScore=[116,94,123];
var johnSum=0;
var mikeSum=johnSum;
for(var i=0;i<johnScore.length;i++){
    johnSum=johnSum+johnScore[i];
}
console.log("Total john score: "+johnSum)
for(var i=0;i<mikeScore.length;i++){
    mikeSum=mikeSum+mikeScore[i];
}
console.log("Total mike score: "+mikeSum);
var johnAvg=johnSum/3;
var mikeAvg=mikeSum/3;
console.log("Average John score: "+johnAvg);
console.log("Average Mike score: "+mikeAvg);
if (mikeAvg>johnAvg){
    console.log("Mike's Team Wins match");
}else if(johnAvg>mikeAvg){
    console.log("John's Team wins match");
}else if(johnAvg===mikeAvg){
    console.log("It's a draw");
}
var maryScore=[97,134,102];
var marySum=0;
for(var i=0;i<maryScore.length;i++){
    marySum=marySum+maryScore[i];
}
console.log("Total mary score: "+marySum);
var maryAvg=marySum/3;
if(mikeAvg===johnAvg && johnAvg===maryAvg && maryAvg===mikeAvg){
    console.log("It's a draw between three teams");
}else if(johnAvg===mikeAvg){
    console.log("It's a draw between john and mike team");
}else if(mikeAvg===maryAvg){
    console.log("it's a draw between mike and mary team");
}else if(maryAvg===johnAvg){
    console.log("it's a draw between mary and john team");
}else if(johnAvg>maryAvg && johnAvg>mikeAvg){
    console.log("John's team win by "+johnAvg);
}else if(mikeAvg>johnAvg && mikeAvg>maryAvg){
    console.log("mike's team win by "+mikeAvg);
}else if(maryAvg>johnAvg && maryAvg>mikeAvg){
    console.log("Marys' team win by: "+maryAvg);
} 