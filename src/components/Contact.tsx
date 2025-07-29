import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Translation } from '../translations';

interface ContactProps {
  translation: Translation;
}

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const Contact: React.FC<ContactProps> = ({ translation }) => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: translation.contact.info.address.title,
      details: [
        translation.contact.info.address.street,
        translation.contact.info.address.city
      ],
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: Phone,
      title: translation.contact.info.phone.title,
      details: [
        translation.contact.info.phone.main,
        translation.contact.info.phone.whatsapp
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Mail,
      title: translation.contact.info.email.title,
      details: [
        translation.contact.info.email.sales,
        translation.contact.info.email.support
      ],
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Clock,
      title: translation.contact.info.hours.title,
      details: [
        translation.contact.info.hours.weekdays,
        translation.contact.info.hours.weekend
      ],
      color: 'from-purple-400 to-purple-600'
    }
  ];

  return ( 
    <section id="contact-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {translation.contact.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {translation.contact.subtitle}
          </p>
        </div>

        {/* Contact Info Cards */}
        <div id="contact" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${info.color} mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {info.title}
                </h4>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {translation.contact.form.title}
            </h3>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {translation.contact.form.success.title}
                </h4>
                <p className="text-gray-600">
                  {translation.contact.form.success.message}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-orange-500 hover:text-orange-600 font-medium"
                >
                  {translation.contact.form.success.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {translation.contact.form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {translation.contact.form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {translation.contact.form.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {translation.contact.form.subject.label}
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    >
                      <option value="">{translation.contact.form.subject.placeholder}</option>
                      <option value="general">{translation.contact.form.subject.options.general}</option>
                      <option value="products">{translation.contact.form.subject.options.products}</option>
                      <option value="support">{translation.contact.form.subject.options.support}</option>
                      <option value="wholesale">{translation.contact.form.subject.options.wholesale}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {translation.contact.form.message}
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
                    placeholder={translation.contact.form.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>{translation.contact.form.sending}</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>{translation.contact.form.send}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Map/Additional Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {translation.contact.visit.title}
            </h3>
            
            <div className="aspect-video bg-gradient-to-br from-orange-100 to-red-100 rounded-xl mb-6 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Store location"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                {translation.contact.visit.description}
              </p>
              
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {translation.contact.visit.directions.title}
                </h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• {translation.contact.visit.directions.metro}</li>
                  <li>• {translation.contact.visit.directions.bus}</li>
                  <li>• {translation.contact.visit.directions.parking}</li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {translation.contact.visit.services.title}
                </h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• {translation.contact.visit.services.consultation}</li>
                  <li>• {translation.contact.visit.services.demo}</li>
                  <li>• {translation.contact.visit.services.installation}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};