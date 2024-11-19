import React from 'react';
import { ArrowRight, Target, Users, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Your Lead Generation
            <span className="text-blue-600"> On Autopilot</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We handle everything from prospect identification to qualified lead hand-off. Focus on closing deals while we fill your pipeline with high-quality leads.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="group bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2">
              Start Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-gray-600 hover:text-blue-600 transition-colors px-8 py-3">
              Schedule Demo
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-blue-100 p-3 rounded-full">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold">Smart Prospecting</h3>
              <p className="text-gray-600">AI-powered lead finding</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold">Automated Outreach</h3>
              <p className="text-gray-600">Multi-channel contact</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-blue-100 p-3 rounded-full">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold">Qualified Leads</h3>
              <p className="text-gray-600">Ready for conversion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}