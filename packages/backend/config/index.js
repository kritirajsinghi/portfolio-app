let config = {
  server: {
    port: process.env.PORT || 3001,
    tls: {
      enabled: false,
    },
  },
  mailOptions: {
    adminMail: 'kritiraj.fullstack@gmail.com',
    clientSubject: 'Thanks for Reaching Out',
    adminSubject: 'Request for Collaboration',
    adminName: 'Kriti Raj Singhi',
  },
};

module.exports = config;
