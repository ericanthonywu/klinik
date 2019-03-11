$(document).ready(function () {
    let base_url = window.location.origin+"/";
    $(document).on('click', '.btn-edit', function () {
        let table = $(this).data('table'),
            id = $(this).data('id');
        location.href = `${base_url}edit/${table}/${id}`
    });
    $(document).on('click', '.btn-del', function () {
        let table = $(this).data('table'),
            id = $(this).data('id');
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'POST',
            data: {
                id: id
            },
            url: `${base_url}del${table}`,
            success: res => {
                $('#tblobat').DataTable().ajax.reload();
            }
        })
    });
})