// const withAuth = (req, res, next) => {
//     if (!req.session.logged_in) {
//       res.redirect('/login');
//     } else {
//       next();
//     }
//   };
  
//   module.exports = withAuth;


// fake placeholder middleware
const withAuth = (req, res, next) => {
    next();
};

module.exports = withAuth;