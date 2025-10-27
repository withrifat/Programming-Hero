import React, { useContext, useState } from 'react';
import useTitle from '../hooks/useTitle';
import { AuthContext } from '../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion'; // For animations

const Profile = () => {
  useTitle('Profile');
  const { user, signOutUser, updateUser, setLoading } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOutUser();
      toast.success('Logged out successfully!', { autoClose: 2000 });
      navigate('/');
    } catch (error) {
      toast.error(`Logout failed: ${error.message}`, { autoClose: 3000 });
    }
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      await updateUser(user, { displayName: name, photoURL });
      toast.success('Profile updated successfully!', { autoClose: 2000 });
      setEditing(false);
    } catch (error) {
      toast.error(`Update failed: ${error.message}`, { autoClose: 3000 });
    } finally {
      setIsLoading(false);
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen ">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-gray-600 text-lg font-medium"
        >
          Loading user data...
        </motion.div>
      </div>
    );
  }

  const { email, createdAt, uid, emailVerified, providerData, lastLoginAt, isAnonymous } = user;

  return (
    <div className="min-h-screen  flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 sm:p-8 relative overflow-hidden"
      >
        {/* Logout Button */}
        <button
          onClick={handleSignOut}
          className="absolute top-4 right-4 bg-red-500 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Log Out
        </button>

        {/* Profile Image */}
        <div className="flex flex-col items-center mb-6">
          <motion.img
            src={photoURL || 'https://cdn-icons-png.flaticon.com/512/847/847969.png'}
            alt="User"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-md border-4 border-white"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          {editing && (
            <input
              type="text"
              placeholder="Photo URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="mt-3 w-full max-w-xs p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          )}
        </div>

        {/* Profile Details */}
        <div className="text-center">
          {editing ? (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 w-full max-w-md border border-gray-300 rounded-lg text-center text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ) : (
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              {name || 'Anonymous User'}
            </h2>
          )}
          <p className="text-gray-600 mt-2">{email}</p>
          {createdAt && (
            <p className="text-gray-500 text-sm mt-1">
              Joined: {new Date(Number(createdAt)).toLocaleDateString()}
            </p>
          )}

          {/* Action Buttons */}
          <div className="mt-4 space-x-3">
            {editing ? (
              <>
                <motion.button
                  onClick={handleUpdate}
                  disabled={isLoading}
                  className={`bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isLoading ? 'Saving...' : 'Save'}
                </motion.button>
                <motion.button
                  onClick={() => setEditing(false)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cancel
                </motion.button>
              </>
            ) : (
              <motion.button
                onClick={() => setEditing(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Edit Profile
              </motion.button>
            )}
          </div>
        </div>

        {/* User Info */}
        <div className="mt-6 border-t border-gray-200 pt-4">
          <div className="text-gray-700 text-sm space-y-2">
            <p>
              <span className="font-semibold">User ID:</span> {uid}
            </p>
            <p>
              <span className="font-semibold">Email Verified:</span>{' '}
              {emailVerified ? (
                <span className="text-green-600">Yes</span>
              ) : (
                <span className="text-red-500">No</span>
              )}
            </p>
            <p>
              <span className="font-semibold">Provider:</span>{' '}
              {providerData?.[0]?.providerId || 'Unknown'}
            </p>
            <p>
              <span className="font-semibold">Last Login:</span>{' '}
              {lastLoginAt ? new Date(Number(lastLoginAt)).toLocaleString() : 'N/A'}
            </p>
            <p>
              <span className="font-semibold">Anonymous Account:</span>{' '}
              {isAnonymous ? 'Yes' : 'No'}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;