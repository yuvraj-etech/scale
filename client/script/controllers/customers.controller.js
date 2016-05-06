import moment from 'moment';
import { Controller } from '../entities';

export default class customersController extends Controller {
  constructor() {
    super(...arguments);
  }
  checkIn(){
  	this.geoService.geoNearBy();
  }
}

customersController.$inject = ['$scope', 'geoService'];