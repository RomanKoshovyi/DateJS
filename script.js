let 
    y1, y2, m1, m2, d1, d2, years, days, str,
    from = document.getElementById("from"),
    to = document.getElementById("to"),
    out = document.getElementById("output"),
    daynum = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function Run(){
    result = 0;
    str = from.value;
    if(!Date.parse(str)){
        out.innerHTML = "Error: date is invalid!";
    }
    y1 = Number(str.substr(0,4)); m1 = Number(str.substr(5,2)); d1 = Number(str.substr(8,2));
    str = to.value;
    y2 = Number(str.substr(0,4)); m2 = Number(str.substr(5,2)); d2 = Number(str.substr(8,2));
    if(from.valueAsNumber>to.valueAsNumber){
        out.innerHTML = "Error: first date is later than second!";
        return;
    }
    else {
        days = (to.valueAsNumber-from.valueAsNumber)/86400000;
        years = y2-y1;
        if (m1>m2 || (m1==m2 && d1>d2)){
            years--;
        }
        days -= 365*years;
        for (let i = y1+1; i < y2; i++){
            if(!(i % 4) && i %100 || !(i % 400)){
                days--;
            }
        }
        if ((!(y1 % 4) && y1 %100 || !(y1 % 400)) && m1 <= 2){
            days--;
        }
        if ((!(y2 % 4) && y2 %100 || !(y2 % 400)) && m2 >= 3){
            days--;
        }
        out.innerHTML = "Years = " + years + " | Days = " + days;
    }
}