$(document).ready(function () {
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
})