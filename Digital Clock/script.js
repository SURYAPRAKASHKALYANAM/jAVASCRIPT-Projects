
const weekdays=["SUN","MON","TUE","WED","THU","FRI","SAT"];

function gettime()
{
    var date=new Date();

    document.getElementById("day").innerHTML=date.getFullYear()+"-"+
                                            Zeropadding(date.getMonth()+1)+"-"+
                                            Zeropadding(date.getDate())+" "+
                                            weekdays[date.getDay()];

    document.getElementById("time").innerHTML=Zeropadding(date.getHours())+":"+
                                            Zeropadding(date.getMinutes())+":"+
                                            Zeropadding(date.getSeconds());
}
function Zeropadding(val,digit=2)
{
    return String(val).padStart(digit,'0')
}
gettime();
setInterval(gettime,1000);

