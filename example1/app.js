
new Vue({
el: '#app',
data: {
  firstName: 'Nathan',
  lastName: 'Stanford',
  job: 'Programmer',
  website: 'http://www.google.com',
},
methods: {
  greet: function(message) {
    return 'Hello ' + message;
  }
}


});
