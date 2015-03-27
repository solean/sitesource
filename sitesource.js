Posts = new Mongo.Collection("posts");

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  Session.setDefault('aboutme', true);
  Session.setDefault('resume', false);
  Session.setDefault('blog', false);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

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
    'click .resume': function () {
      Session.set('resume', true);
      Session.set('aboutme', false);
      Session.set('blog', false);
    },

    'click .blog': function () {
      Session.set('blog', true);
      Session.set('resume', false);
      Session.set('aboutme', false);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
