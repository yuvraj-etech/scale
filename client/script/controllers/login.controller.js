import moment from 'moment';
import { Controller } from '../entities';

export default class loginController extends Controller {
  constructor() {
    super(...arguments);
  }
  signIn(){
  	console.log('hi');
  	this.$state.go('customers');
  }
}

loginController.$inject = ['$scope', '$state'];