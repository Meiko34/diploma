<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
// use Illuminate\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Auth\Notifications\VerifyEmail;

// use Illuminate\Contracts\Auth\MustVerifyEmail as MustVerifyEmailContract;
// use Illuminate\Auth\MustVerifyEmail as MustVerifyEmailTrait;



// use Illuminate\Database\Eloquent\Model;


class User extends Authenticatable 
// implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable, MustVerifyEmail;
  
     protected $table = "users";

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];


public function sendEmailVerificationNotification()
{
    $this->notify(new VerifyEmail);
}


public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function client_address()
    {
        return $this->hasMany(Client_address::class);
    }

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    // protected $casts = [
    //     'email_verified_at' => 'datetime',
    //     'password' => 'hashed',
    // ];
}
