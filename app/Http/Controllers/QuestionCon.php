<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Question;

class QuestionCon extends Controller
{
    function index($id){
        $data = Question::where("materiaId", $id)->get();
        //$dataArr = var_dump( (array) $data);
        $dataArr = json_decode(json_encode($data), true);
        $filter = array_rand($dataArr, 1);
        $response = $dataArr[$filter];

        return $response;
    }

}
