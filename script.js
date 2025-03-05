$(() => {
  $('.add').click(() => $('#t-form').toggleClass('hidden'));
  function updateUI() {
    if ($('#t-name').val() === '' || $('#t-amount').val() === '' || $('#t-type').val() === '') {
      $('.warning').html('* Complete all fields! *');
    } else {
      var dataColor = $('#t-type').val() === 'income'? "green":"red";
      var n = $('#t-type').val() === 'income'?'&plus;':"&hyphen;";
      var liLabel = $(`
        <div class="fw-bold bg-white my-2 d-flex justify-content-between slideIn" style="border-left: 10px solid ${dataColor}; border-top-left-radius: 15px; border-bottom-left-radius: 15px;">
          <section class="p-2">
            <h6>${$('#t-name').val()}<h6>
            <h5 style="color:${dataColor}">${n}$${$('#t-amount').val()}</h5>
          </section>
        </div>
      `);
      var delBtn = $(`<button class="delete-btn btn rounded-0 fw-bold fs-3 float-end text-light" style="background-color:${dataColor}">&times;</button>`);
      delBtn.click(()=> liLabel.remove());
      liLabel.append(delBtn);
      $('#transaction-list').prepend(liLabel);
      if ($('#t-type').val() === 'income') {
        $('#inc').html((Number($('#inc').html()) + Number($('#t-amount').val())).toFixed(2));
        $('#bal').html((Number($('#bal').html()) + Number($('#t-amount').val())).toFixed(2));
      }
      else if ($('#t-type').val() === 'expense') {
        $('#exp').html((Number($('#exp').html()) + Number($('#t-amount').val())).toFixed(2));
        $('#bal').html((Number($('#bal').html()) - Number($('#t-amount').val())).toFixed(2));
      }
      $(".i").val("");
    }
  }
  $('#update').click(updateUI);
});