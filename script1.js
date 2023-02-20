var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result1=JSON.parse(request.response);
    // console.log(result);
    for(i=0;i<result1.length;i++){
console.log(result1[i].name,result1[i].region,result1[i].subregion,result1[i].population);
    }
}