/**
 * There is the Routes (for webs).
 */


/**
 * [Calls the homeController methods to use into routes request and responses]
 * @type {[module]}
 */
var homeController = require('../controllers/homeController');


/**
 * [All that routes will be there.]
 * @param  {[module]} app [express application module]
 * @return {[HTTP request/response]}     [Will be return some request or response of each them]
 */
module.exports = (app) => {

	/**
	 * GET request in '/', and calls the index method from homeController.
	 * @return {[JSON]}
	 */
	app.get('/', homeController.index);

}