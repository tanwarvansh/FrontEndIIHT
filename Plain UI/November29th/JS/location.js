navigator.geolocation.getCurrentPosition(updateLocation,handleLocation);

function updateLocation(position){

    var lattitude=position.coords.latitude;
    var longitude=position.coords.longitude;
    var accuracy= position.coords.accuracy;

    document.getElementById('lat').innerHTML=lattitude;
    document.getElementById('lon').innerHTML=longitude;
    
    document.getElementById('acc').innerHTML=accuracy;

}

function handleLocation(err){
    switch(err.code){
        case 0:
            updateStatus('there was error bwhile retriving location');
            break;
        case 1:
            updateStatus('the user prevented this page form retreving location');
            break;
        case 2:
            updateStatus('the browser was unable in retreiving his/her location');
            break;  
        case 3:
            updateStatus('time out prevented this page from retreiving his/her location');
            break;   
    }
}