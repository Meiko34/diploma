<?php

namespace App\Http\Controllers\Api;

use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use Laravel\Sanctum\PersonalAccessToken;


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
    public function register (Request $request)
    {

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
}
