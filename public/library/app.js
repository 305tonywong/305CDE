var myapp = angular.module('myapp', ["ui.router"])
  myapp.config(function($stateProvider){
  $stateProvider
      .state('index', {
          url: "",
          views: {
              "viewA": {
                  templateUrl: "/main"
              }
          }
      })
      .state('whyquit', {
          url: "/whyquit",
          views: {
              "viewA": {
                  templateUrl: "/why"
              }

          }
      })
      .state('tips', {
          url: "/tips",
          views: {
              "viewA": {
                  templateUrl: "/tip"
              }
          }
      })
      .state('books', {
          url: "/bks",
          views: {
              "viewA": {
                  templateUrl: "/books"
              }

          }
      })
      .state('member', {
          url: "/members",
          views: {
              "viewA": {
                  templateUrl: "/member"
              }

          }
      })
      .state('contact', {
          url: "/contact",
          views: {
              "viewA": {
                  templateUrl: "/contact"
              }

          }
      })
      .state('doc', {
          url: "/docmentation",
          views: {
              "viewA": {
                  templateUrl: "/doc"
              }

          }
      })
      .state('api', {
          url: "/apiendpoint",
          views: {
              "viewA": {
                  templateUrl: "/apiendpoints"
              }

          }
      })
  })
