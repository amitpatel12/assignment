// ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Ecommerce = () => {
  const [products, setProducts] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [filters, setFilters] = useState({ price: '', category: '', rating: '' });

  useEffect(() => {
    // Fetch dummy product data from your API
    axios.get('https://dummyjson.com/products')
      .then(response => {
    
        setProducts(response.data.products);
        setFilterData(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []); 

  const applyFilters = () => {
    // Apply filters to the product data
    const filteredProducts = products.filter(product => {
      return (!filters.price || product.price <= parseInt(filters.price)) &&
             (!filters.category || product.category === filters.category) &&
             (!filters.rating || product.rating >= parseFloat(filters.rating));
    });

    // Set the filtered products
    setFilterData(filteredProducts);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex sm:flex-row flex-col">
        {/* Sidebar */}
        <div className="sm:w-1/4 pr-8">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          {/* Filter by price */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Price</label>
            <input
              type="text"
              value={filters.price}
              onChange={e => setFilters({ ...filters, price: e.target.value })}
              className="mt-1 p-2 border rounded w-full"
              placeholder="Enter price"
            />
          </div>

          {/* Filter by Category */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Category</label>
            <select
              value={filters.category}
              onChange={e => setFilters({ ...filters, category: e.target.value })}
              className="mt-1 p-2 border rounded w-full"
            >
              <option value="">Select category</option>
              <option value="smartphones">Smart Phones</option>
              <option value="laptops">Laptops</option>
              <option value="books">Books</option>
            </select>
          </div>

          {/* Filter by rating */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Rating</label>
            <select
              value={filters.rating}
              onChange={e => setFilters({ ...filters, rating: e.target.value })}
              className="mt-1 p-2 border rounded w-full"
            >
              <option value="">Select rating</option>
              <option value="4">4</option>
              <option value="4.5">4.5</option>
              <option value="4.8">4.8</option>
            </select>
          </div>

          {/* Add more filters according to your requirements */}
          <button onClick={applyFilters} className="bg-blue-500 text-white px-4 py-2 rounded">Apply Filters</button>
        </div>

        {/* Product Listing */}
        <div className="sm:w-3/4">
          <h1 className="text-2xl font-semibold mb-4">Product Listing</h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filterData.map(product => (
              <div key={product.id} className="bg-white p-4 rounded shadow h-96">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.title}</p>
              <img src={product.thumbnail} alt={product.name} className="mb-2 rounded-md" style={{ maxHeight: '120px' }} />
              <p className="mb-2">Price: ${product.price}</p>
              <p className="mb-2">Brand: {product.brand}</p>
              <p className="mb-2">Rating: {product.rating}</p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
