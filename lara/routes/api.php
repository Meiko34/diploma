<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PromotionController;
use App\Http\Controllers\Api\ArticleController;
use App\Http\Controllers\Api\ContactController;



use App\Http\Controllers\UserController;







// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/products', [ProductController::class, 'index']); 
Route::get('/products/{productId}', [ProductController::class, 'show']);  
Route::delete('/products/{productId}', 'App\Http\Controllers\Api\ProductController@destroy')->middleware('cors');
Route::post('clear_products', [ProductController::class, 'store']);
Route::put('/products/{id}', [ProductController::class, 'update']);


// Route::post('/api/register', 'AuthController@store');
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// routes/api.php

// Route::post('/login', [AuthController::class, 'login']);
// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::post('/login', 'AuthController@login');

Route::get('/users', 'App\Http\Controllers\UserController@index');
Route::get('/users/{userId}', 'App\Http\Controllers\UserController@show');
// Route::delete('/users/{userId}', 'App\Http\Controllers\UserController@destroy');
Route::delete('/users/{userId}', 'App\Http\Controllers\UserController@destroy')->middleware('cors');



// Route::get('/promotion', 'App\Http\Controllers\Api\PromotionController@index');

Route::get('/promotions', [PromotionController::class, 'index']); 
Route::get('/promotions/{promotionId}', [PromotionController::class, 'show']);  
Route::post('promotion_add', [PromotionController::class, 'store']);
Route::delete('/promotions/{promotionId}', [PromotionController::class, 'destroy']);


Route::get('/articles', [ArticleController::class, 'index']); 
Route::get('/articles/{articleId}', [ArticleController::class, 'show']);  
Route::post('article_add', [ArticleController::class, 'store']);
Route::delete('/articles/{articleId}', [ArticleController::class, 'destroy']);


Route::get('/contacts', [ContactController::class, 'index']); 
