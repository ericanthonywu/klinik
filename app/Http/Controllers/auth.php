<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class auth extends Controller
{
    function login(Request $r){
        $user = new User();
        $where = $user::where('username',$r->username)->first();
        $check= \Hash::check($r->password,$where->password);
        if($check){
            \Session::put('user',$r->username);
            return "";
        }else{
            return response()->json("Password salah");
        }

    }
    function register(Request $r){
        $user = new User();
        $user->username = $r->username;
        $user->password = bcrypt($r->password);
        $user->created_at = date('Y-m-d');
        $user->save();
        return redirect()->back();
    }
}
