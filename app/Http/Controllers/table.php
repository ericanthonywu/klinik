<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\obat;

class table extends Controller
{
    function obat(Request $r){
        $obat = new obat();
        return response()->json(["data"=>$obat::all()]);
    }
}
