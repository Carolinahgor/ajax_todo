// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function() {
// console.log("the document is ready");
// console.dir($('form'));
$('form').on('ajax:complete', function(event, xhr, status, error) {
// $(this).append(xhr.responseText)
console.dir(xhr.responseText);
// window.location.reload();
$('body').append(xhr.responseText);
$('#task_name').val("")

});
});
