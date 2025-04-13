<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::orderBy('id', 'desc')->paginate();
        return view('product.index', compact('products'));
    }

    public function create()
    {
        return view('product.create');
    }
    public function show()
    {
        return view('product.create');
    }

    public function edit($id)
    {
        $product = Product::findOrFail($id);
        return view('product.edit', compact('product'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:products,name',
            'price' => 'required|numeric|gte:0',
            'image' => 'required|image'
        ]);

        $product = new Product();
        $product->name = $request->name;
        $product->price = $request->price;

        if ($request->hasFile('image')) {
            try {
                $this->uploadImage($request, $product);
            } catch (Exception $ex) {
                return redirect()->back()->with('error', 'Error occurred while uploading image');
            }
        }

        $product->save();
        return redirect()->route('product.index')->with('success', 'Product created successfully');
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|unique:products,name,' . $id,
            'price' => 'required|numeric|gte:0',
            'image' => 'nullable|image'
        ]);

        $product = Product::findOrFail($id);
        $product->name = $request->name;
        $product->price = $request->price;

        if ($request->hasFile('image')) {
            try {
                //delete previous image
                $this->removeProductImage($product);
                
                $this->uploadImage($request, $product);
            } catch (Exception $ex) {
                return redirect()->back()->with('error', 'Error occurred while uploading image');
            }
        }

        $product->save();
        return redirect()->route('product.index')->with('success', 'Product updated successfully');
    }


    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $this->removeProductImage($product);
        $product->delete();
        return back()->with('success', 'Product deleted successfully');
    }

    private function uploadImage($request, $product)
    {
        $imageName = time() . '.' . $request->image->extension();
        $request->image->move(public_path('uploads/products/'), $imageName);
        $product->image = $imageName;
    }

    private function removeProductImage($product)
    {
        if ($product->image) {
            $currentImagePath = public_path('uploads/products/' . $product->image);
            if (File::exists($currentImagePath)) {
                File::delete($currentImagePath);
            }
        }
    }
}
