import React from 'react';
import { 
  LineChart, 
  UserCheck, 
  Mail, 
  PhoneCall, 
  MessageSquare, 
  BarChart2 
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <LineChart className="h-6 w-6 text-blue-600" />,
      title: "Advanced Analytics",
      description: "Track and analyze lead behavior with detailed insights and reporting."
    },
    {
      icon: <UserCheck className="h-6 w-6 text-blue-600" />,
      title: "Lead Scoring",
      description: "Automatically rank and prioritize leads based on engagement and interest."
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email Automation",
      description: "Nurture leads with personalized email sequences and follow-ups."
    },
    {
      icon: <PhoneCall className="h-6 w-6 text-blue-600" />,
      title: "Call Tracking",
      description: "Monitor and record calls to improve conversion strategies."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
      title: "Live Chat",
      description: "Engage with visitors in real-time to capture more leads."
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-600" />,
      title: "Performance Reports",
      description: "Get detailed reports on campaign performance and ROI."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Powerful Features</h2>
          <p className="mt-4 text-xl text-gray-600">Everything you need to generate and convert leads</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}