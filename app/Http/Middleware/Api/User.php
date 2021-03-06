<?php

namespace App\Http\Middleware\Api;

use Illuminate\Http\Request;
use Closure;

class User
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $user = $request->session()->get('user');
        if (empty($user)) {
            return response('Not authenticated', 401);
        }

        return $next($request);
    }
}
