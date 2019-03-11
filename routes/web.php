<?php
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', "page@index");
Route::post('/login',"auth@login");
Route::post('/register',"auth@register");
Route::get('/logout',"page@logout");
Route::middleware("authcheck")->group(function (){
    //dashboard tampilan
    Route::get('/home',"page@home");
    //dokter
    Route::get('/dokter',"page@dokter");
    Route::get('table/dokter',"table@dokter");
    Route::get('/tambah/dokter',"page@tambahdokter");
    Route::get('/edit/dokter/{id}',"page@editdokter");
    //user
    Route::get('/user',"page@user");
    //obat
    Route::get('table/obat',"table@obat");
    Route::post('/editobat',"crud@editobat");
    Route::post('/tambahobat',"crud@tambahobat");
    Route::post('/delobat',"crud@hapusobat");
    Route::get('/obat',"page@obat");
    Route::get('/tambah/obat',"page@tambahobat");
    Route::get('/edit/obat/{id}',"page@editobat");
});
