$(document).ready(function () {
    let base_url = window.location.origin+"/";
    let host = window.location.host;

    $('#ftambahobat').submit(function (e) {
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
    $('#feditobat').submit(function (e) {
        e.preventDefault()
        let data = $(this).serialize()
        $.ajax({
            type: 'POST',
            url: `${base_url}editobat`,
            data: data,
            success: res=>{
                location.href = `${base_url}obat`;
            },
            error: xhr =>{
                console.log(xhr.responseText);
            }
        })
    })
});