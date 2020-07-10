<?php

namespace App\Http\Controllers;
use App\Student;

use Illuminate\Http\Request;

class StudentCon extends Controller
{
    function getMateria($id){
        $materia = Student::find($id)->getUserMaterias;

        return $materia;
    }
}
