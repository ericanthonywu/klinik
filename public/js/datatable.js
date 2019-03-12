$(document).ready(function () {
    let base_url = window.location.origin + "/";
    let host = window.location.host;
    $('.btn-data').tooltip();
    var tblobat = $('#tblobat').mDatatable({
        // datasource definition
        data: {
            type: 'remote',
            source: `${base_url}table/obat`,
            pageSize: 10,
        },

        // layout definition
        layout: {
            theme: 'default', // datatable theme
            class: '', // custom wrapper class
            scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
            footer: false // display/hide footer
        },

        // column sorting
        sortable: true,

        pagination: true,

        search: {
            input: $('#generalSearch')
        },

        // columns definition
        columns: [{
            field: "id",
            title: "#",
            width: 50,
            sortable: false,
            selector: false,
            textAlign: 'center'
        }, {
            field: "nama",
            title: "Nama"
        }, {
            field: "jenis",
            title: "Jenis"
        }, {
            field: "BPJS",
            title: "BPJS",
        }, {
            field: "harga",
            title: "Harga",
            template: (t, e, a) => {
                return `Rp. ${t.harga}`
            }
        }, {
            field: "Actions",
            width: 110,
            title: "Actions",
            sortable: false,
            overflow: 'visible',
            template: function (t, e, a) {
                return `
                        <button class="btn btn-circle btn-warning btn-xs btn-data btn-edit" data-id="${t.id}"
                         data-table="obat" data-toggle="tooltip" data-placement="top" title="Perbarui Data">
                            <i class="flaticon-notes"></i>
                        </button>
                          &nbsp;
                        <button type="button" class="btn btn-circle btn-danger btn-xs btn-data btn-del"
                         data-id="${t.id}" data-table="obat" data-toggle="tooltip" data-placement="top" title="Hapus Data">
                            <i class="fa fa-trash"></i>
                        </button>
                        `;
            }
        }]
    });
    $(document).on('click', '.btn-edit', function () {
        let table = $(this).data('table'),
            id = $(this).data('id');
        location.href = `${base_url}edit/${table}/${id}`
    });
    $(document).on('click', '.btn-del', function () {
        tblobat.reload();
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
                tblobat.reload();
            }
        })
    });

    // $('#tblobat').DataTable( {
    //     dom: "<'row'<'col-sm-6 text-left'f><'col-sm-6 text-right'B>>\n\t\t\t<'row'<'col-sm-12'tr>>\n\t\t\t<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>", // horizobtal scrollable datatable
    //     responsive: true,
    //     ajax: `${base_url}table/obat`,
    //     'processing': true,
    //     'language': {
    //         // 'loadingRecords': '&nbsp;',
    //         // 'processing': '<div class="m-loader m-loader--brand"></div>'
    //         processing:'Tunggu lok',
    //     },
    //     columns: [
    //         {
    //             title:"ID",
    //             "data": "id",
    //             "sClass":"text-center",
    //         },
    //         {
    //             title:"Nama",
    //             "data": "nama",
    //             "sClass":"text-center",
    //         },
    //         {
    //             title:"Jenis",
    //             "data": "jenis",
    //             "sClass":"text-center",
    //         },
    //         {
    //             title:"BPJS",
    //             "data": "BPJS",
    //             "sClass":"text-center",
    //         },
    //         {
    //             title:"Harga",
    //             "data": "harga",
    //             "sClass":"text-center",
    //             render:(t,e,a)=>{
    //                 return `Rp. ${numberWithCommas(t)}`
    //             }
    //         },
    //         {
    //             "data": "id",
    //             "sClass":"text-center",
    //             render: (t,e,a)=>{
    //                 $('.btn-data').tooltip();
    //                 return `
    //                 <button class="btn btn-circle btn-warning btn-xs btn-data btn-edit" data-id="${t}"
    //                 data-table="obat" data-toggle="tooltip" data-placement="top" title="Perbarui Data">
    //                     <i class="flaticon-notes"></i>
    //                   </button>
    //                   &nbsp;
    //                   <button type="button" class="btn btn-circle btn-danger btn-xs btn-data btn-del"
    //                   data-id="${t}" data-table="obat" data-toggle="tooltip" data-placement="top" title="Hapus Data">
    //                     <i class="fa fa-trash"></i>
    //                   </button>
    //                 `;
    //             }
    //         },
    //     ],
    //     language: {
    //         "aria": {
    //             "sortAscending": ": activate to sort column ascending",
    //             "sortDescending": ": activate to sort column descending"
    //         },
    //         "emptyTable": "Data Obat tidak tersedia",
    //         "info": "Menampilkan _START_ sampai _END_ dari _TOTAL_ data",
    //         "infoEmpty": "Data tidak ditemukan",
    //         "infoFiltered": "(Terfilter _TOTAL_ data dari _MAX_ total data)",
    //         "lengthMenu": "_MENU_ data",
    //         "search": "Cari:",
    //         "zeroRecords": "Tidak ada data yang cocok"
    //     },
    //     colReorder: {
    //         realtime: false
    //     },
    //     buttons:[
    //         { extend: 'print', className: 'btn m-btn--square  m-btn m-btn--gradient-from-primary m-btn--gradient-to-info' },
    //         { extend: 'copyHtml5', className: 'btn m-btn--square  m-btn m-btn--gradient-from-success m-btn--gradient-to-accent' },
    //         { extend: 'excelHtml5', className: 'btn m-btn--square  m-btn m-btn--gradient-from-danger m-btn--gradient-to-warning' },
    //         { extend: 'csvHtml5', className: 'btn m-btn--square  m-btn m-btn--gradient-from-warning m-btn--gradient-to-danger' },
    //         { extend: 'pdfHtml5', className: 'btn m-btn--square  m-btn m-btn--gradient-from-info m-btn--gradient-to-accent' }
    //     ],
    //     "order": [
    //         [0, 'asc']
    //     ],
    //     "lengthMenu": [
    //         [10, 25, 50, -1],
    //         [10, 25, 50, "All"] // change per page values here
    //     ],
    //     // set the initial value
    //     "pageLength": 10
    // });
});