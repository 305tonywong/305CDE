module.exports = {
	server: {
    host: '127.0.0.1',
    port: process.env.PORT || 3000
  },
  mongo: {
  	host: '127.0.0.1',
    port: 27017,
    db: 'QuitSmoking',
    username: 'tonywong',
    password: '123456',
    url : 'mongodb://<user>:<password>@<url>'
  }
};
