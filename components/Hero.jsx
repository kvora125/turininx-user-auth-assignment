import React from 'react';

import Logo from './Logo';

const Hero = () => (
  <div className="my-0 mx-auto max-w-[768px] my-5 text-center" data-testid="hero">
    <div className='flex flex-row col-gap-10'>
      <Logo /> 
      <img className='logo mx-2'  />
    </div>
    <h1 className="mb-4" data-testid="hero-title">
      Keval's Auth0 based SignUp/SignIn User Authentication Project.
    </h1>

    <p className="lead" data-testid="hero-lead">
      This is a application that demonstrates an authentication flow for a NextJS Web App. 
      It demonstrates Google, Facebook and Github IDP login and normal email-password login.
      It secures all passwordless logins via MFA and all password based logins in risky situations via MFA too. 
      Since the authentication is cookie based sessions are persistent. Link to my resume in navbar is login protected.
    </p>
  </div>
);

export default Hero;
