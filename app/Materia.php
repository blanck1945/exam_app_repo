<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Materia extends Model
{
    protected $table="materia";

    public function manyQuestions(){
        return $this->hasMany("App/Question",'foreign_key', 'materiaId');
    }

}
