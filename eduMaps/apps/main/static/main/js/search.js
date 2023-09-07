let searchInput = document.getElementById('search-input')

searchInput.addEventListener('input', (e) => {
    if(searchInput.value.length > 5){
        sendSearchParam(searchInput.value)
    }
})

let searchIcon = document.querySelector('.search-icon')

searchIcon.addEventListener('onclick', performSearch())

function sendSearchParam(searchInput){
    let http = new XMLHttpRequest();
    http.open('GET', `search/?search=${searchInput}`, true)
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            let educations = JSON.parse(this.responseText)
            addMarkers(educations)
        }
    }
    http.send();
}

function performSearch(){

    let http = new XMLHttpRequest();
    http.open('GET', `search/?search=${searchInput.value}`, true)
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            let educations = JSON.parse(this.responseText)
            addMarkers(educations)
        }
    }
    http.send();
}