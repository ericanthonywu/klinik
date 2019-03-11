$(document).ready(function () {
    let base_url = window.location.origin+"/";
    let host = window.location.host;

    $('#tblobat').DataTable( {
        dom: "<'row'<'col-sm-6 text-left'f><'col-sm-6 text-right'B>>\n\t\t\t<'row'<'col-sm-12'tr>>\n\t\t\t<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>", // horizobtal scrollable datatable
        responsive: true,
        ajax: `${base_url}table/obat`,
        columns: [
            {
                title:"ID",
                "data": "id",
                "sClass":"text-center",
            },
            {
                title:"Nama",
                "data": "nama",
                "sClass":"text-center",
            },
            {
                title:"Jenis",
                "data": "jenis",
                "sClass":"text-center",
            },
            {
                title:"BPJS",
                "data": "BPJS",
                "sClass":"text-center",
            },
            {
                title:"Harga",
                "data": "harga",
                "sClass":"text-center",
            },
            {
                "data": "id",
                "sClass":"text-center",
                render: (t,e,a)=>{
                    return `
                    <button class="btn btn-primary btn-outline-primary btn-edit" data-id="${t}" data-table="obat">Edit</button>
                    &nbsp;
                    <button class="btn btn-danger btn-outline-danger btn-del" data-id="${t}" data-table="obat">Delete</button>
                    
                    `;
                }
            },
        ],
        language: {
            "aria": {
                "sortAscending": ": activate to sort column ascending",
                "sortDescending": ": activate to sort column descending"
            },
            "emptyTable": "Data Obat tidak tersedia",
            "info": "Menampilkan _START_ sampai _END_ dari _TOTAL_ data",
            "infoEmpty": "Data tidak ditemukan",
            "infoFiltered": "(Terfilter _TOTAL_ data dari _MAX_ total data)",
            "lengthMenu": "_MENU_ data",
            "search": "Cari:",
            "zeroRecords": "Tidak ada data yang cocok"
        },
        colReorder: {
            realtime: false
        },
        buttons:[
            { extend: 'print', className: 'btn m-btn--square  m-btn m-btn--gradient-from-primary m-btn--gradient-to-info' },
            { extend: 'copyHtml5', className: 'btn m-btn--square  m-btn m-btn--gradient-from-success m-btn--gradient-to-accent' },
            { extend: 'excelHtml5', className: 'btn m-btn--square  m-btn m-btn--gradient-from-danger m-btn--gradient-to-warning' },
            { extend: 'csvHtml5', className: 'btn m-btn--square  m-btn m-btn--gradient-from-warning m-btn--gradient-to-danger' },
            { extend: 'pdfHtml5', className: 'btn m-btn--square  m-btn m-btn--gradient-from-info m-btn--gradient-to-accent' }
        ],
        "order": [
            [0, 'asc']
        ],
        "lengthMenu": [
            [10, 25, 50, -1],
            [10, 25, 50, "All"] // change per page values here
        ],
        // set the initial value
        "pageLength": 10
    });
});