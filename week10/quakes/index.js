import { getJSON, getLocation } from './utilities.js';

const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

function getLocationURL() {
    return new Promise(function(resolve, reject) {
      getLocation.then(function (data) {
        var url = baseUrl + "&latitude=" + data.coords.latitude + "&longitude=" + data.coords.longitude + "&maxradiuskm=100";
        resolve(url);
      });
    });
}

console.log(getLocationURL());

