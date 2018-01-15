<?php

namespace App\Http\Middleware\Api;

use Illuminate\Http\Request;
use Closure;

class Guest
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
        if ($request->session()->exists('user')) {
            return response('Authenticated', 403);
        }

        return $next($request);
    }
}
