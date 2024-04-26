<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Promotion; 
use App\Http\Resources\PromotionResource; 


class PromotionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $promotions= PromotionResource::collection(Promotion::all());
           $response = []; 

           foreach ($promotions as $promotion) { 

             $response[] = [ 

                'id' => $promotion->id, 

                'name' => $promotion->name, 

                'description' => $promotion->description, 

                'short_description' => $promotion->short_description, 
                'created_at' => $promotion->created_at, 


                
            ]; 
    }
   return response()->json($response, 200, [], JSON_UNESCAPED_UNICODE);
} 

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // $validatedData = $request->validate([
        //     'name' => 'required|string',
        //     'description' => 'required|string',
        //     'short_description' => 'required|string',
        // ]);

        // $promotion = Promotion::create($validatedData);

        // return response()->json($promotion, 201);
           $promotion = Promotion::create($request->all());

        return response()->json($promotion, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
         return new PromotionResource(Promotion::findOrFail($id)); 
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
    public function destroy(string $promotionId)
    {
         $promotion = Promotion::find($promotionId);

    if (!$promotion) {
        return response()->json(['message' => 'Promotion not found'], 404);
    }

    $promotion->delete();

    return response()->json(['message' => 'Promotion deleted successfully'], 200);
    }
}
