<?php

namespace App\Http\Controllers;



use App\User;
use Illuminate\Support\Carbon;
use Illuminate\Http\Request;

class VerificationController extends Controller
{
      public function verify($id, $token)
    {
        $user = User::find($id);

        if (!$user) {
               return response()->json(['error' => 'Пользователь не найден'], 404);
        }

        if ($user->email_verified_at !== null) {
            return response()->json(['error' => 'Адрес электронной почты уже подтвержден'], 422);
        }

        if ($user->email_verification_token !== $token) {
           return response()->json(['error' => 'Неверный токен для подтверждения адреса электронной почты'], 422);
        }

         $user->markEmailAsVerified();
    
    return response()->json(['success' => 'Адрес электронной почты успешно подтвержден'], 200);
    }

}
