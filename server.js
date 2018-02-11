'use strict';

/**
 * Know the Knowledge API,
 *
 * Whatever that is mobile or desktop, just do it.
 * Share your knowledge for every person knows.
 * That will be improve our wisdom and master class.
 *
 * @author Vítor Roque <github.com/roqueando>
 *         		and
 *         Christopher Ribeiro <github.com/christopy> 
 *
 * Created in 10 February of 2018. Copyright Adventure Coders 2018;
 */


// Some requires

/**
 * [require the Express lib for handling servers]
 * @type {[module]}
 */
const express = require('express');

/**
 * [pass the constant express to a variable, turns into a application]
 * @type {[module]}
 */
const app = express();

/**
 * [require the body-parser lib, allow to handle with POST and GET
 * 	HTTP verbs, allowed to use JSON bodies.]
 * 	
 * @type {[module]}
 */
const bp = require('body-parser');

/**
 * [require the PATH module to handle with path of folders]
 * @type {[module]}
 */
const path = require('path');


/**
 * [require the FileSystem module to handle with open/closing files and
 *  modificate it.]
 * @type {[type]}
 */
const fs = require('fs');
							
// set what I want to use in my app

app.use(bp.json()); // allow the body-parser to use JSON bodies.

app.use(bp.urlencoded({ extended: false })); // turn the url encoded to does not extends.

// require the routes file, and pass the app to him.
// allowed to use any methods of app object.
require('./routes/web')(app);


/* 
* Turn the server on and up to the 8080's port.
* the callback goes show me in the console of my terminal server
* that string below.
*/
app.listen(8080, () => {
	console.log('[SERVER ONLINE: on port 8080]');
});