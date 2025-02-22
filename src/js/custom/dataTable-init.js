$(document).ready(function(){
    $('#dataTable').DataTable();
    $('.dataTable_length').remove();

    $('<a class="btn btn-info mr-2 mb-4 " href="patients/create-patient.php"><i class="ti-user"></i> Add Employee</a>')
    .insertBefore('div.dataTables_length');
});
