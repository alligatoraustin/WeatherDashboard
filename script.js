var search = document.getElementById('search');

function searchFormSubmit(event) {
    event.preventDefault();
// Setting up the api to the input field to link to eachother
    var searchInput = document.querySelector('#cityName').value;
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + searchInput + '&appid=61e1dd191b30451b9f53e11391f29bbf', {
        cache: 'reload',
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            document.write(JSON.stringify(data))
        });

}

search.addEventListener('submit', searchFormSubmit);