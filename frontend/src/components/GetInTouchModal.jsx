import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const GetInTouchModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const token = localStorage.getItem('urbanvista_token');
      const headers = { 'Content-Type': 'application/json' };
      if (token) headers['Authorization'] = `Bearer ${token}`;

      const rawApiUrl = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? 'https://projectziventrabackend.onrender.com' : '');
      const API_BASE_URL = (rawApiUrl || '').replace(/\/+$/, '');
      const res = await fetch(`${API_BASE_URL}/api/auth/inquiry`, {
        method: 'POST',
        headers,
        body: JSON.stringify(formData),
      });

      let data = {};
      try {
        data = await res.json();
      } catch (e) {
        throw new Error(`Server returned ${res.status}. If the backend is waking up, please retry shortly.`);
      }

      if (res.ok && data.success) {
        setStatus({ loading: false, success: true, error: '' });
        setTimeout(() => {
          onClose();
          setStatus({ loading: false, success: false, error: '' });
          setFormData({ name: '', email: '', phone: '', message: '' });
        }, 2200);
      } else {
        setStatus({ loading: false, success: false, error: data.message || 'Error sending message' });
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message || 'Network error. Please try again.' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white w-full max-w-lg rounded-3xl p-8 sm:p-10 shadow-2xl relative border border-gray-100"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-black rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="urbanvista-display text-2xl font-black text-gray-950 mb-1">
            Get in Touch
          </div>
          <p className="text-xs text-gray-500">
            Connect with our premier luxury property advisory team.
          </p>
        </div>

        {status.success ? (
          <div className="py-8 text-center flex flex-col items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mb-3" />
            <h4 className="text-base font-bold text-gray-900 mb-1">Inquiry Received</h4>
            <p className="text-xs text-gray-500 max-w-xs">
              Thank you for reaching out. An UrbanVista private advisor will be in touch with you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {status.error && (
              <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-100">
                {status.error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Alexander Wright"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-black transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 019-2834"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-black transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alexander@urbanvista.com"
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-black transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Message / Inquiries
              </label>
              <textarea
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="I am interested in exploring available luxury properties in your portfolio..."
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-black transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="w-full py-3 bg-gray-950 hover:bg-black text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              <span>{status.loading ? 'Submitting...' : 'Send Message'}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default GetInTouchModal;
