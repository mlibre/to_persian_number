about
=========

very simple javascript function for convert english numbers to persian numbers.

123 => ۱۲۳

how its work
==================

    function ToPersian(string)
    {
        var etp = ['۰' , '۱' , '۲' , '۳' , '۴' , '۵' , '۶' , '۷' , '۸' , '۹'];
        var sr = "";
        var st = string.toString();
        alert(st);
        for(var i = 0 ; i < st.length ; i++)
        {
            sr += etp[ parseInt(st[i]) ];
        }
        return sr;
    }

simple example
==================

    document.getElementById("month").innerHTML = ToPersian(110) + ToPersian("110");
