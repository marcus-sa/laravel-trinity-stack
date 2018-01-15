<?php

namespace App\Http\Controllers\Api\Guest;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{

    public function __invoke(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|string|max:255',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 406);
        }

        $id = $request->input('id');
        $password = $request->input('password');

        $user = User::where('username', $id)->orWhere('email', $id)->first();

        if ($user && $user->count()) {
            if (Hash::check($password, $user->password)) {
                $request->session()->put('user', $user);

                return response()->json($user);
            } else {
                return response()->json([
                    'password' => 'Password is incorrect'
                ], 406);
            }
        } else {
            return response()->json([
                'id' => "Username or email doesn't exist"
            ], 406);
        }
    }

}
