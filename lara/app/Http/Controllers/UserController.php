<?php


// namespace App\Http\Controllers;
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Http\Resources\UserResource;




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
        ]);

        return response()->json(['message' => 'User registered successfully', 'user' => $user]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return new UserResource(User::findOrFail($id)); 
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
