import { Config } from './entities';

export default class RoutesConfig extends Config {
  configure() {
    this.$stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'client/templates/login.html',
        controller: 'loginController as login'
      })
      .state('customers', {
        url: '/customers',
        templateUrl: 'client/templates/customers.html',
        controller: 'customersController as customer'
      });

    this.$urlRouterProvider.otherwise('/login');
  }
}

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];