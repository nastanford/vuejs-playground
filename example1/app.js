
new Vue({
el: '#app',
data: {
  firstName: 'Nathan',
  lastName: 'Stanford',
  job: 'Programmer',
  website: 'http://www.google.com',
  websiteTag: '<a href="http://www.google.com">Google Home</a>',
},
methods: {
  greet: function(message) {
    return 'Hello ' + message;
  }
}


});
