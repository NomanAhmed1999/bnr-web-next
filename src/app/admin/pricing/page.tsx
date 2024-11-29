export default function AdminPricingPage() {
    return (
      <div>
        <h1 className="text-3xl font-semibold mb-6">Pricing Management</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-lg text-gray-700 mb-4">Manage your pricing plans and packages here.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded p-4">
              <h2 className="text-xl font-semibold mb-2">Basic Plan</h2>
              <p className="text-gray-600">$9.99/month</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit</button>
            </div>
            <div className="border rounded p-4">
              <h2 className="text-xl font-semibold mb-2">Pro Plan</h2>
              <p className="text-gray-600">$19.99/month</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit</button>
            </div>
            <div className="border rounded p-4">
              <h2 className="text-xl font-semibold mb-2">Enterprise Plan</h2>
              <p className="text-gray-600">Custom pricing</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  