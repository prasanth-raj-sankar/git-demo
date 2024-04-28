var request = new XMLHttpRequest()

request.open("GET","https://restcountries.com/v3.1/all")
request.send()

request.onload = function(){

    //here the conversion of string to object

    var res = JSON.parse(request.response)
    console.log(res);
//print the details of all countries come under the Asia Region


var data = res.filter((ele)=>ele.region == "Asia");
console.log(data);

//print the details of all Countries whose Population is grater than 100000

var spr = res.filter((raj)=>raj.population>100000)
console.log(spr);



//print the contry name of all countries whose region belongs to europe

var cname = res.filter((ele)=>ele.region == "Europe")
var coutry_names = cname.map((ele)=>ele.name.common);
console.log(coutry_names); 


//find the sum of total population of all the countries that belongs to asia region

var casia = res.filter((ele)=>ele.region == "Asia");
var cpopu = casia.reduce((acc,cv)=>acc+cv.population,0)
console.log(cpopu)

// var res = arr.reduce((acc,cv)=>acc+cv,0);
// console.log(res);

}