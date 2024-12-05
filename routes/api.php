<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::middleware('auth')->group(function () {
//     Route::get('/tes', function (Request $request) {
//         $response = [
//             "message" => "Testing Successfull",
//             "tes" => "YEAAH",
//         ];
//         dd($response);
//         return response()->json($response, 200);
//     })->name('api.test');
// });

Route::get('/tes', function (Request $request) {
    $user = $request->user();
    $response = [
        "user" => $user,
        "message" => "Testing Successfull",
        "tes" => "YEAAH",
    ];
    return response()->json($response, 200);
})->name('api.test');

