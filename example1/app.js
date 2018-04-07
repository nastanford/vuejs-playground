
new Vue({
el: '#app',
data: {
  firstName: 'Nathan',
  lastName: 'Stanford',
  job: 'Programmer',
  message: 'World!'
},
methods: {
  greet: function() {
    return 'Hello ' + this.message;
  }
}


});
