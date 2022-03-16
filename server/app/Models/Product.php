<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'price',
        'category',
        'brand',
        'shipping',
        'sku',
        'colors'
    ];


    public function images() {
        return $this->hasMany(Image::class);
    }

    public function thumbnail() {
        return $this->hasOne(Thumbnail::class);
    }


}
