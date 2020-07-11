<?php

namespace App\Http\Controllers;
use App\Exam;
use Illuminate\Http\Request;

class ExamCon extends Controller
{
    function send_res(Request $req){
        $res = new Exam;

        $res->answer = $req->input("answer");
        $res->answer = $req->input("questionId");

    }
}
