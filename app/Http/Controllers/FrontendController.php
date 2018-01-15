<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class FrontendController extends Controller
{
    public function __invoke(Request $request)
    {
        $session = $request->session()->all();
        $url = env('APP_URL');
        $server_port = $_SERVER['SERVER_PORT'];
        $port = env('APP_ENV') !== 'local'
            ? $server_port
            : '9000';

        $data = [
            'data' => json_encode([
                'session' => $session,
            ]),
            'script' => $url . ':' . $port . '/dist/app.js',
            'url' => $url . ':' . $server_port,
            'name' => env('APP_NAME')
        ];

        return view('index', $data);
    }
}
