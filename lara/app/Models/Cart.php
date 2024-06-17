<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;
      protected $fillable = ['user_id']; // Поля, которые можно массово назначить

    public function user()
    {
        return $this->belongsTo(User::class); // Отношение к модели пользователя
    }

    public function products()
    {
        return $this->belongsToMany(Product::class); // Отношение ко многим товарам
    }
}
