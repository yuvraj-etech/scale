import { Service } from '../entities';

export default class geoService extends Service {
 constructor() {
   super(...arguments);
   this.count = 0;
 }
      gpsStatus(){
        CheckGPS.check(function () {
                   console.log('gps enable');
               },
                       function () {
                           console.log('gps disable');
                       });
       };
       onSuccess(position) {
        console.log(position);
       };
       onError(posError) {
        console.log(posError);
        q.reject(err);
       };
       geoNearBy() {
        var q = $q.defer();
        navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError, {enableHighAccuracy: true, timeout: 5000}); 
        return q.promise;
       };      
}

geoService.$inject = ['$rootScope', '$q'];
