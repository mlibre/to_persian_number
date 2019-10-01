# To Persian Number
Very simple and fast **javascript function** that **convert English numbers** to the **Persian numbers**.

---
## How It Work
A function that do the thing, **`ToPersian`** function.  
**`ToPersian`** function get an **English** number(string or number) and then return **Persian** number in **`string`**.

123 => "۱۲۳"  
"456" => "۴۵۶"

---
## Example
~~~javascript
var en_num = 123;
var fa_num = ToPersian(en_num);
console.log(fa_num); // ۱۲۳
~~~

---
## Source code
~~~javascript
function ToPersian(string)
{
    var etp = ['۰' , '۱' , '۲' , '۳' , '۴' , '۵' , '۶' , '۷' , '۸' , '۹'];
    var sr = "";
    var st = string.toString();
    for(var i = 0 ; i < st.length ; i++)
    {
        sr += etp[ parseInt(st[i]) ];
    }
    return sr;
}
~~~

---
## License
This project has no license! You may consider this as **Public Domain**, **CC0** or **unlicense**.

---
## Donate Bitcoin
My **Bitcoin Wallet** Address: `3JfNjydkEgKGjsnrU1SoCCAv1q2yTuCoDY`

---
