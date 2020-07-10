<?php

use Illuminate\Database\Seeder;

class MateriaSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("materia")->insert(
            array([
            "materia_name" => "RR.II",
            "profesor" => "Richard Everet"
            ],
            [
                "materia_name" => "Economia",
                "profesor" => "Jose Luis Espert"
            ],[
                "materia_name" => "Matematica",
                "profesor" => "Agustin Ecebarne"
                ]
        ));
    }
}
