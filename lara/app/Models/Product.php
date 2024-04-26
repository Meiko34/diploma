<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;


protected $fillable = ['name', 'country', 'description', 'cooking_method', 'img', 'price', 'variety', 'collections'];

    public function variety()
{
    return $this->belongsTo(Variety::class);
}
}
