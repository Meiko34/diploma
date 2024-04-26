<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Basket extends Model
{
    use HasFactory;

public function products()
{
    return $this->belongsTo(Product::class);
}
    
public function orders()
{
    return $this->belongsTo(Order::class);
}

}
