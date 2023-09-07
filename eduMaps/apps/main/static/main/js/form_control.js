function sendRegionParam(region){
       let http = new XMLHttpRequest();
    http.open('GET', `/?region=${region}`, true)
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            let educations = JSON.parse(this.responseText)
            addMarkers(educations)
        }
    }
    http.send();
}

function findEduInRegion(param){
    sendRegionParam(param)
}

function GROZ(){
    sendRegionParam('GROZ')
}
function URUS(){
    sendRegionParam('URUS')
}
function VEDN(){
    sendRegionParam('VEDN')
}
function GRZR(){
    sendRegionParam('GRZR')
}
function ITUM(){
    sendRegionParam('ITUM')
}
function SHAL(){
    sendRegionParam('SHAL')
}
function SHAT(){
    sendRegionParam('SHAT')
}
function SHAR(){
    sendRegionParam('SHAR')
}
function KURC(){
    sendRegionParam('KURC')
}
function SHEL(){
    sendRegionParam('SHEL')
}
function SERN(){
    sendRegionParam('SERN')
}
function ACHM(){
    sendRegionParam('ACHM')
}
function NTRK(){
    sendRegionParam('NTRK')
}
function NAUR(){
    sendRegionParam('NAUR')
}
function GUMS(){
    sendRegionParam('GUMS')
}
function NOJU(){
    sendRegionParam('NOJU')
}
function ARGN(){
    sendRegionParam('ARGN')
}


