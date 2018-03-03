/* /Users/smcueto/Documents/GitHub-Projects/customer-app/public/js/main.js */
$(document).ready(function(){
  $('.deleteUser').on('click', deleteUser);
});
function deleteUser(){
  var confirmation = confirm('Are You Sure?');
  if(confirmation){
    $.ajax({
      type:'DELETE',
      url: '/users/delete/'+$(this).data('id')
    }).done(function(response){

    });
    window.location.replace('/');
  } else {
    return false;
  }
}
