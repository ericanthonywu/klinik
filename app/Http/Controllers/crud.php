<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\obat;
use App\User;
use App\dokter;
use App\keluar;
use App\masuk;
use App\nota;
Use App\pasien;
Use App\jadwal;
Use App\rawat_inap;
Use App\rekam;
use App\stok;

class crud extends Controller
{
    function tambahobat(Request $r){
        $obat = new obat();
        $obat->nama = $r->nama;
        $obat->jenis = $r->jenisobat;
        $obat->BPJS = $r->bpjs;
        $obat->harga = $r->harga;
        $obat->save();
        return "";
    }
    function editobat(Request $r){
        $obat = new obat();
        $obat::where('id',$r->id)->first();
        $obat->nama = $r->nama;
        $obat->jenis = $r->jenisobat;
        $obat->BPJS = $r->BPJS;
        $obat->harga = $r->harga;
        $obat->save();
        return "";
    }
    function hapusobat(Request $r){
        $obat = new obat();
        $obat::where('id',$r->id)->delete();
        return "";
    }
}
