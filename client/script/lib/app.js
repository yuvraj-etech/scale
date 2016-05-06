// Libs
import angular from 'angular';
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';

// Modules
import Definer from '../definer';
import loginController from '../controllers/login.controller';
import customersController from '../controllers/customers.controller';
import geoService from '../services/geo.service';
import CalendarFilter from '../filters/calendar.filter';
import RoutesConfig from '../routes';

// App
const App = angular.module('scale', [
  'angular-meteor',
  'ionic'
]);

new Definer(App)
  .define(loginController)
  .define(customersController)
  .define(geoService)
  .define(CalendarFilter)
  .define(RoutesConfig);

// Startup
if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
}
else {
  angular.element(document).ready(onReady);
}

function onReady() {
  angular.bootstrap(document, ['scale']);
}