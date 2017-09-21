var Pages = require('./pages');
var Static = require('./static');
var Authentication = require('./authentication');

/**
 * Contains the list of all routes, i.e. methods, paths and the config functions
 * that take care of the actions
 */
exports.endpoints = [

//routes to dynamic pages
	//loads different search pages for visitors and members respectively
		{ method: 'GET',  path: '/books', 					 config: Pages.books	},

	//for members login
	{ method: 'GET',   path: '/login',          							config: Pages.login},
	{ method: 'POST',   path: '/login',          config: Authentication.login },

	//for members registration
	{ method: 'GET',   path: '/register',      							  config: Pages.register 	},
	{ method: 'POST',   path: '/register',       config: Authentication.register },

	//for email verfication
	{ method: 'GET',   path: '/verify/{vericode*}',        config: Pages.verify 		},
	{ method: 'POST',   path: '/verify/verify',   config: Authentication.Verification },

	//loads when user logged in successfully
	{ method: 'GET',   path: '/success', 											config: Pages.secret   	},

//retrieve items from fav list
	{ method: 'GET',  path: '/editfavlist/', 					 config: Authentication.editfavlist 	},
	//add/remove items in fav list
	{ method: 'PUT',   path: '/removefavlist/{book_id*}',  config: Authentication.removefav },
	{ method: 'PUT',   path: '/addfavlist/{book_id*}',  config: Authentication.addfav },

	{ method: 'GET',    path: '/logout',         							config: Authentication.logout },


	//routes to static pages
	{ method: 'GET',    path: '/',               	 config: Pages.index  	},
	{ method: 'GET',  path: '/public/{param*}',    config: Static.public 	},
	{ method: 'GET',  path: '/member', 						 config: Static.member 	},
	{ method: 'GET',  path: '/doc', 					 		 config: Static.doc },
	{ method: 'GET',  path: '/apiendpoints',			 config: Static.apiendpoints },
	{ method: 'GET',  path: '/main', 					 config: Static.main	},
	{ method: 'GET',  path: '/why', 					 config: Static.why	},
	{ method: 'GET',  path: '/tip', 					 config: Static.tip  },
	{ method: 'GET',  path: '/contact', 				 config: Static.contact},
];
