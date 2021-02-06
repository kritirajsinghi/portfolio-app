let config = {
	server:{
		port:3001,
	},
	MONGO: {
		MONGO_URL: (process.env.MONGO_URL || 'mongodb://localhost:27017/portfolio')
	},
	mailOptions:{
		login:{
			'user':'',
            'pass':""
		},
		adminMail:"kritiraj.fullstack@gmail.com",
		clientSubject:"Thanks for Reaching Out",
		adminSubject:"Request for Collaboration",
		adminName:"Kriti Raj Singhi"
	}
}

module.exports = config;