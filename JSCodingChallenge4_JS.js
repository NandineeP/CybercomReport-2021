var John={
    firstName:"John",
    lastName:"Smith",
    mass:74,
    height:1.7,
    calculateBMI:function(){
        BMI=this.mass/(this.height*this.height);
        return BMI;
    }
}
var Mark={
    firstName:"Mark",
    lastName:"Gloria",
    mass:74,
    height:1.7,
    calculateBMI:function(){
        BMI=this.mass/(this.height*this.height); 
        return BMI;
    }
}
var johnBMI=John.calculateBMI();
var markBMI=Mark.calculateBMI();
if(johnBMI==markBMI){
    console.log(John.firstName+" "+John.lastName+" and "+Mark.firstName+" "+Mark.lastName+" has same BMI "+johnBMI);
}else if(johnBMI>markBMI){
    console.log(John.firstName+" "+John.lastName+" has a higher BMI of "+johnBMI);
}else{
    console.log(Mark.firstName+" "+Mark.lastName+" has a higher BMI of "+markBMI);
}