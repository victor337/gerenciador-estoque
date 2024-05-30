<?php

class Product
{
  public $name;
  public $value;
  public $desc;

  public function __construct($name, $value, $desc)
  {
    $this->name = $name;
    $this->value = $value;
    $this->desc = $desc;
  }
}
function getProducts()
{
  $products = array(
    Product('Item 1', 12.99, 'Melhor item')
  );

  return json_encode($products);
}

getProducts();