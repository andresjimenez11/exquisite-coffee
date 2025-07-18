<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryCollection;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index() {
        //return response()->json(['categories' => Category::all()]);

        return new CategoryCollection(Category::all());
    }
}
