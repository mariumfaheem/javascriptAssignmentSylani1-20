
//chapter 1 task 1
let greet="Hello User";
alert(greet)//chapter 1 task 2
let error="Error! Please enter a valid password";
alert(error)

//chapter 1 task 3
let message="Weolcone to JS Land\nHappy Coding"
alert(message)

//chapter 1 task 4
let welcome="Weolcone to JS Land"
alert(welcome);

let happing="Happy Coding\n";
alert(happing);

//chapter 1 task 5
developer="Hello .. i can run JS through my web brpswer's console";
alert(developer)

//chapter 1 task 4
/*
<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script > alert("This is in header")</script>
</head>
<body>
    <script > alert("This is in body")</script>
    
</body>

<script > alert("This is outside body")</script>
<script src="js/j1.js"></script>
</html>*/

/*Chapter 2 start  */
//chapter 2 task1
let userName;
//chapter 2 task2
let myName="Syeda Marium Faheem";
//chapter 2 task3
let message;
message="Hello World";
alert(message)
//chapter2 task 4
const students={
    "name":"John Doe",
    "age":"15 year old",
    "course":"Certified Mobile Application Devlopment"
}
alert(students.name)
alert(students.age)
alert(students.course)

//chapter 2 task 5



//chapter 2 task 6
email="My email address is example@gmail.com"
alert(email)
//chapter 2 task 7
learn="A smarter way to learn JavaScript"
alert(learn)
//chapter 2 task 8
html="Yah !  I can write HTML content through javaScript";
document.write(html)
//chapter 2 task 9
style="▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬"
alert(style)


/* Chapter 3  Start*/
//task 1
let age=15
alert("I am "+age+" years old")
//task 2
let N=14;
alert("You have visited this site "+N+" times")
//task 4
let birthYear=1990
let message="My birth year is "+1990;
document.write(message)
//task 5
let visitorName=prompt("Enter your Name");
let  productTitle=prompt("Enter your Product Name");
let  quantity=prompt("Enter your quantity");
let order=visitorName+" ordered "+quantity+" "+productTitle+ " on XYZ Clothing store "
document.write(order)
/* Chapter 3  End*/




/* Chapter 4  End*/

//chapter 4 task1
let var1,var2,var3;
//chapter 4 task2
let var1,var2,var3,var_5,varName6;
let _var1,$var2,_var3,123var,8yy*;

//chapter 4 task3
let heading="Rules for naming JS varibles <br>"
document.write(heading)
document.write("Variable names can only contain  number,$ and _ .<br>")
document.write("For example $my_1stVariable.Variables must begin with a string,$ or _. For example $name, _name or name <br>");
document.write(".Variable names are case sensitive.\n Variable names should not be JS keyword. <br>")
/*Chapter 4 End */

/* Chapter 5  End*/
//task1 
let num1=prompt("Enter 1st number");
let num2=prompt("Enter 2nd number");
function add(){
let result=num1+num2
document.write("Sum of "+num1+" and "+num2+" is "+result,"<br>")}
add()
//task2
function sub(num1,num2){
   let result=num1-num2
    document.write("Difference of "+num1+" and "+num2+" is "+result,"<br>")}
function mul(num1,num2){
   let result=num1*num2
    document.write("Multi of "+num1+" and "+num2+" is "+result,"<br>")}
function div(num1,num2){
   let result=num1/num2
    document.write("Divof "+num1+" and "+num2+" is "+result,"<br>")}
sub(num1,num2)
mul(num1,num2)
div(num1,num2)
//task3
let dummy;
document.write("Value after variable declaration is: "+dummy+"<br>")
dummy=5;
document.write("Value "+dummy+"<br>")
dummy++;
document.write("Value "+dummy+"<br>")
dummy=dummy+7;
document.write("after addition is: "+dummy+"<br>")
dummy=--dummy;
document.write("after decrement is : "+dummy+"<br>")
dummy=dummy%3;
document.write("The remainder is : "+dummy+"<br>")
//task 4
let ticket=600
let quantity=5;
document.write("Total cost to buy "+quantity+" tickets to a movie is "+quantity*ticket+"PKR")
//task 5
let num=4
for (let index = 0; index <= 10; index++) {
      document.write(num+"x"+index+"="+num*index+"<br>")
}
//task6
function cal_to_fal(cal){
    return (cal*9/5)+32
}
function cal_to_fal(fal){
    return (fal-32)*(5/9)
}
let celsius=prompt("enter temp in celsius")
let fahrenheit=prompt("enter temp in fahrenheit")
document.write(celsius,fahrenheit)
let f=fal_to_cal(fahrenheit)
let c=cal_to_fal(celsius);
document.write(c,f)
document.write(celsius+" is "+f+"<br>");
document.write(fahrenhei+" is "+c+"<br>");
//task no7
let main=document.getElementById("main");
let shoppingcard=document.createElement("h1");
shoppingcard.innerHTML="Shopping Card"
main.append(shoppingcard)
let shop=[
    { price:650,
        quantity:3   },
   { price:100,
            quantity:7   },
]
shop.forEach((element,index) => {
    document.write("Price of Item "+index+1+" is "+element.price,"<br>")
    document.write("Quantity of Item "+index+1+" is "+element.quantity,"<br>")
});
let charges=100
document.write("Shipping Charges is,"+charges+"<br>")
let sum=0;
shop.forEach(element => {
    sum+=element.price
});
sum=sum+charges
document.write("Total cost of your order is "+sum+"<br>")
//task no8
let main=document.getElementById("main");
let heading=document.createElement("h1");
heading.innerHTML="Mark Sheet"
main.append(heading)
let marks=980;
let obtained=804;
let percentage=(obtained/marks)*100
document.write("Total marks: "+marks+"<br>")
document.write("Marks Obtained: "+obtained+"<br>")
document.write(" percentage: "+ percentage+"%<br>")
//task no 9
let main=document.getElementById("main");
let heading=document.createElement("h1");
heading.innerHTML="Currency in PKRt"
main.append(heading)
let us=10
let riyal=25;
let total=us*104.80+riyal*28
document.write("Total Currency is PKR: "+total+"<br>")
//task10
let number=6
number+5*10/2
document.write(number)
//task 11
let main=document.getElementById("main");
let heading=document.createElement("h1");
heading.innerHTML="Age Calculatort"
main.append(heading)
let currentYear=2016
let birthYear=1992;
let age=currentYear-birthYear
document.write("Current Year is : "+currentYear+"<br>")
document.write("Birth Year is : "+birthYear+"<br>")
document.write("Your Age is : "+age+"<br>")
//task no 12
let main=document.getElementById("main");
let heading=document.createElement("h1");
heading.innerHTML="The Geometrizer";
main.append(heading)
class Geometrizer{
    constructor(radius){
        this.radius=radius
    }
    circumference(){
        return 2*this.radius*Math.PI;
    }
    getRadius(){
        return this.radius;
    }
    area(){
        return this.radius*Math.PI*this.radius;
    }
    }
let geo=new Geometrizer(20)
document.write("Radius of a circle  : "+geo.getRadius()+"<br>")
document.write("The circumference is : "+geo.circumference()+"<br>")
document.write("The area  is : "+geo.area()+"<br>")
//task no 13
let main=document.getElementById("main");
let heading=document.createElement("h1");
heading.innerHTML="The Lifetime Supply Calculator";
main.append(heading)
let snack="cholocate chip";
let currentAge=15;
let maxAge=15;
let snackPerDay=3;
document.write("favorite snack  : "+snack+"<br>")
document.write("your current ages : "+currentAge+"<br>")
document.write("maximum age is  : "+maxAge+"<br>")
document.write("your current ages : "+currentAge+"<br>")
document.write("estimated amount per days  : "+snackPerDay+"<br>")
document.write("You will need "+currentAge+"0 to last you until the ripe old age of  : "+maxAge+"<br>")
/*Chapter 5 End */


/* Chapter 6  Start*/
//task1 
let num=10;
document.write("The value of a is :"+num+"<br>");
document.write("....................................."+"<br>");
document.write("The value of ++a is :"+(++num)+"<br>");
document.write("Now ,the value of a is :"+num+"<br> <br>");
document.write("The value of a++ is :"+(num++)+"<br>");
document.write("Now ,the value of a is :"+num+"<br> <br>");

document.write("The value of --a is :"+(++num)+"<br>");
document.write("Now ,the value of a is :"+num+"<br> <br>");
document.write("The value of a is :"+(num++)+"<br>");
document.write("Now ,the value of a-- is :"+num+"<br> <br>");
//task 3
let name=prompt("Enter our name");
document.write("Welcome "+name)
//task no.5
num=prompt("Enter number",5)
for (let index = 0; index <=10; index++) {
    document.write(num+"x"+index+"is "+ num*index,"<br>")
    
}

let sub1=prompt("Enter 1st subject Name");
let sub2=prompt("Enter 2nd subject Name");
let sub3=prompt("Enter 3rd subject Name");
let subjectMarks=100;
let marks1=prompt("Enter 1st subject marks");
let marks2=prompt("Enter 2nd subject marks");
let marks3=prompt("Enter 3rd subject marks");

let per1=(marks1/subjectMarks)*100
let per2=(marks2/subjectMarks)*100
let per3=(marks3/subjectMarks)*100

let totalmarks=300;
let totalObtainedMarks=marks1+marks2+marks3;
//task6
let totalPercentage=per1+per2+per3;
let main=document.getElementById("table");
let table=document.createElement("table");
table.style="border:2px"
let str;
str=` 
<tr>
<th>Subject</th>
<th>Total Marks</th>
<th>Obtained Marks</th>
<th>Percentag</th>
</tr>
<tr>
<td>${sub1}</td>
<td>${subjectMarks}</td>
<td>${marks1}</td>
<td>${per1}</td>
</tr>
<br>
<tr>
<td>${sub2}</td>
<td>${subjectMarks}</td>
<td>${marks2}</td>
<td>${per2}</td>
</tr>
<br>
<tr>
<td>${sub3}</td>
<td>${subjectMarks}</td>
<td>${marks3}</td>
<td>${per3}</td>
</tr>
<tr>
<td></td>
<td>${subjectMarks+subjectMarks+subjectMarks}</td>
<td>${marks3+marks2+marks1}</td>
<td>${per1+per2+per3}</td>
</tr>`

table.innerHTML=str
main.append(table)
/* Chapter 6  End*/

/*Chapter9-11 Start*/ 
//task1
city=prompt("Enter city name");
if(city=="Karachi"){
    document.write("Welcome to city of lights")
}


//task2
gender=prompt("Enter your gender");
if(gender=="male"){
    document.write("Good Morning Sir")
    }
else if(gender=="female"){
    document.write("Good Morning Ma’am.")
}

//task3
color=prompt("Enter color of traffic lights")
if(color=="Red"){
    document.write("Must Stop")
}
else if(color=="Yellow"){

  document.write("Ready to move")
}
else if("Green"){
    document.write("Move now")
}
else{
    document.write("Invalid Color")
}

//task4
let fuel=prompt("Enter fuel");
if(fuel <0.25 ){
    document.write("Please refill the fuel in your car")
}
//task 6
let sub1=prompt("Enter 1st subject Name");
let sub2=prompt("Enter 2nd subject Name");
let sub3=prompt("Enter 3rd subject Name");
let subjectMarks=sub1+sub2+sub3;
let grade,remarks;
let per=(subjectMarks/300)*100
if (per>=80){
    grade="A-one";
    remarks="Excellent"
}
else if(per>=70){
    grade="A";
    remarks="Good"
}
else if(per>=60){
    grade="B";
    remarks="You need imprvement"
}
else if(per< 60){
    grade="Fail";
    remarks="sorry"
}
let main=document.getElementById("main");
let elm=document.createElement("h1");
elm.innerHTML="Marks Sheet"
main.append(elm);
let text=document.createElement("p")
let str=`Total marks :300<br>
Marks Obtained:${subjectMarks}<br>
Percentage:${per}<br>
Percentage:${remarks}<br>`
text.innerHTML=str;
main.append(text)
//task 7
let range=Math.random(0,1)*10
num=prompt("enter number to guess");
if(num==range){
    document.write("Close enough to the correct answer”.")
}
//task 8
num=prompt("Enter number ");
if(num%3==0){
    document.write("The number is divisible by 3.")
}
//task 8
num=prompt("Enter number ");
if(num%2==0){
    document.write("even ")
}
else{
    document.write("odd ")
}
//task 10
temp=prompt("Enter number ");
if(temp >40){
    document.write("It is too hot outside ")
}
else if(temp >30){
    document.write("The Weather today is Normal.")
}
else if(temp >20){
    document.write("Today’s Weather is cool.")
}
else if(temp >10){
    document.write("OMG! Today’s weather is so Cool.")
}

//task 11
let num1=prompt("Enter number 1 ");
let num2=prompt("Enter number 2 ");
let result=0;
let op=prompt("Enter number operator (+, -, *, /, %): ");
switch (op) {
    case '+': result=num1+num2
              document.write(result)
              break;
    case '-': result=num1-num2
              document.write(result)
              break;
  case '*': result=num1*num2
              document.write(result)
              break;
    case '/': result=num1/num2
              document.write(result)
              break;

    default:
        document.write("Invalid Op")
        break;
}

/*Chapter9-11 End*/ 


/*Chapter12-13 Starts*/ 

//task 1
let char=prompt("Enter number  ");
char=char.charCodeAt(char)
if(char >=65 && char <=90){
    document.write("Upercase")
}
else if(char >=97 && char <=122){
    document.write("lower case")
}
else if(char >=0 && char <=10){
    document.write("Number")
}
else{
    document.write("Characters")
}

//task 2
let num1=prompt("Enter number 1  ");
let num2=prompt("Enter number 2  ");

if(num1>num2){
    document.write("num1 is greater")
}
else if(num1==num2){
    document.write("equal")
}
else{
    document.write("num1 is smaller")
}
//task 3
let num=prompt("Enter number  ");
if(num>0){
    document.write("Positive")
}
else if(num==0){
    document.write("Zero")
}
else{
    document.write("negative")
}
//task 4
let str=prompt("Enter String  ");
let vowel=['a','e','i','o','u']
for (let index = 0; index < str.length; index++) {
    if(str[index]==vowel[index]){
        document.write("Matched at ",index)
    }
    
}
//task5
let password1="marium";
let password=prompt("enter password")
while(password!=null ){
     alert("Please enter your password");
     password=prompt("enter password")

}
password=prompt("enter password");
    if(password==password1){
        document.write("Matched")
    }
    else{
        document.write("Not Macthed")
    }
//task 6
var greeting; 
var hour = 13; 
if (hour < 18) { greeting = "Good day";
console.log(greeting)}
 else {greeting = "Good evening"; }

 //task 7
let time=prompt("Enter time in 24hour formate :1900 = 7pm.");
if(time>=0000 && time <1200){
   document.write("Good Morning")
}
else if(time >=1200 && time <1700){
    document.write("Good afternoon")   
}

else if(time >=1700 && time <2100){
    document.write("Good Evening")   
}
else if(time >=2100 && time <2359){
    document.write("Good night")   
}

/* Chapter 12-13 end */

/* Chapter 14-16 Start */
//task no 1-7
let list=[]
let object={};
let str=["String","String1","Ebad"];
let num=[1,2,3,4,5];
let bool=[true,false];
let mic=[true,false,"string",9,0,66];
let qualification=['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
let elem=document.createElement("ol")
let main=document.getElementById("main")
let html;
qualification.forEach(element => {
    str+=`<li>${element}<\li>`
});
elem.innerHTML=str;
main.append(elem)

//task no8
student_names=[];
let name=""
for (let index = 0; index <3; index++) {
   name=prompt("Enter Student's "+(index+1)+" name :\n");
      student_names[index]=name
 }
console.log(student_names)
student_marks=[];
let marks;
for (let index = 0; index <3; index++) {
   marks=prompt("Enter Student's "+(index+1)+" Marks :>\n");
    student_marks[index]=marks
}
student_per=[];
let per;
for (let index = 0; index <3; index++) {
    per=student_marks[index]/500*100
    student_per[index]=per
}
for (let index = 0; index <=3; index++) {
  document.write("Score of "+student_names[index]+" is "+student_marks[index]+" .Percentage :"+student_per[index] )
}
//task no 9
color_array=["red","green","blue"];

color=prompt("Enter a color name to add in the begninning :");
color_array.unshift(color);
document.write("<br>Updated colors are :"+color_array+"<br>") 
color=prompt("Enter a color name to add in the End :");
color_array.push(color);
document.write("<br>Updated colors are :"+color_array+"<br>") 
color=prompt("Enter a color name to delete in the begninning :");
color_array.shift(color);
document.write("<br>Updated colors after deletetion are :"+color_array+"<br>") 

color=prompt("Enter a color name to delete in the End :");
color_array.pop(color);
document.write("<br>Updated colors after deletetion of last element are :"+color_array+"<br>") 

//yahan se masla arha h is m 
color=prompt("Enter a color name :");
index=prompt("Enter a index number :");
color_array.splice(index, 0, color)
document.write(`<br>Updated colors of  element are at ${index},${color} : color_array<br>`) 
document.write(color_array)

color.splice(4,1);
document.write(color +"<br>");
document.write(color_array)

//task no10
let student_score=[320,230,480,120];
document.write("Scores of Students :"+student_score)
document.write("<br>Scores of Students :"+student_score.sort())
//task no 11
let cities_names=[]
let city=""
for (let index = 0; index < 5; index++) {
    city=prompt(`<br>Enter city no ${index} :`)
     cities_names[index]=city
}

let selected_cities=[];
selected_cities=cities_names.slice(2,4)
console.log(selected_cities)
document.write(selected_cities)
//task no 12
let arr = ["This ", "is ", " my ", " cat"];
let a=arr.join(" ")
console.log(a)
//task no 13
let arr = ["keyboard","mouse","printer","monitor"];
arr.forEach(element => {
      document.write(`Out: ${element} <br>`) 
});
//task no 14
let arr = ["keyboard","mouse","printer","monitor"];
for (let index = (arr.length-1); index >=0 ; index--) {
    const element = arr[index];
    document.write(`Out: ${element} <br>`) 
    }
//task no 15
let arr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony"," Haier"];
let html;
let main=document.getElementById("main");
let str=document.createElement("select")
arr.forEach(element => {
    html+=` <option>${element}</option>`
    
});
str.innerHTML=html
main.append(str)
/* Chapter 14-16 End */


/* Chapter 17-29 Start */
//taskno1
let arr=[[],[]]
console.log(arr)
//taskno.2
let arr1=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
console.log(arr1)
//task no.3
let num=[1,2,3,4,5,6,7,8,9,10];
num.forEach(element => {
   document.write(`${element}<br>`) 
});
//task no.4
tableOf=prompt("Enter  number to show its multiplictaion<br>");
lengthOf=prompt("Enter length multiplictaion table<br>");
document.write(`Multiplication Table of ${tableOf}`)
document.write(`Length ${lengthOf}`)
for (let index = 0; index < lengthOf; index++) {
    document.write(`${tableOf}x${index}=${tableOf*index}<br>`)
    
}
//taskno5.
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
fruits.forEach(element => {
    document.write(`${element}<br>`)
});

fruits.forEach((element,index) => {
    document.write(`Element at index ${index} is ${element}<br>`)
});
//taskno5.
let counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
document.write(`Counting:`)
document.write(`${counting}<br>`)
let countingReverse=counting.reverse()
document.write(`Reverse:`)
document.write(`${countingReverse}<br>`)
let countingEven=[];
let counting1=[0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16,17,18,19,20];
document.write(`Even:`)
for (let index = 0; index < counting1.length; index++) {
    if(counting1[index] % 2 ==0 ){
     countingEven.push( counting1[index]);}}
document.write(countingEven," ")
let countingOdd=[];
document.write(`<br>Odd:`)
for (let index = 0; index < counting1.length; index++) {
    if(counting1[index] % 2 !=0 ){
     countingOdd.push( counting1[index]);    }}
document.write(countingOdd)

let countingSeries=[];
let counting2=[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16,17,18,19,20];
document.write(`<br>Series:`)
for (let index = 0; index < counting1.length; index++) {
    if(counting1[index] % 2 ==0 ){
     countingSeries.push( counting1[index]+"K");
 }    }
 document.write(countingSeries)

 //taskno.7
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
userInput=prompt("Welcome to ABC Bakery What do you want to order sir/ma'am");
let count=0
A.forEach((element,index) => {
    if(userInput==element){
        document.write(`Cookie is avaible at ${index} in our bakery`)
        count++   }});
if(count==0){
    document.write("Sorry not avaible")}

    
//taskno.8
let A = [24, 53, 78, 91, 12];
let largest=0
A.forEach(element => {
    if(largest < element){
        largest=element
    }});
document.write("The largest number is "+largest)
//taskno.9
let A = [24, 53, 78, 91, 12];
let smallest=A[0];
A.forEach((element,index) => {
    if(smallest > element){
        smallest=element
    }});
document.write("The Smallest number is "+smallest)
//task no.10
for (let index = 5; index <=100;index+=5) {
    document.write(`${index} ,`)
     
 }
 
/* Chapter 17-29 End */
