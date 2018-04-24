function addItem() {
  if ($('input:text').val().length == 0) {
    $('#todo').effect("shake", {
      distance: 5,
      times: 2
    }, 400);
  } else {
    var text = $('#new-todo').val();
    $('#to-do-list').append('<li><input type="checkbox" class="done" required/>' + text + '<button class="delete btn"> X </button></li>');
    $('#new-todo').val('');
  }
}

function deleteItem() {
  $(this).parent().remove();
}
$(document).ready(function() {
  $('body').fadeIn(1000);
  $('#add').on('click', addItem);
  $(document).on('click', '.delete', deleteItem);
});
