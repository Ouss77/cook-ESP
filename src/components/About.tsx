import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';
import { Translation } from '../translations';

interface AboutProps {
  translation: Translation;
}

export const About: React.FC<AboutProps> = ({ translation }) => {
  const features = [
    {
      icon: Award,
      title: translation.about.features.quality.title,
      description: translation.about.features.quality.description,
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: Users,
      title: translation.about.features.experience.title,
      description: translation.about.features.experience.description,
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Clock,
      title: translation.about.features.delivery.title,
      description: translation.about.features.delivery.description,
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Shield,
      title: translation.about.features.warranty.title,
      description: translation.about.features.warranty.description,
      color: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {translation.about.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {translation.about.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {translation.about.story.title}
            </h3>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                {translation.about.story.paragraph1}
              </p>
              <p className="leading-relaxed">
                {translation.about.story.paragraph2}
              </p>
              <p className="leading-relaxed">
                {translation.about.story.paragraph3}
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our kitchen showroom"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 rounded-full opacity-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-500 rounded-full opacity-10"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} mb-4`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};