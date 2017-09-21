'use strict';

//loads mimetype files
exports.public = {
  handler: {
    directory: {
        path: './public',
        listing: false,
        index: false
    }
}
};

exports.main = {
          handler: function (request, reply) {
          return reply.view('main');
          }
        };

exports.why = {
                  handler: function (request, reply) {
                  return reply.view('why');
                  }
                };

exports.tip = {
                handler: function (request, reply) {
                return reply.view('tip');
                }
                                };

exports.books = {
                handler: function (request, reply) {
                return reply.view('books');
                  }
                                                };
exports.booksmember = {
                handler: function (request, reply) {
                  return reply.view('booksmember');
                  }
                                              };

exports.contact = {
                    handler: function (request, reply) {
                  return reply.view('contact');
                                }
                            };

//the following handles routing to static pages
exports.home = {
      handler: function (request, reply) {
      return reply.view('home');
      }
    };

exports.member = {
              handler: function (request, reply) {
              return reply.view('memberzone');
              }
            };

exports.contact = {
                  handler: function (request, reply) {
                  return reply.view('contact');
                  }
                };

exports.doc = {
                  handler: function (request, reply) {
                  return reply.view('documentation');
                  }
              };

exports.apiendpoints = {
                  handler: function (request, reply) {
                  return reply.view('apiendpoints');
                  }
              };

exports.map = {
                                handler:  (request, reply) => {
                                                  return reply.view('map');
                                                  }
                                                };
exports.map1 = {
                                handler:  (request, reply) => {
                                                  return reply.view('map1');
                                                }
                                                };
exports.map2 = {
                                handler:  (request, reply) => {
                                                  return reply.view('map2');
                                }
                  };
exports.map3 = {
                              handler:  (request, reply) => {
                                                  return reply.view('map3');
                  }
                  };
exports.map4 = {
                            handler:  (request, reply) => {
                                                  return reply.view('map4');
                  }
                  };
exports.map5 = {
                            handler:  (request, reply) => {
                                                  return reply.view('map5');
                  }
                  };
exports.map6 = {
                            handler:  (request, reply) => {
                                                  return reply.view('map6');
                  }
                  };
