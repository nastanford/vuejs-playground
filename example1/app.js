
new Vue({
el: '#app',
data: {
  firstName: 'Nathan',
  lastName: 'Stanford',
  job: 'Programmer',
},
methods: {
  greet: function(message) {
    return 'Hello ' + message;
  }
}


});
