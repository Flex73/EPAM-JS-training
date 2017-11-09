fetch('http://api.openweathermap.org/data/2.5/weather?q=London' + "&units=imperial" + "&APPID=718250c6c94b7aee1910513c161f893b")
    .then(checkStatus)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("There was an error", error);
    });

function checkStatus(response) {
    if(response.ok) {
        return response;
    }

    let error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
} 