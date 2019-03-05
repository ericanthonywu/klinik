<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class obat extends Model
{
    protected $table = 'obats';
    protected $fillable = ['id','nama','jenis','BPJS','harga','created_at','updated_at'];

    public $timestamps = false;
}
