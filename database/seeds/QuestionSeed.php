<?php

use Illuminate\Database\Seeder;

class QuestionSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("question")->insert(
            array([
            "title" => "¿Cual es la corriente de pensamiento a la que se asocia a Alexander Wendt?",
            "options" => json_encode([
                1 =>"Idealismo",
                2 =>"Realismo",
                3 =>"Neorealismo",
                4 =>"Constructivismo",
                5 =>"Posmodernismo"
                ]),
            "term"=>1,
            "materiaId" => 1,
            "correct_option" => "Constructivismo"
            ],[
                "title" => "¿Cuales fueron los dos hecho que marcaron el fin de la guerra fria?",
                "options" => json_encode([
                    1 =>"Caida del Muro de Berlin y la explosión de la burbuja de la bolsa de Tokio",
                    2 =>"El fin de la peregrinación a la Meca y la anaxión de Kuwait",
                    3 =>"Caida de la Urss y la expansión del Consejo de Seguridad",
                    4 =>"Acuerdo bilateral entre USA y la URSS, sumado a la creación de la UE",
                    5 =>"Partición de la URSS y la Conquista del Desierto"
                    ]),
                "term"=>1,
                "materiaId" => 1,
                "correct_option" => "Partición de la URSS y la Conquista del Desierto"
            ]));
    }
}
