'use strict'
//Bearer Strategy
const BearerStrategy = require('passport-azure-ad').BearerStrategy;
const tenant = 'habitsdev';
// Configure Azure AD B2C strategy
const b2cStrategy = new BearerStrategy({
    identityMetadata: `https://${tenant}.com/${tenant}.onmicrosoft.com/B2C_1A_signup_signin/v2.0/.well-known/openid-configuration`,
    clientID: '3693d17c-54fb-4997-aecc-542a493798a9',
    policyName: 'B2C_1A_signup_signin',
    isB2C: true,
    validateIssuer: false,
    passReqToCallback: false
  }, (token, done) => {
    // Verify and extract user information from the token
    // Implement your own logic to validate the user token
    console.log(token)
    const user = {
      id: token.oid,
      displayName: token.name,
      email: token.emails[0]
    };
     console.log(user)
    return done(null, user);
  });


  module.exports = b2cStrategy;