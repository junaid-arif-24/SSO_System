const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../models/User'); 


  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT,
        clientSecret: process.env.GITHUB_SECRET,
        callbackURL: `${process.env.BACKEND_URL}/auth/github/callback`,
      },
      async function (accessToken, refreshToken, profile, done) {
        console.log('Github Profile:', profile);
        try {
         
          let user = await User.findOne({ githubId: profile.id });
  
          if (user) {
            return done(null, user);
          }
  
         
          user = new User({
            githubId: profile.id,
            fullname: profile.displayName,
            email: profile.username,
            profileImage: profile.photos[0].value,
          });
  
          await user.save();
  
          return done(null, user);
        } catch (error) {
          return done(error, null);
        }
      }
    )
  );
  
 
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(async function (id, done) {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });
  