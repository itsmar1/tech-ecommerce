<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // get all products
        //
        $products = DB::table('products')
                    ->join('images', 'products.id', '=', 'images.product_id')
                    ->select('products.*', 'images.image')
                    ->get();

        return $products;
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreProductRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // validate request data
        $fields = $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'price' => 'required',
            'category' => 'required|string',
            'brand' => 'required|string',
            'shipping' => 'required|boolean',
            'sku' => 'string',
            'colors' => 'string'
        ]);

        // store the data in the products table
        $product = Product::create($fields);

        // get the request images
        if ($request->has('images')) {
            // loop through the images
            foreach($request->file('images') as $image) {

                $imageName= $product->id.'_'.$fields['name'].'_image_'.time().rand(1,1000).'.'.$image->extension();

                // store the images in s3
                $path = $image->storeAs('products/'.$product->id, $imageName, 's3');

                // store the images in the images table
                Image::create([
                    'product_id' => $product->id,
                    'image' => $path
                ]);
            }
        }

        $response = [
            'message' => 'Product created'
        ];

        return response($response, 201);

    }


    // GET a Single Product Function
    public function getProduct($id) {
        $product = Product::find($id);
        if (!$product){
            return response([
                'message' => 'No Product with the ID: '.$id
            ], 401);
        }
        $images = $product->images;

        $response = [
            'product' => $product,
            'images' => $images
        ];

        return response($response, 200);
    }




    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProductRequest  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {

        // validate request data
        $fields = $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'price' => 'required',
            'category' => 'required|string',
            'brand' => 'required|string',
            'shipping' => 'required|boolean',
            'sku' => 'string',
            'colors' => 'string'
        ]);

        // store the data in the products table
        Product::update($fields);

        // get the product id
        $id = $request->id;

        // get the request images
        if ($request->has('images')) {
            // loop through the images
            foreach($request->file('images') as $image) {

                $imageName= $id.'_'.$fields['name'].'_image_'.time().rand(1,1000).'.'.$image->extension();

                // store the images in s3
                $path = $image->storeAs('products/'.$id, $imageName, 's3');

                // store the images in the images table
                Image::create([
                    'product_id' => $id,
                    'image' => $path
                ]);
            }
        }

        $response = [
            'message' => 'Product created'
        ];

        return response($response, 201);


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $path = 'products/'.$id;
        Storage::disk('s3')->deleteDirectory($path);

        return Product::destroy($id);

        // return Product::find($id)->delete();

        // $product = Product::find($id);
        // $product->delete();
    }
}
