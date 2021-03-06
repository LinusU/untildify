'use strict';
const osHomedir = require('os-homedir');
const home = osHomedir();

module.exports = str => {
	if (typeof str !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof str}`);
	}

	return home ? str.replace(/^~($|\/|\\)/, `${home}$1`) : str;
};
