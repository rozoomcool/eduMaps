// let regs = ["grozny", "achkhoy", "argun", "grozny_reg", "kurchaloy", "naur", "nozhay", "sern", "sharoy", "shatoy", "shelk", "terek", "urus", "vedeno", "gums", "itum", "shali"]

let regsMap = new Map([
    ['GRZR', 'grozny_reg'],
    ['URUS', 'urus'],
    ['VEDN', 'vedeno'],
    ['ITUM', 'itum'],
    ['SHAL', 'shali'],
    ['SHAT', 'shatoy'],
    ['SHAR', 'sharoy'],
    ['KURC', 'kurchaloy'],
    ['SHEL', 'shelk'],
    ['SERN', 'sern'],
    ['ACHM', 'achkhoy'],
    ['NTRK', 'terek'],
    ['NAUR', 'naur'],
    ['GUMS', 'gums'],
    ['NOJU', 'nozhay'],
    ['GROZ', 'grozny'],
    ['ARGN', 'argun']
])

async function initMap(){

    await fetch('static/main/geojson/chechnya.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: { fillColor: 'white', fillOpacity: 1, color: 'teal', weight: 4, fill: true, boxShadow: 'rgb(114, 114, 114) 0px 0px 10px 5px inset'}
        }).addTo(map);
    })

    for (let [key, value] of regsMap) {
        let url = `static/main/geojson/${value}.geojson`

        fetch(url)
        .then(response => response.json())
        .then(data => {
         // Создание GeoJSON слоя и добавление на карту
         let poly = L.geoJSON(data, {
           style: { fillColor: '#1364AD', fillOpacity: 0.2, weight: 2 }
         }).addTo(map);

         poly.on('mouseover', () => {
            poly.setStyle({fillOpacity: 0.5})
         })
         poly.on('mouseout', () => {
            poly.setStyle({fillOpacity: 0.2})
         })
         poly.on('click', () => {
            findEduInRegion(key)
         })

        })
    }
}

initMap()