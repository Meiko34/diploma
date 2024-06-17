<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
// use Illuminate\Support\Str;
use Laravel\Sanctum\PersonalAccessToken;
use Illuminate\Support\Facades\Mail;
use App\Models\Account;
use App\Mail\RegistrationConfirmation;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function register (Request $request) {

    $data = $request->validate([
        'name' => 'required',
        'email' => 'required|email|unique:users,email',
        'password' => 'required|string|min:6|regex:/^(?=.*[A-Z])(?=.*[\W_])/'
    ]);

    $client = User::create([
        'name' => $data['name'], 
        'email' => $data['email'],
        'password' => Hash::make($data['password'])
    ]);

$token = $client->createToken($client->email.'_Token')->plainTextToken; // Генерация токена

//    Mail::to($client->email)->send(new RegistrationConfirmation($client, $token));
    $client->sendEmailVerificationNotification();

    // Логика успешной регистрации

      event(new Registered($client)); 

 // Логика создания аккаунта
    $account = new Account();
    $account->user_id = $client->id;
    $account->account_number = 'AC' . uniqid();
    $account->save();

 // Проверяю создался ли акк
    if ($account) {
        return response()->json(['message' => 'Аккаунт успешно создан']);
    } else {
        return response()->json(['message' => 'Ошибка при создании аккаунта'], 500);
    }
    
    return redirect('/')->with('success', 'Регистрация прошла успешно! Проверьте вашу почту для подтверждения.');


return response()->json(['token' => $token, 'message' => 'User успешно зарегистрирован']);
        

    }

    /**
     * Display the specified resource.
     */



public function login(Request $request)
{
    if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
        $user = Auth::user();
        $token = $user->createToken($user->email.'_Token')->plainTextToken;
        
        return response()->json(['token' => $token, 'message' => 'User успешно авторизован']);
    } else {
        return response()->json(['message' => 'Неверные учетные данные'], 401);
    }
}


    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function sendResetLinkEmail(Request $request)
{
    $request->validate(['email' => 'required|email']);
    
    $status = Password::sendResetLink($request->only('email'));
    
    return $status === Password::RESET_LINK_SENT
        ? response()->json(['message' => 'Ссылка для сброса пароля отправлена на ваш email'])
        : response()->json(['error' => 'Что-то пошло не так, попробуйте снова'], 400);
}

   public function logout(Request $request)
{
    $request->user()->currentAccessToken()->delete();
    
    return response()->json(['message' => 'Вы успешно вышли из системы']);
}

}
