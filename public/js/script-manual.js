$(document).ready(function () {
    $("img").prop("draggable", false);
    $("#preventdef").click(function (e) {
        e.preventDefault();
    });
    $('.number').bind('keypress', function (event) {
        var regex = new RegExp("^[0-9]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    });
    $('.alphanumeric').keypress(function (event) {
        var regex = new RegExp("^[a-zA-Z0-9]$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    });

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validatenohp(nomor) {
        var re = /^08[0-9]{9,}$/;
        return re.test(nomor)
    }

    $('.valuevalidate').bind('keyup keypress', function validatevalue() {
        var max = $(this).data('max-val');
        var min = $(this).data('min-val');
        var alertt = $(this).attr('allow-alert');
        var value = $(this).val();
        if (value > max) {
            if (alertt === "true") {
                alert('angka tidak boleh lebih dari ' + max);
            }
            $(this).val(max);
        } else if (value < min) {
            if (alertt === "true") {
                alert('angka tidak boleh kurang dari ' + min);
            }
            $(this).val(min);
        }
    });

    $('.lengthvalidate').bind('keyup keypress keydown', function validatelength() {
        var max = $(this).data('max-length');
        var value = $(this).val();
        var alertt = $(this).attr('allow-alert');
        if (value.length > max) {
            if (alertt === "true") {
                alert('jumlah huruf tidak boleh lebih dari ' + max);
            }
            $(this).val(value.substring(0, max));
        }
    });

    function numberWithCommas(n) {
        var parts = n.toString().split(".");
        return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
    }

    function animasinomor(tipe, selector, angkaawal, angkaakhir, durasi, komanomor) {
        if (tipe === "id") {
            selector = $('#' + selector);
        } else if (tipe === "class") {
            selector = $('.' + selector);
        }
        selector.each(function () {
            $(this).prop('Counter', angkaawal).animate({
                Counter: angkaakhir
            }, {
                duration: durasi,
                easing: 'swing',
                step: function (now) {
                    if (komanomor === "yes") {
                        $(this).text(numberWithCommas(Math.ceil(now)));
                    } else {
                        $(this).text(Math.ceil(now));
                    }
                }
            });
        });
    }

    $('.ribuan').keyup(function (event) {
        if (event.which >= 37 && event.which <= 40) return;
        // format number
        $(this).val(function (index, value) {
            return value
                .replace(/\D/g, "")
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                ;
        });
        var id = $(this).data("id-selector");
        var classs = $(this).data("class-selector");
        var value = $(this).val();
        var noCommas = value.replace(/,/g, "");
        $('#' + id).val(noCommas);
        $('.' + classs).val(noCommas);
    });
    $('.validate-input').bind("blur keyup", function validate_input() {
        var value = $(this).val();
        var regexdata = $(this).data("regex");
        var regex;
        if (regexdata == null) {
            regex = "";
        } else {
            regex = regexdata.toLowerCase();
        }
        var bungkus = $(this).data("div");
        if (bungkus == null) {
            bungkus = "div";
        }
        var label = $(this).closest(bungkus).find("label");
        var errormsg = $(this).closest(bungkus).find("span");
        switch (regex) {
            case "email":
                if (value && validateEmail(value)) {
                    $(this).removeClass("is-invalid");
                    $(this).addClass("is-valid");
                    label.removeClass("text-danger");
                    label.addClass("text-success");
                    errormsg.html("");
                } else if (value && !validateEmail(value)) {
                    label.removeClass("text-success");
                    $(this).removeClass("is-valid");
                    if (!$(this).hasClass("is-invalid")) {
                        $(this).addClass("is-invalid");
                    }
                    label.addClass("text-danger");
                    errormsg.addClass("text-danger");
                    errormsg.removeClass("text-success");
                    errormsg.html("Email tidak valid");
                } else {
                    label.removeClass("text-success");
                    $(this).removeClass("is-valid");
                    if (!$(this).hasClass("is-invalid")) {
                        $(this).addClass("is-invalid");
                    }
                    label.addClass("text-danger");
                    errormsg.addClass("text-danger");
                    errormsg.removeClass("text-success");
                    errormsg.html("Field Tidak Boleh Kosong");
                }
                break;
            case "nohp":
                if (value && validatenohp(value)) {
                    $(this).removeClass("is-invalid");
                    $(this).addClass("is-valid");
                    label.removeClass("text-danger");
                    label.addClass("text-success");
                    errormsg.html("");
                } else if (value && !validatenohp(value)) {
                    label.removeClass("text-success");
                    $(this).removeClass("is-valid");
                    if (!$(this).hasClass("is-invalid")) {
                        $(this).addClass("is-invalid");
                    }
                    label.addClass("text-danger");
                    errormsg.addClass("text-danger");
                    errormsg.removeClass("text-success");
                    errormsg.html("No hp tidak valid");
                } else {
                    label.removeClass("text-success");
                    $(this).removeClass("is-valid");
                    if (!$(this).hasClass("is-invalid")) {
                        $(this).addClass("is-invalid");
                    }
                    label.addClass("text-danger");
                    errormsg.addClass("text-danger");
                    errormsg.removeClass("text-success");
                    errormsg.html("Field Tidak Boleh Kosong");
                }
                break;
            default:
                if (value) {
                    $(this).removeClass("is-invalid");
                    $(this).addClass("is-valid");
                    label.removeClass("text-danger");
                    label.addClass("text-success");
                    errormsg.html("");
                } else {
                    label.removeClass("text-success");
                    $(this).removeClass("is-valid");
                    $(this).addClass("is-invalid");
                    label.addClass("text-danger");
                    errormsg.addClass("text-danger");
                    errormsg.removeClass("text-success");
                    errormsg.html("Field Tidak Boleh Kosong");
                }
                break;
        }
    });
    //---------------------------------------------------------
    let base_url = window.location.origin+"/";
    let host = window.location.host;

    var tblobat = {
        init: () => {
            var t, e;
            t = $(".tblobat").mDatatable({
                data: {
                    type: "remote",
                    source: `${base_url}table/obat`,
                    pageSize: 10
                },
                layout: {theme: "default", class: "", scroll: !1, footer: !1},
                sortable: !0,
                pagination: !0,
                search: {input: $("#generalSearch")},
                columns: [{
                    field: "id",
                    title: "#",
                    width: 50,
                    sortable: !1,
                    selector: !1,
                    textAlign: "center"
                }, {
                    field: "nama",
                    title: "Nama Obat"
                }, {
                    field: "jenis",
                    title: "Jenis Obat",
                }, {
                    field: "BPJS",
                    title: "BPJS",
                    width: 110
                }, {
                    field: "harga",
                    title: "Harga Obat",
                    responsive: {visible: "lg"}
                }, {
                    field: "Actions",
                    title: "Actions",
                    overflow: "visible",
                    template: (t, e, a) => {
                        return `\t\t\t\t\t\t
                        <button class="btn btn-brand m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill btn-edit" data-id="${t.id}" data-table="obat">
							<i class="fa flaticon-list"></i>
						</button>
                        <button class="btn btn-danger m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill btn-del" data-id="${t.id}" data-table="obat">
							<i class="fa flaticon-delete"></i>
						</button>\`
                        `;
                    }
                }]
            }), e = t.getDataSourceQuery(),
                $("#m_form_status").on("change", e => {
                    t.search($(this).val(), "Status")
                }).val(void 0 !== e.Status ? e.Status : ""),
                // $("#m_form_type").on("change", (e) => {
                //     t.search($(this).val(), "Type")
                // }).val(void 0 !== e.Type ? e.Type : ""),
                $("#m_form_status, #m_form_type").selectpicker()
        }
    };
    jQuery(document).ready(() => {
        //datatables init
        tblobat.init();
        $(document).on('click','.btn-edit', function () {
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
                   $('.tblobat').dataTable().ajax.reload();
                }
            })
        });
    });
    $(document).ready(() => {
        $(".slcbpjs").select2({
            width: '100%',
            placeholder: 'Pilih BPJS',
            language: {
                noResults: function () {
                    return 'Tidak ada BPJS yang tersedia'
                },
            },
            escapeMarkup: function (markup) {
                return markup
            },
        });
        $(".slcjenisobat").select2({
            width: '100%',
            placeholder: 'Pilih Jenis Obat',
            language: {
                noResults: function () {
                    return 'Tidak ada jenis obat yang tersedia'
                },
            },
            escapeMarkup: function (markup) {
                return markup
            },
        });
        $('#ftambahobat').on('submit', function (e) {
            e.preventDefault();
            let data = $(this).serialize();
            $.ajax({
                type: 'POST',
                url: `${base_url}tambahobat`,
                data: data,
                success: res => {
                    location.href = `${base_url}obat`;
                }
            })
        })
    });
});
//== Class definition

// var FormControls = ()=> {
//     //== Private functions
//
//     var tmbhobat = ()=> {
//         $( "#m_form_tambah_obat" ).validate({
//             // define validation rules
//             rules: {
//                 nama: {
//                     required: true
//                 },
//                 jenisobat: {
//                     required: true
//                 },
//                 bpjs:{
//                     required: true
//                 },
//                 harga: {
//                     required: true,
//                     digits: true
//                 }
//             },
//
//             //display error alert on form submit
//             invalidHandler: function(event, validator) {
//                 mUtil.scrollTo("m_form_2", -200)
//
//                 /*
//                 swal({
//                     "title": "",
//                     "text": "There are some errors in your submission. Please correct them.",
//                     "type": "error",
//                     "confirmButtonClass": "btn btn-secondary m-btn m-btn--wide"
//                 })
//                 */
//             },
//
//             submitHandler: function (form) {
//                 //form[0].submit() // submit the form
//             }
//         })
//     }
//
//     return {
//         // public functions
//         init: () => {
//             tmbhobat()
//         }
//     }
// }
//
// jQuery(document).ready(function() {
//     FormControls.init()
// })