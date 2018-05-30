"use strict";

// The /edit-profile route displays a editProfile component where the user can update their name, contact info and bio.

const editProfile = {
  template: `
  <form class="editProfileForm" ng-submit="$ctrl.submitInfo($ctrl.user);">
    <h2>Use the form below to update your profile.</h2>
    <label>Name</label>
    <input class="input" type="text" ng-model="$ctrl.user.name">
    <label>Contact</label>
    <input class="input" type="text" ng-model="$ctrl.user.contact">
    <label>Bio</label>
    <textarea id="bioInput" class="input" type="text" ng-model="$ctrl.user.bio"></textarea>
    <button class="button "ng-click="ng-submit">Update</button>
  </form>
  `,

  controller: ["ProfileService", function(ProfileService){
    const vm = this;
    vm.user= angular.copy(ProfileService.getUserProfile());
    vm.submitInfo = (user) =>{
      console.log(user);
      
      ProfileService.setUserProfile(user);
    }
  }]
};



angular
  .module("app")
  .component("editProfile", editProfile);