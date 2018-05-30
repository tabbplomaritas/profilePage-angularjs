"use strict";

//The /profile route displays a userProfile component, which includes name, contact info, and mini bio

const userProfile = {
  template: `
 <header>
  <img class="profilePic" src="images/grant.png">
 </header>
 <section class="userInfoDisplay">
  <h1>{{ $ctrl.userInfo.name }}</h1>
  <p class="userContact">{{ $ctrl.userInfo.contact }}</p>
  <p class="userBio"> {{ $ctrl.userInfo.bio }}</p>
  <a class="button" href="#!/editProfile">Update</a>

  </section>
  `,

  controller: ["ProfileService", function(ProfileService) {
    const vm = this;
    vm.userInfo = ProfileService.getUserProfile();
    console.log(vm.userInfo);

  }]
}


angular
  .module("app")
  .component("userProfile", userProfile);