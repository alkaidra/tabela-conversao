$('#calculate').on('click', function(e) {
    e.preventDefault();

    $('#mm').val(($('#pol').val() * 25.4).toFixed(2));
});