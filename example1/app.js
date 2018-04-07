
new Vue({
el: '#app',
data: {
  firstName: 'Nathan',
  lastName: 'Stanford',
  job: 'Programmer',
  message: 'world'
},
methods: {
  greet: function() {
    return 'Hello ' + this.message;
  }
}


});
