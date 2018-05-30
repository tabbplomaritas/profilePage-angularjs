"use strict";

// The /edit-profile route displays a editProfile component where the user can update their name, contact info and bio.

const editProfile = {
  template: `
  <form class="editProfileForm" ng-submit="$ctrl.submitInfo($ctrl.user);">
    <h2>Use the form below to update your profile.</h2>
    <label>Name</label>
    <input type="text" ng-model="$ctrl.user.name" ng-value="$.ctrl.user.name">
    <label>Contact</label>
    <input type="text" placeholder="Your email" ng-model="$ctrl.user.contact">
    <label>Bio</label>
    <input type="text" placeholder="Tell me about yourself..." ng-model="$ctrl.user.bio">
    <button class="button "ng-click="ng-submit">Update</button>
  
  </form>
  `,

  controller: ["ProfileService", function(ProfileService){
    const vm = this;
    vm.submitInfo = (user) =>{
      console.log(user);
      
      ProfileService.setUserProfile(user);
    }

  }]


};

angular
  .module("app")
  .component("editProfile", editProfile);