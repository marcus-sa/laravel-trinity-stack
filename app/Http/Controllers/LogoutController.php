<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class LogoutController extends Controller
{

    public function __invoke(Request $request)
    {
        $request->session()->forget('user');

        return redirect('/');//response()->json($request->session()->all());
    }

}
