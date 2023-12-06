import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

const MyForm = () => {
  const { handleSubmit, control, register, formState: { errors }, reset } = useForm();
  const [submittedData, setSubmittedData] = useState([]);

  const onSubmit = (data) => {
    // Handle form submission
    setSubmittedData(prev => [...prev, data]);
    reset(); // Reset the form after submission
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input {...register('name', { required: 'Name is required' })} className="w-full border p-1 mb-2" placeholder="Enter your name"/>
        <p className="text-red-500 text-xs italic">{errors.name?.message}</p>

        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' } })} className="w-full border p-1 mb-2"  placeholder="Enter your email"/>
        <p className="text-red-500 text-xs italic">{errors.email?.message}</p>

        <label className="block text-gray-700 text-sm font-bold mb-2">Mobile No.</label>
        <input {...register('mobile', { required: 'mobile no. is required', pattern: { value: /^\d{10}$/, message: 'Invalid mobile number'} })} className="w-full border p-1 mb-2" placeholder="Enter your mobile number"/>
        <p className="text-red-500 text-xs italic">{errors.mobile?.message}</p>


        <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
      <input {...register('address', { required: 'Address is required' })} className="w-full border p-1 mb-2" placeholder="Enter your address"/>
      <p className="text-red-500 text-xs italic">{errors.address?.message}</p>

      <label className="block text-gray-700 text-sm font-bold mb-2">Card Number</label>
      <input {...register('paymentDetails.cardNumber', { required: 'Card number is required', pattern: { value: /^\d{16}$/, message: 'Invalid card number' } })} className="w-full border p-1 mb-2" placeholder="Enter your card number"/>
      <p className="text-red-500 text-xs italic">{errors.paymentDetails?.cardNumber?.message}</p>

      <label className="block text-gray-700 text-sm font-bold mb-2">Expiry Date</label>
      <input {...register('paymentDetails.expiryDate', { required: 'Expiry date is required', pattern: { value: /^\d{2}\/\d{2}$/, message: 'Invalid expiry date' } })} className="w-full border p-1 mb-2"  placeholder="Enter expiry date (MM/YY)" />
      <p className="text-red-500 text-xs italic">{errors.paymentDetails?.expiryDate?.message}</p>

      <label className="block text-gray-700 text-sm font-bold mb-2">CVV</label>
      <input {...register('paymentDetails.cvv', { required: 'CVV is required', pattern: { value: /^\d{3}$/, message: 'Invalid CVV' } })} className="w-full border p-1 mb-2" placeholder="Enter your CVV"/>
      <p className="text-red-500 text-xs italic">{errors.paymentDetails?.cvv?.message}</p>

        {/* ... (repeat for other form fields) */}

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Submit
        </button>
      </form>

      {submittedData.length > 0 && 
        
                <div className="mt-4 bg-green-200 p-4 rounded">
                <h2 className="text-lg font-bold mb-2">Submitted Details:</h2>
                <pre>{JSON.stringify(submittedData, null, 2)}</pre>
              </div>
        
        
       
      }
    </div>
  );
};

export default MyForm;
