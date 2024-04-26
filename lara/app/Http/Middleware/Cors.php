<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
    //    if ($request->isMethod('OPTIONS')) {
    //     $response = new Response();
    // } else {
    //     $response = $next($request);
    // }

    // $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    // $response->headers->set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // $response->headers->set('Access-Control-Allow-Origin', '*');

    // return $response;
  $response = $next($request);
    $response->header('Access-Control-Allow-Origin', '*');
    $response->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    $response->header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    return $response;

    }
}
