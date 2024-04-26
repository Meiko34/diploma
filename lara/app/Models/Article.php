<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;
     protected $fillable = [
        'id',
        'name',
        'description',
        'short_description',
        'img',
        'created_at',
            ];
}
