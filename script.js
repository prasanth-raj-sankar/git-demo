//XML-HTTP request(XHR)
//they are used to interact with the server via api


//step 01:
//create a XHR object
var request = new XMLHttpRequest()

//step 02:
//opening a request
//this method tells us that which Http method as well as which API
request.open("GET","https://restcountries.com/v3.1/all")


//step 03:
//kickstart the HTTP Operation

request.send()


//step 04:
//once the data has been successfully receives from the server
//if the status code of the server is 200
//then we need to process the data


//there the JSON.parse converts the JSON string into array of object

request.onload = function(){

    //here the conversion of string to object

    var res = JSON.parse(request.response)
    console.log(res);

//print the regions of all 250 coutries
  
for(var i=0;i<res.length;i++)
{
  console.log(res[i].region)
}


//print the name of array to the object the method of arrray of object 
for(var i=0;i<res.length;i++)
{
  console.log(res[i].name.common,res[i].name.official)
}



for(i=0;i<res.length;i++)
{
  console.log(res[i].car.side)
}

}


//write a javascript fuction to print the below numbers
//input:
//console.log(range(-4,7))
//expected output:
//[-4,-3,-2,-1,0,1,2,3,4,5,6,7]
function range(start,end){
  var temp = [];
  for(var i=start;i<=end;i++){
   temp.push(i); 
  }
  
  return temp;
  
  
}
console.log(range(-4,7))



//anonymous function print the odd number the give array
var res = function(arr){

  var temp = [];
  for(var i=0;i<arr.length;i++){

    if(arr[i]%2!=0){
        temp.push(arr[i])
  }
}
  return temp;
  }
  console.log(res([12,13,14,15,16,17,18]));
  