import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Mail, User, Phone, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Translation } from '../translations';

interface CartPageProps {
  translation: Translation;
}

interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
}

export const CartPage: React.FC<CartPageProps> = ({ translation }) => {
  const navigate = useNavigate();
  const { state, removeItem, updateQuantity, clearCart } = useCart();
  const [showReservationForm, setShowReservationForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ReservationForm>({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  });

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate email sending (in a real app, you'd call your backend API)
    try {
      const orderDetails = {
        items: state.items,
        total: state.total,
        customer: formData,
        orderDate: new Date().toISOString()
      };

      // Here you would typically send this to your backend
      console.log('Order submitted:', orderDetails);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert(translation.cart?.orderSuccess || 'Order submitted successfully! We will contact you soon.');
      clearCart();
      navigate('/');
    } catch (error) {
      alert(translation.cart?.orderError || 'Error submitting order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ShoppingBag className="mx-auto h-24 w-24 text-gray-400 mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {translation.cart?.empty || 'Your cart is empty'}
            </h2>
            <p className="text-gray-600 mb-8">
              {translation.cart?.emptyDescription || 'Add some products to get started'}
            </p>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              {translation.cart?.continueShopping || 'Continue Shopping'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              {translation.cart?.back || 'Back to Store'}
            </button>
            <h1 className="text-3xl font-bold text-gray-900">
              {translation.cart?.title || 'Shopping Cart'}
            </h1>
          </div>
          <div className="text-sm text-gray-600">
            {state.itemCount} {translation.cart?.items || 'items'}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  {translation.cart?.items || 'Items in Cart'}
                </h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {state.items.map((item) => (
                  <div key={item.id} className="p-6 flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      <p className="text-lg font-semibold text-orange-600 mt-2">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Minus className="h-4 w-4 text-gray-600" />
                      </button>
                      
                      <span className="w-12 text-center font-medium">{item.quantity}</span>
                      
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="mt-2 text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {translation.cart?.summary || 'Order Summary'}
              </h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>{translation.cart?.subtotal || 'Subtotal'}</span>
                  <span>${state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>{translation.cart?.shipping || 'Shipping'}</span>
                  <span>{translation.cart?.freeShipping || 'Free'}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-semibold text-gray-900">
                    <span>{translation.cart?.total || 'Total'}</span>
                    <span>${state.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {!showReservationForm ? (
                <button
                  onClick={() => setShowReservationForm(true)}
                  className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  {translation.cart?.proceedToReservation || 'Proceed to Reservation'}
                </button>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {translation.cart?.reservationForm || 'Reservation Details'}
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <User className="inline h-4 w-4 mr-1" />
                      {translation.cart?.name || 'Full Name'}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <Mail className="inline h-4 w-4 mr-1" />
                      {translation.cart?.email || 'Email'}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <Phone className="inline h-4 w-4 mr-1" />
                      {translation.cart?.phone || 'Phone'}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <MapPin className="inline h-4 w-4 mr-1" />
                      {translation.cart?.address || 'Address'}
                    </label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {translation.cart?.notes || 'Additional Notes'}
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder={translation.cart?.notesPlaceholder || 'Any special requests or delivery instructions...'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting 
                      ? (translation.cart?.submitting || 'Submitting...') 
                      : (translation.cart?.submitReservation || 'Submit Reservation')
                    }
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};