<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/show-session-data', [HomeController::class, 'showSessionData']);
// Route::get('/show-session-data', 'App\Http\Controllers\HomeController@showSessionData');
Route::get('/show-session-data', function () {
    $sessionData = session()->all();
    dd($sessionData);
});


Auth::routes(['verify' => true]);
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/verify-email/{token}', 'VerificationController@verifyEmail')->name('verify.email');