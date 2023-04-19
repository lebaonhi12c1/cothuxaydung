import { useState } from 'react';
import DefaultLayout from '@/layout/DefaultLayout';

export default function User() {
  const [activeTab, setActiveTab] = useState('cart');

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Trang người dùng</h1>
      </div>

      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 font-semibold border-b-2 ${
            activeTab === 'cart'
              ? 'border-blue-500 text-blue-500'
              : 'text-gray-500 border-transparent'
          }`}
          onClick={() => setActiveTab('cart')}
        >
          Giỏ hàng
        </button>
        <button
          className={`px-4 py-2 font-semibold border-b-2 ${
            activeTab === 'orders'
              ? 'border-blue-500 text-blue-500'
              : 'text-gray-500 border-transparent'
          }`}
          onClick={() => setActiveTab('orders')}
        >
          Theo dõi đơn hàng
        </button>
        <button
          className={`px-4 py-2 font-semibold border-b-2 ${
            activeTab === 'profile'
              ? 'border-blue-500 text-blue-500'
              : 'text-gray-500 border-transparent'
          }`}
          onClick={() => setActiveTab('profile')}
        >
          Chỉnh sửa thông tin
        </button>
      </div>

      {activeTab === 'cart' && (
        <div>
          {/* Render giỏ hàng */}
        </div>
      )}

      {activeTab === 'orders' && (
        <div>
          {/* Render theo dõi đơn hàng */}
        </div>
      )}

      {activeTab === 'profile' && (
        <div>
          {/* Render chỉnh sửa thông tin người dùng */}
        </div>
      )}
    </div>
  );
}

User.getLayout = DefaultLayout;
