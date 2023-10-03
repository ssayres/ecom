<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Visitor;

class VisitorController extends Controller
{
    public function GetVisitorDetails (){
        $ip_adress = $_SERVER['remote_addr'];
        date_default_timezone_set('America/Sao_Paulo');
        $visit_time = date("h:i:sa");
        $visit_date = date("d-m-Y");

        $result = Visitor::insert([
            'ip_adress'=> $ip_adress,
            'visit_date' => $visit_date,
            'visit_time' => $visit_time

        ]);

        return $result;

    }
}
