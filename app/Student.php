<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    function getUserMaterias(){
        return $this->hasMany("App\Materia", "id", "materiaId");
    }
}
