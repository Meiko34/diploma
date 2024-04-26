<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client_address extends Model
{
    use HasFactory;
    public function users()
{
    return $this->belongsTo(User::class);
}
public function addresses()
{
    return $this->belongsTo(Address::class);
}
}
