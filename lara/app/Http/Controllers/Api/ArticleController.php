<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article; 
use App\Http\Resources\ArticleResource; 


class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
            $articles = ArticleResource::collection(Article::all());

             $response = []; 

           foreach ($articles as $article) { 

             $response[] = [ 

                'id' => $article->id, 

                'name' => $article->name, 

                'description' => $article->description, 

                'short_description' => $article->short_description, 

                'img' => $article->img, 

            ]; 
    }
      return response()->json($response); 
}

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
            $article = Article::create($request->all());

        return response()->json($article, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return new ArticleResource(Article::findOrFail($id));
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
    public function destroy(string $articleId)
    {
              $article = Article::find($articleId);

    if (!$article) {
        return response()->json(['message' => 'article not found'], 404);
    }

    $article->delete();

    return response()->json(['message' => 'article deleted successfully'], 200);
    }
}
