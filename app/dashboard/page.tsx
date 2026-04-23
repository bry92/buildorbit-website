'use client';

import Link from 'next/link';
import { Plus, Zap, Users, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white">Dashboard</h1>
            <p className="text-slate-400 mt-2">Welcome back! Here's your BuildOrbit overview.</p>
          </div>
          <Link
            href="/dashboard/new-build"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition"
          >
            <Plus className="w-5 h-5" /> New Build
          </Link>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Credits</p>
                <p className="text-3xl font-bold text-white">10</p>
              </div>
              <Zap className="w-8 h-8 text-cyan-400" />
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Builds</p>
                <p className="text-3xl font-bold text-white">0</p>
              </div>
              <Plus className="w-8 h-8 text-cyan-400" />
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Referrals</p>
                <p className="text-3xl font-bold text-white">0</p>
              </div>
              <Users className="w-8 h-8 text-cyan-400" />
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Trial Days Left</p>
                <p className="text-3xl font-bold text-white">3</p>
              </div>
              <TrendingUp className="w-8 h-8 text-cyan-400" />
            </div>
          </div>
        </div>

        {/* Recent Builds */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Builds</h2>
          <div className="text-center py-12">
            <p className="text-slate-400 mb-4">No builds yet. Create your first one!</p>
            <Link
              href="/dashboard/new-build"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition"
            >
              Create Build
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
