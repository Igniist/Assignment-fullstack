import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [referrerName, setReferrerName] = useState('');
  const [referrerEmail, setReferrerEmail] = useState('');
  const [refereeName, setRefereeName] = useState('');
  const [refereeEmail, setRefereeEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/referrals', {
        referrerName,
        referrerEmail,
        refereeName,
        refereeEmail,
      });
      setMessage(response.data.message);
      // Optionally reset form fields or show a success message to the user
    } catch (error) {
      console.error('Error submitting referral:', error);
      setMessage('Failed to submit referral');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Refer & Earn</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="referrerName">
              Your Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="referrerName"
              type="text"
              placeholder="Your Name"
              value={referrerName}
              onChange={(e) => setReferrerName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="referrerEmail">
              Your Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="referrerEmail"
              type="email"
              placeholder="Your Email"
              value={referrerEmail}
              onChange={(e) => setReferrerEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="refereeName">
              Friend's Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="refereeName"
              type="text"
              placeholder="Friend's Name"
              value={refereeName}
              onChange={(e) => setRefereeName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="refereeEmail">
              Friend's Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="refereeEmail"
              type="email"
              placeholder="Friend's Email"
              value={refereeEmail}
              onChange={(e) => setRefereeEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Refer Now
            </button>
          </div>
          {message && (
            <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
