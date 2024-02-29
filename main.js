/* var ele = document.createElement("h1");
ele.innerHTML = "from h1 ele"; */
/* var e1 = document.createElement("div");
e1.innerHTML = "<p>hello from para</p>"
console.log(e1);

document.body.append(ele,e1) */

/* 
for(var i=0;i<10;i++){
    var he = document.createElement("h1");
    he.innerHTML = "Vanakkam da Maapla!";
    document.body.append(he);
} */
/* 
a = ["1st","2nd","3rd","4th","5th"];

for(var i=0;i<a.length;i++){
    var ele = document.createElement("h1");
    ele.innerHTML=a[i];
    document.body.append(ele);
} */


/* var ele = document.createElement("h1");
ele.innerHTML = "good bye!";
ele.className = "main";
ele.id = "main1";

var a = document.createElement("a");
a.setAttribute("href","https://www.google.com");
a.setAttribute("target","_blank");
a.innerHTML = "this is link";
document.body.append(a); */

/* var e1 = document.createElement("div");
e1.className="container";
/* console.log(e1); 
var e2 = document.createElement("div");
e2.className="row";
var e3 = document.createElement("div");
e3.className="col";
e3.innerHTML = "this is col";
/* e2.append(e3); 
/* e1.append(e2,e3);
document.body.append(e1); 
e2.append(e3);
e1.append(e2);
document.body.append(e1); */

function data(){
    var fn = document.getElementById("first").value;
    console.log(`firstname : ${fn}`);
    var ln = document.getElementById("last").value;
    console.log(`lastname : ${ln}`);
    var md = document.getElementById("mid").value;
    console.log(`middlename : ${md}`);
    var em = document.getElementById("email").value;
    console.log(`email is : ${em}`);
}

var fn = document.createElement("label");
fn.setAttribute("for","first");
fn.innerHTML="FirstName ";
var br1 = document.createElement("br");
var ifn = document.createElement("input");
ifn.setAttribute("type","text");
ifn.setAttribute("id","first");

var br2 = document.createElement("br");

var ln = document.createElement("label");
ln.setAttribute("for","last");
var b3 = document.createElement("br");
ln.innerHTML = "LastName";
var iln = document.createElement("input");
iln.setAttribute("type","text");
iln.setAttribute("id","last");
var b4 = document.createElement("br");

var mn = document.createElement("label");
mn.setAttribute("for","mid");
mn.innerHTML = "MiddleName"
var b5 = document.createElement("br");
var imn = document.createElement("input");
imn.setAttribute("type","text");
imn.setAttribute("id","mid");
var b6 = document.createElement("br");

var em = document.createElement("label");
em.setAttribute("for","email");
em.innerHTML = "Email";
var b7 = document.createElement("br");
var iem = document.createElement("input");
iem.setAttribute("type","email");
iem.setAttribute("id","email");
var b8 = document.createElement("br");

var bu = document.createElement("button");
bu.setAttribute("type","button");
bu.setAttribute("onclick","data()");
bu.innerHTML = "click me";


document.body.append(fn,br1,ifn,br2,ln,b3,iln,b4,mn,b5,imn,b6,em,b7,iem,b8,bu);