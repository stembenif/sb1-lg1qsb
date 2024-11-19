import React from 'react';
import { Search, Users, Mail, PhoneCall, BarChart, Target } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: <Search className="h-6 w-6 text-blue-600" />,
      title: "Identify Prospects",
      description: "We use advanced data mining to find your ideal potential customers."
    },
    {
      icon: <Target className="h-6 w-6 text-blue-600" />,
      title: "Qualify Leads",
      description: "Our AI algorithms score and qualify leads based on your criteria."
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Initial Contact",
      description: "Automated personalized email sequences start the conversation."
    },
    {
      icon: <PhoneCall className="h-6 w-6 text-blue-600" />,
      title: "Follow Up",
      description: "Our team handles calls and follow-ups to nurture relationships."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Hand-off",
      description: "Qualified leads are transferred to your sales team."
    },
    {
      icon: <BarChart className="h-6 w-6 text-blue-600" />,
      title: "Track & Optimize",
      description: "Continuous monitoring and optimization of the process."
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600">Our proven process to generate and convert leads</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}