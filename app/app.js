!function(){"use strict";angular.module("app",["ngAnimate","angular-carousel","ui.router","uiGmapgoogle-maps","firebase","app.layout","app.home","app.login","app.spots","app.tickets","app.account","app.hosts","app.core"])}(),function(){"use strict";angular.module("app.core",[])}(),function(){"use strict";function t(t,e){function n(){}var o=this;o.me=t,n()}angular.module("app").controller("AccountController",t),t.$inject=["currentAuth","user"]}(),function(){"use strict";angular.module("app.account",[])}(),function(){"use strict";function t(t){t.state("account",{url:"/account",controller:"AccountController",controllerAs:"account",templateUrl:"app/account/account.html",resolve:{currentAuth:["auth",function(t){return t.$requireAuth()}]}})}angular.module("app.account").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,e,n){function o(){var o=new Firebase(n.serverUrl+"accounts");return{getAll:function(){return t(o)},add:function(e){return t(o).$add(e)},save:function(t){var n=o.child(t.uid),r=e(n);return r=angular.merge(r,t),r.$save()}}}return new o}angular.module("app.core").factory("account",t),t.$inject=["$firebaseArray","$firebaseObject","config"]}(),function(){"use strict";function t(t,e){var n=new Firebase(e.serverUrl);return t(n)}angular.module("app.core").factory("auth",t),t.$inject=["$firebaseAuth","config"]}(),function(){"use strict";function t(){var t=function(){return{serverUrl:"https://bandally.firebaseio.com/"}};return new t}angular.module("app.core").factory("config",t),t.$inject=[]}(),function(){"use strict";function t(t){t.otherwise("/")}angular.module("app.core").config(t),t.$inject=["$urlRouterProvider"]}(),function(){"use strict";function t(t,e){t.$on("$stateChangeSuccess",function(e,n,o,r,u,a){t.pageName=n.controllerAs}),t.$on("$stateChangeError",function(t,n,o,r,u,a){"AUTH_REQUIRED"===a&&e.go("login")})}angular.module("app.core").run(t),t.$inject=["$rootScope","$state"]}(),function(){"use strict";function t(t,e,n){function o(){var o=new Firebase(n.serverUrl+"photos");return{getAll:function(){return t(o)},add:function(e){return t(o).$add(e)},save:function(t){var n=o.child(t.uid);e(n);return newPhoto=angular.merge(newPhoto,t),newPhoto.$save()}}}return new o}angular.module("app.core").factory("photo",t),t.$inject=["$firebaseArray","$firebaseObject","config"]}(),function(){"use strict";function t(t,e){var n=new Firebase(e.serverUrl+"tickets");return t(n)}angular.module("app.core").factory("ticket",t),t.$inject=["$firebaseArray","config"]}(),function(){"use strict";function t(t,e,n){function o(){var o=new Firebase(n.serverUrl+"users");return{getAll:function(){return t(o)},add:function(e){return t(o).$add(e)},save:function(t){var n=o.child(t.name),r=e(n);return r=angular.merge(r,t),r.$save()}}}return new o}angular.module("app.core").factory("user",t),t.$inject=["$firebaseArray","$firebaseObject","config"]}(),function(){"use strict";function t(t){function e(){}var n=this;n.me=t,e()}angular.module("app").controller("HomeController",t),t.$inject=["currentAuth"]}(),function(){"use strict";angular.module("app.home",[])}(),function(){"use strict";function t(t){t.state("home",{url:"/",controller:"HomeController",controllerAs:"home",templateUrl:"app/home/home.html",resolve:{currentAuth:["auth",function(t){return t.$requireAuth()}]}})}angular.module("app.home").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,e){function n(){o.images=e.getAll()}var o=this;o.me=t,n()}angular.module("app").controller("HostsController",t),t.$inject=["currentAuth","photo"]}(),function(){"use strict";angular.module("app.hosts",[])}(),function(){"use strict";function t(t){t.state("hosts",{url:"/:userId",controller:"HostsController",controllerAs:"hosts",templateUrl:"app/hosts/hosts.html",resolve:{currentAuth:["auth",function(t){return t.$requireAuth()}]}})}angular.module("app.hosts").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(){return{templateUrl:"app/layout/header.html",scope:{},controller:e,controllerAs:"header",bindToController:!0}}function e(t,e){function n(){e.$onAuth(function(t){r.auth=t})}function o(){confirm("ログアウトします")&&(e.$unauth(),t.go("login"))}var r=this;r.auth={},r.logout=o,n()}angular.module("app").directive("header",t),t.$inject=[],e.$inject=["$state","auth"]}(),function(){"use strict";angular.module("app.layout",[])}(),function(){"use strict";function t(t,e,n,o,r){function u(){o&&t.go("home")}function a(){var t=["public_profile","email"];n.$authWithOAuthPopup("facebook",{scope:t.join()}).then(c)["catch"](i)}function c(t){console.log("Logged in as:",t.uid),g=t,e.save(g).then(l,s)}function i(t){console.log("Authentication failed:",t)}function l(t){var e=t.key(),n={name:g.facebook.email.split("@")[0],fullName:g.facebook.displayName,email:g.facebook.email,gender:g.facebook.cachedUserProfile.gender,imageUrl:g.facebook.profileImageURL,accountIds:[e],languageIds:null,message:null};r.save(n).then(p,f)}function s(t){console.log(t)}function p(e){t.go("home")}function f(t){console.log(t)}function d(){var t={email:h.mailAddress,password:h.password};n.$createUser(t).then(function(e){return console.log("User "+e.uid+" created successfully!"),n.$authWithPassword(t)}).then(function(t){console.log("Logged in as:",t.uid)})["catch"](function(t){console.error("Error: ",t)})}var g={},h=this;h.fbLogin=a,h.mailLogin=d,h.users=r.getAll(),u()}angular.module("app").controller("LoginController",t),t.$inject=["$state","account","auth","currentAuth","user"]}(),function(){"use strict";angular.module("app.login",[])}(),function(){"use strict";function t(t){t.state("login",{url:"/login",controller:"LoginController",controllerAs:"login",templateUrl:"app/login/login.html",resolve:{currentAuth:["auth",function(t){return t.$waitForAuth()}]}})}angular.module("app.login").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t){function e(){n.map={center:{latitude:35.457624,longitude:139.633337},zoom:16},n.markers=[{id:1,latitude:35.459923,longitude:139.63529,name:"パシフィコ横浜",photos:[{url:"https://upload.wikimedia.org/wikipedia/commons/c/c1/MinatoMirai21.jpg"}]},{id:2,latitude:35.457511,longitude:139.632704,name:"みなとみらい駅",photos:[{url:"https://upload.wikimedia.org/wikipedia/commons/6/6d/Pacifico_Yokohama_2012.JPG"}]},{id:"-K2wcXJywEnxfqTPLZ9J",name:"カップヌードルミュージアム 安藤百福発明記念館",latitude:35.4554834,longitude:139.6366649,photos:[{id:"PHOTO_ID",url:"http://robotic-person.c.blog.so-net.ne.jp/_images/blog/_40d/robotic-person/DSCF0079-20111014a.jpg?c=a1"}]}]}var n=this;n.me=t,n.map={},n.markers=[],e()}angular.module("app").controller("SpotsController",t),t.$inject=["currentAuth"]}(),function(){"use strict";angular.module("app.spots",[])}(),function(){"use strict";function t(t){t.state("spots",{url:"/spots",controller:"SpotsController",controllerAs:"spots",templateUrl:"app/spots/spots.html",resolve:{currentAuth:["auth",function(t){return t.$requireAuth()}]}})}angular.module("app.spots").config(t),t.$inject=["$stateProvider"]}(),function(){"use strict";function t(t,e){function n(){}function o(){e.$add({departureDate:r.departureDate,arrivedDate:r.arrivedDate,destination:r.destination,languages:r.languages,message:r.message}).then(function(){t.go("tickets")})}var r=this;r.add=o,n()}angular.module("app").controller("TicketsAddController",t),t.$inject=["$state","ticket"]}(),function(){"use strict";function t(t){function e(){n.tickets=t}var n=this;n.tickets=[],e()}angular.module("app").controller("TicketsController",t),t.$inject=["ticket"]}(),function(){"use strict";angular.module("app.tickets",[])}(),function(){"use strict";function t(t){t.state("tickets",{url:"/tickets",controller:"TicketsController",controllerAs:"tickets",templateUrl:"app/tickets/tickets.html",resolve:{currentAuth:["auth",function(t){return t.$requireAuth()}]}}).state("tickets.add",{url:"/add",views:{"@":{controller:"TicketsAddController",controllerAs:"ticketsAdd",templateUrl:"app/tickets/tickets-add.html"}},resolve:{currentAuth:["auth",function(t){return t.$requireAuth()}]}})}angular.module("app.tickets").config(t),t.$inject=["$stateProvider"]}();
//# sourceMappingURL=app.js.map