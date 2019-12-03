/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'https://coffee-shop-backend.herokuapp.com/api/v1', // the running FLASK api server url
  auth0: {
    url: 'dev-ubz8mhel.auth0.com', // the auth0 domain prefix
    audience: 'CoffeeShop', // the audience set for the auth0 app
    clientId: 'zgGYFz221Iv52Unnsi0wJ5zxlEwnME1b', // the client id generated for the auth0 app
    callbackURL: 'https://coffee-shop-front-end.herokuapp.com', // the base url of the running ionic application.
  }
};
