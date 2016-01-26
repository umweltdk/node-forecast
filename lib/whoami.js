'use strict';

var utils = require('./utils');

module.exports = Whoami;

function Whoami(api) {
	return function whoami(callback) {
		api._request('/whoami', function(err, json) {
			callback(err, json.current_user);
		});
	}
};
