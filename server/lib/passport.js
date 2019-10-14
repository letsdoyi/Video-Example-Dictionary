const googleCredentials = require('../config/google.json');
const User = require('../models/User');

module.exports = function(app) {
  const passport = require('passport');
  const GoogleStrategy = require('passport-google-oauth')
    .OAuth2Strategy;

  app.use(passport.initialize());
  app.use(passport.session());
  console.log('passport.session 실행중');

  passport.serializeUser(function(user, done) {
    console.log('serializeUser', user);
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      console.log('deserializeUser', user);
      done(err, user);
    });
  });

  passport.use(
    new GoogleStrategy(
      {
        clientID: googleCredentials.web.client_id,
        clientSecret: googleCredentials.web.client_secret,
        callbackURL: googleCredentials.web.redirect_uris[0],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const user = await User.findOrCreate({
            google_id: profile.id,
            name: profile.displayName,
            profile_image_url: profile.photos[0].value,
          });
          done(null, user.doc);
        } catch (err) {
          done(err);
        }
        return passport;
      },
    ),
  );
};

// profile =
// { id: '110467171611726438198',
//   displayName: 'Doyi Kim',
//   name: { familyName: 'Kim', givenName: 'Doyi' },
//   photos:
//    [ { value:
//         'https://lh6.googleusercontent.com/-Ewlh2CY16so/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdfHSXYRSzfjV_L1m-HDRNqDLJWLw/photo.jpg' } ],
//   provider: 'google',
//   _raw:
//    '{\n  "sub": "110467171611726438198",\n  "name": "Doyi Kim",\n  "given_name": "Doyi",\n  "family_name": "Kim",\n  "picture": "https://lh6.googleusercontent.com/-Ewlh2CY16so/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdfHSXYRSzfjV_L1m-HDRNqDLJWLw/photo.jpg",\n  "locale": "en"\n}',
//   _json:
//    { sub: '110467171611726438198',
//      name: 'Doyi Kim',
//      given_name: 'Doyi',
//      family_name: 'Kim',
//      picture:
//       'https://lh6.googleusercontent.com/-Ewlh2CY16so/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdfHSXYRSzfjV_L1m-HDRNqDLJWLw/photo.jpg',
//      locale: 'en' } }
