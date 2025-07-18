<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\RegisterRequest;

class AuthController extends Controller
{
    
    public function register(RegisterRequest $request) {
        
        // Validate registration
        $data = $request->validated();
        
        // Create user
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);

        // Return answer
        return [
           'token' => $user->createToken('token')->plainTextToken,
           'user' => $user
        ];
    }

    public function login(LoginRequest $request) {
        
        // Validate login
        $data = $request->validated();

        // Check password, if it is not correct, it returns 422
        if(!Auth::attempt($data)){
            return response([
                'errors' => ['The email or password is incorrect']
            ], 422);
        }

        // Authenticate the user
        $user = Auth::user();

        return [
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user
         ];
    }

    public function logout(Request $request) {
        $user = $request->user();
        $user->currentAccessToken()->delete();

        return [
            'user' => null
        ];
    }
}
