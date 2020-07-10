<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{

    protected $table="question";

    protected $casts = [
        "options" =>"array"
    ];

    public function Material(){
        return $this->hasOne("App/Materia",'materiaId', 'id');
    }

}
