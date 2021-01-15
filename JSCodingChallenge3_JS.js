function calculateTip(bill){
    var tip=new Array();
    var totalBill=new Array();
    var a=0;
    for(var i=0;i<bill.length;i++){
        if(bill[i]<50){
            a=(bill[i]*(20/100));
            totalBill.push(bill[i]+a);
            tip.push(a);
        }
        else if(bill[i]>=50 && bill[i]<=200){
            a=(bill[i]*(15/100));
            totalBill.push(bill[i]+a)
            tip.push(a);
        }
        else if(bill[i]>200){
            a=(bill[i]*(10/100));
            totalBill.push(bill[i]+a);
            tip.push(a);
            
        }
        else
        {
            continue;
        }
    }
    for(i=0;i<tip.length;i++){
        console.log("Bill: "+bill[i]);
        console.log("Tip: "+tip[i]);
        console.log("Total bill: "+totalBill[i]);
    }
}

var bill=[124,48,268];
calculateTip(bill);