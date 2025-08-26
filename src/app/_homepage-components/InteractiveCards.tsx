import React from 'react';

const InteractiveCards = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            The all-in-one for teams of one
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join 150,000+ solo business owners who use Podia
            <br />
            to run their website, online store, and email marketing
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
            Start your free trial
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Online Store Card */}
          <div className="group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
            <div className="bg-blue-200 hover:bg-blue-300 transition-colors duration-300 rounded-2xl p-6 h-80 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Online store</h3>
                <p className="text-gray-700 mb-6">
                  Sell anything. Upload your content and leave the hosting, checkout, and delivery to us.
                </p>
                
                {/* Mock UI Elements */}
                <div className="space-y-3">
                  <div className="bg-gray-800 rounded-lg p-3 text-white text-sm">
                    📚 Online Course
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 text-white text-sm">
                    ⬇️ Digital Downloads
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gray-800 rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-white rounded-full opacity-30"></div>
            </div>
          </div>

          {/* Website Card */}
          <div className="group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
            <div className="bg-orange-200 hover:bg-orange-300 transition-colors duration-300 rounded-2xl p-6 h-80 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website</h3>
                <p className="text-gray-700 mb-6">
                  Build a beautiful website in less than 10 minutes with professionally designed templates.
                </p>
                
                {/* Mock Website Preview */}
                <div className="space-y-2">
                  <div className="bg-gray-800 rounded-lg p-2 text-center text-white text-xs">
                    Photography
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-orange-400 rounded-lg h-12"></div>
                    <div className="bg-orange-400 rounded-lg h-12"></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gray-800 rounded-lg rotate-12 opacity-20"></div>
              <div className="absolute top-4 right-4 w-16 h-16 bg-orange-400 rounded-full opacity-40"></div>
            </div>
          </div>

          {/* Email Marketing Card */}
          <div className="group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
            <div className="bg-purple-200 hover:bg-purple-300 transition-colors duration-300 rounded-2xl p-6 h-80 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Email marketing</h3>
                <p className="text-gray-700 mb-6">
                  Beautiful email marketing that works perfectly with your online store and website.
                </p>
                
                {/* Mock Email Interface */}
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-purple-400 rounded-full"></div>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-300 rounded mb-1"></div>
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-gray-800 rounded-full opacity-15"></div>
              <div className="absolute top-8 right-8 w-12 h-12 bg-purple-400 rounded-lg opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="fixed top-20 left-10 w-16 h-16 bg-orange-300 rounded-full opacity-60 -z-10"></div>
        <div className="fixed top-40 right-20 w-8 h-8 bg-blue-400 rounded-full opacity-40 -z-10"></div>
        <div className="fixed bottom-40 left-20 w-12 h-12 bg-purple-300 rounded-full opacity-50 -z-10"></div>
        <div className="fixed bottom-60 right-10 w-20 h-20 bg-blue-200 rounded-lg opacity-30 -z-10"></div>
      </div>
    </div>
  );
};

export default InteractiveCards;