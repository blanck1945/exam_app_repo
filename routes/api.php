<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Questions Routes
Route::get("/questions/{id}", "QuestionCon@index");
Route::post("/send_res/{id}", "QuestionCon@send");

//Exam Routes
Route::post("/send_res", "ExamCon@send_res");


//Materia Routes

//Student Routes
Route::get("/student_materia/{id}", "StudentCon@getMateria");


