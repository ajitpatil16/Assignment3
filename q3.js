var request =  new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload = () =>{

    var result = request.response;
    var responseObj = JSON.parse(result);

    for(let i =0;i< responseObj.length;i++)
    {
        console.log(responseObj[i].name);
        console.log(responseObj[i].region);
        console.log(responseObj[i].subregion); 
        console.log(responseObj[i].population);   
    }

}