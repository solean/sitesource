Posts = new Mongo.Collection("posts");

if (Meteor.isClient) {
  Session.setDefault('aboutme', true);
  Session.setDefault('resume', false);
  Session.setDefault('blog', false);

  Template.body.helpers({
    posts: function () {
      return Posts.find({});
    },

    aboutme: function () {
      return Session.get('aboutme');
    },

    resume: function () {
      return Session.get('resume');
    },

    blog: function () {
      return Session.get('blog');
    }
  });

  Template.body.events({
    'click #name': function () {
      Session.set('aboutme', true);
      Session.set('resume', false);
      Session.set('blog', false);

      $(".content").width("16em");
    },

    'click #projects': function () {
      window.location = 'https://github.com/solean';
    },

    'click #resume': function () {
      Session.set('resume', true);
      Session.set('aboutme', false);
      Session.set('blog', false);

      $(".content").css("width", "32em");
    },

    'click #blog': function () {
      Session.set('blog', true);
      Session.set('resume', false);
      Session.set('aboutme', false);

      $(".content").css("width", "32em");
    },

    'click #email-button': function() {
      window.location = 'mailto:chrisjschnabel@gmail.com';
    },

    'click #pdf-button': function () {
      window.location = 'https://www.dropbox.com/s/ymrbnrdwcgu2c27/resume.pdf?dl=0';
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
