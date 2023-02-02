document.getElementById('getApi').addEventListener('click',callAPI);
///const apiKey='4da8a3d6fc1e4366beb160634232501'
function callAPI(){
    var movieName=document.getElementById('movieName').value;
    //const apiUrl=`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`
    const apiUrl=`https://localhost:3000/${movieName}`


     alert(movieName);

    alert(apiUrl);
fetch(apiUrl)
.then((res)=>res.json())
.then((data)=>{
    let output=`
        <div>
            <p style="color:black">${data.name}</p>
            <p> Release Year:${data.year} </p>
            <p> IMDb Rating:  ${data.IMDb} </p>
            <p> Director: ${data.Director} </p>
            <p> The Stars are:  ${data.Stars} </p>
            
        </div>
        `;
        //console.log(data);

    document.getElementById('output').innerHTML=output;
    }).catch((err)=>console.log(err))
}









