<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product; 
use App\Http\Resources\ProductResource;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
        $products = ProductResource::collection(Product::all());
       
        $response = [];
        foreach ($products as $product) {
             $response[] = [
                'id' => $product-> id,
                 'img' => $product-> img,
                'name' => $product-> name,
                'price' => $product-> price,
                'description' => $product-> description,
                'variety' => $product-> variety,
                'collections' => $product-> collections,


             ];
        }
        return response()->json($response, 200, [], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $product = Product::create($request->all());

        return response()->json($product, 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
    //       return new ProductResource(Product::findOrFail($id));

    //          if (!$product) {
    //         return response()->json(['error' => 'Product not found'], 404);
    //     }

    //  return response()->json(['data' => $product], 200, [], JSON_UNESCAPED_UNICODE);

        $product = Product::find($id);

    if (!$product) {
        return response()->json(['error' => 'Product not found'], 404);
    }

    return new ProductResource($product);
     
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    { 
    

    $product = Product::findOrFail($id);

    $data = $request->validate([
        'name' => 'required',
        'price' => 'required',
        'description' => 'required',
        'img' => 'required',
    ]);

    $product->update($data);

    return response()->json([
        'message' => 'Product updated successfully',
        'data' => $product
    ], 200);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $productId)
    {
     $product = Product::find($productId);

    if (!$product) {
        return response()->json(['message' => 'Product not found'], 404);
    }

    $product->delete();

    return response()->json(['message' => 'Product deleted successfully'], 200);
    }
}
