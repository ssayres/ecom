<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_agentes', function (Blueprint $table) {
            $table->id();
            $table->integer('id_user')->nullable();
            $table->string('name_agente')->nullable();
            $table->string('cnpj_agente')->nullable();
            $table->string('gnre_agente')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tb_agentes');
    }
};
