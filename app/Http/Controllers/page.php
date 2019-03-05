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

class page extends Controller
{
    function index(){
        if(\Session::get('user')){
            return redirect('/home');
        }else {
            return view('welcome');
        }
    }
    function logout(){
        \Session::forget('user');
        return redirect('/');
    }
    function home(){
        return view('index');
    }
    function dokter(){
        return view('page/dokter/dokter');
    }
    function user(){
        return view('page/user/user');
    }
    function tambahuser(){
        return view('page/user/tambah');
    }
    function edituser($id){
        $user = new User();
        $data = $user::where("id",$id)->first();
        return view('page/user/edit',[
            "data"=>$data::all(),
            "id"=>$id
        ]);
    }
    function obat(){
        $obat = new obat();
        return view('page/obat/obat',[
            "data"=>$obat::all()
        ]);
    }
    function tambahobat(){
        $obat = new obat();
        return view("page/obat/tambah",[
            "data"=>$obat::all()
        ]);
    }
    function editobat($id){
        $obat = new obat();
//        $data = ;
        return view('page/obat/edit',[
            "datas"=>$obat::where("id",$id)->first()
        ]);
    }
}
