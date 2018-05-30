"use strict";

function ProfileService($location){
  let userInfo = {
    name: "Grant Chirpus",
    contact: "grant@grandcircus.co",
    bio: "I am pretty cool. I do a great job. I like to play Tetris. I am pretty ok at AngularJS."
  };

  const setUserProfile = (user) => {
      userInfo = user;
      $location.path("/profile")
  }

  const getUserProfile = () =>{
    return userInfo;
  }

  return{
    setUserProfile,
    getUserProfile
  };
}


angular
  .module("app")
  .factory("ProfileService", ProfileService);