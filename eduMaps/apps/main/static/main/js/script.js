let map = L.map('map',{
    zoomControl: false
}).setView([43.2700, 45.6930], 8.75)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map)

let customIcon = L.icon({
   iconUrl: 'static/main/img/marker.svg',
   shadowUrl: 'static/main/img/marker_shadow.png',
   iconSize: [50, 50],
   shadowSize: [23, 23],
   shadowAnchor: [0, 5],
})
let markerOptions = {
   title: "Школа",
   clickable: true,
   draggable: false,
   icon: customIcon
}

let markerGroup = L.layerGroup()

markerGroup.addTo(map)

function clearMarkers() {
    markerGroup.clearLayers()
}

function addMarkers(educations){
    clearMarkers()

    for(let i = 0; i < educations.length; i++){

       try{
        let x = educations.at(i).fields.location.split(' ')[0]
        let y = educations.at(i).fields.location.split(' ')[1]

        new L.Marker([parseFloat(x), parseFloat(y)], markerOptions)
            .bindPopup(L.popup({maxWidth: 300})
                .setContent(
                    setMarkerContent(educations[i])
                )).addTo(markerGroup)

        } catch (e) {

        }
    }
    if(markerGroup.getLayers().length > 0)
        map.fitBounds(L.latLngBounds(markerGroup.getLayers().map((marker) => marker.getLatLng())), {padding:[100,100]})
}

const setMarkerContent = (edu) => {

    let directorName = ''
    if(edu.fields.director_name !== null){
        directorName = `<p><b>Директор: </b>${edu.fields.director_name}</p>`
    }

    let address = ''
    if(edu.fields.address !== null){
        address = `<p><b>Адресс: </b>${edu.fields.address}</p>`
    }

    let contacts = ''
    if (edu.fields.contacts !== null){
        contacts = `<p><b>Контакты: </b>${edu.fields.contacts}</p>`
    }

    let email = ''
    if (edu.fields.email !== null){
        email = `<p><b>Электронная почта: </b>${edu.fields.email}</p>`
    }

    let webSiteUrl = ''
    if (edu.fields.web_site_url != null){
        webSiteUrl = `<hr><p><b>Адрес сайта: </b><a href="${edu.fields.web_site_url}">${edu.fields.title}</a></p>`
    }

    let content = `
        <div class="text-left">
          <h3>${edu.fields.title}</h3>
          <p class="ml-2">${edu.fields.description}<p>
          ${directorName}
          ${address}
          ${contacts}
          ${email}
          ${webSiteUrl}
      </div>
    `

    return content
}