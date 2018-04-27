// Calls function to add items
function callItem() {
  return addItem();
};
// Binds enter key
$('#new-todo').bind("enterKey", function(e) {
  return addItem();
});

function addItem() {
  if ($('input:text').val().length === 0) {
    $('#todo').effect("shake", {
      distance: 5,
      times: 2
    }, 400);
  } else {
    var text = $('#new-todo').val();
    $('#to-do-list').append('<li><input type="checkbox" class="done" required/>' + text + '<button class="delete btn"> X </button></li>');
    $('#new-todo').val('');
  }
};
// Delete item
function deleteItem() {
  $(this).parent().remove();
}
$(document).ready(function() {
  $('body').fadeIn(1000);
  $('#add').on('click', addItem);
  $(document).on('click', '.delete', deleteItem);
});
// Trigger for when Enter is pressed
$('#new-todo').keyup(function(e) {
  if (e.keyCode === 13) {
    $(this).trigger("enterKey");
  }
});
