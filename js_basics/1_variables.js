//var let and const:
/*
var ,let and const:

var->:function scoped hota h.
	:var apne parent function m khi bhi use ho skta h.

	:agr hmne function k andr koi for loop lgaya and use hm var ki help se iterate kr rhe h toh i for loop k bhr bhi use ho skta h.
	:var apne aap ko window se add kr leta h.

let and const->braces scoped hota h.
			   let and const apne aap ko window se add nhi krte h.

Javascript k pas kuch features nhi hote h but hm unhe use kr skte h js se nhi blki hum unhe window se use kr skte h vo sarre features jo ki js ka part nhi h but hum but fr bhi hum unhe use kr skte h dhuund kr jo ki ek particular object m hote h jo ki window hota h.
js m kuch features nhi h but fr bhi hum unhe use kr pate h window se window h ek box of features given by browser to use with js.

var a=12;
let b=15;
jb hm console m jake window likege nah tohhh a window m add hua milega but b nhi...
browser->browser context api -> window,stack memory,heap memory.

jita bhi data hmare pas hota h nahh toh use hme khi toh store krna pdta h use hm heap memory m store krte h.
ex: calculation ko krte tym jo intermediate data hota h vo heap memory m save hota h.
*/
var name="Maryada";
let age=20;
var qualification="B-tech";
const phoneNumber="9588544933";

console.table([name,age,qualification,phoneNumber]);