/**
 * homeController -> that functions will be projected on routes,
 *  wich will be called.
 */

/**
 * [Index method]
 * @param  {[HTTP request]} req
 * @param  {[HTTP response]} res
 * @return {[JSON]}     [will be return an answer to the client
 *                       in JSON format with my data]
 */
module.exports.index = (req, res) => {
	//do something
	// for example answer a Hello World!
	
	res.status(200).send({ msg: 'Hello World' });
}