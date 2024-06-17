<?php


// namespace App\Http\Controllers;
namespace App\Http\Controllers;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Carbon;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Mail;



class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    //      $users= User::all();
    // return response()->json($users);
    $users = UserResource::collection(User::all());

    $response = []; 

           foreach ($users as $user) { 
             $response[] = [ 
                'id' => $user->id, 
                'name' => $user->name, 
                'email' => $user->email, 
                'created_at' => $user->created_at,
            ]; 
        }
          return response()->json($response, 200, [], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
            'email_verified_at' => null //Нулл по умолчанию
        ]);

  $token = Str::random(60);
    $user->update(['email_verification_token' => $token]);
    Mail::to($user->email)->send(new RegistrationConfirmation($user, $token));

// $user->sendEmailVerificationNotification(); письмо на почту

       return response()->json(['message' => 'Регистрация прошла успешно. Подтверждение на электронной почте.', 'user' => $user]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return new UserResource(User::findOrFail($id)); 
    }

    
public function verifyEmail(Request $request)
{
    $user = User::where('email_verification_token', $request->token)->first();

    if ($user) {
        $user->update(['email_verified_at' => now(), 'email_verification_token' => null]);
        // Дополнительная логика после подтверждения почты
    }
    
}


public function resendVerificationEmail(Request $request)
{
    $user = $request->user();

    if (!$user->hasVerifiedEmail()) {
        $user->sendEmailVerificationNotification();
        
        // Логика после повторной отправки письма
    }
}
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
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
    public function destroy (string $userId)
    {
         $user = User::find($userId);

    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    $user->delete();

    return response()->json(['message' => 'User deleted successfully'], 200);
    }
}
