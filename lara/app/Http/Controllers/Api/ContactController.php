<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact; 
use App\Http\Resources\ContactResource;



class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       $contacts = ContactResource::collection(Contact::all()); 

           $response = []; 

           foreach ($contacts as $contact) { 

             $response[] = [ 

                'id' => $contact->id, 

                'telephone' => $contact->telephone, 

                'email' => $contact->email, 

                'address' => $contact->address, 

                

                'operating_mode' => $contact->operating_mode, 
               
             

                'questions_about_orders' => $contact->questions_about_orders,
                
                   'legal_name' => $contact->legal_name, 



            ]; 

           } 

 

  return response()->json($response, 200, [], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
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
