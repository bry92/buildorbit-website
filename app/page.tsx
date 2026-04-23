'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Code, Rocket, Users, TrendingUp, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            🚀 BuildOrbit
          </div>
          <div className="flex items-center gap-8">
            <Link href="/docs" className="text-slate-300 hover:text-white transition">
              Docs
            </Link>
            <Link href="/pricing" className="text-slate-300 hover:text-white transition">
              Pricing
            </Link>
            <Link href="/login" className="text-slate-300 hover:text-white transition">
              Sign In
            </Link>
            <Link
              href="/signup"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <span className="text-cyan-400 text-sm font-semibold">✨ AI-Powered App Builder</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Build Production-Ready Apps
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              in Minutes, Not Months
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            BuildOrbit uses AI to generate complete, production-ready applications. From landing pages to full-stack platforms, describe your idea and watch it come to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/signup"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition flex items-center justify-center gap-2"
            >
              Start Building Free <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/docs"
              className="border border-slate-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:border-slate-400 transition"
            >
              View Documentation
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-cyan-400">10+</div>
              <div className="text-slate-400">App Types</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">6</div>
              <div className="text-slate-400">Phase Pipeline</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">100%</div>
              <div className="text-slate-400">Production Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Why BuildOrbit?</h2>
          <p className="text-slate-300 text-center mb-16 max-w-2xl mx-auto">
            Everything you need to build and deploy production-ready applications
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
              <p className="text-slate-300">Generate complete apps in minutes using AI. No more waiting days for development.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Full Source Code</h3>
              <p className="text-slate-300">Get complete, production-ready source code. Customize, deploy, and own your application.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Deploy Anywhere</h3>
              <p className="text-slate-300">Docker, Kubernetes, Vercel, AWS — deploy to any platform with included configurations.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">All App Types</h3>
              <p className="text-slate-300">Web apps, mobile apps, full-stack platforms, landing pages, and more.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Scalable Architecture</h3>
              <p className="text-slate-300">Built for scale with microservices, caching, load balancing, and real-time features.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-slate-300">GDPR, HIPAA, SOC 2, PCI DSS compliance built-in. Security by default.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">The BuildOrbit Pipeline</h2>

          <div className="grid md:grid-cols-6 gap-4">
            {[
              { num: '1', title: 'Intent Gate', desc: 'Analyze your idea' },
              { num: '2', title: 'Plan', desc: 'Design architecture' },
              { num: '3', title: 'Scaffold', desc: 'Create structure' },
              { num: '4', title: 'Code', desc: 'Generate code' },
              { num: '5', title: 'Save', desc: 'Version control' },
              { num: '6', title: 'Verify', desc: 'Quality checks' },
            ].map((phase, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{phase.num}</div>
                  <h3 className="text-white font-bold mb-1">{phase.title}</h3>
                  <p className="text-slate-400 text-sm">{phase.desc}</p>
                </div>
                {idx < 5 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Simple Pricing</h2>
          <p className="text-slate-300 text-center mb-16 max-w-2xl mx-auto">
            Start free with 10 credits. Upgrade anytime or earn credits through referrals.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: 'Free',
                price: '$0',
                builds: '1/month',
                credits: '10',
                features: ['1 build/month', 'No downloads', 'Web templates'],
              },
              {
                name: 'Starter',
                price: '$29',
                period: '/month',
                builds: '10/month',
                credits: '10',
                features: ['10 builds/month', '5 downloads', 'Web + Mobile', 'Priority support'],
                highlighted: true,
              },
              {
                name: 'Pro',
                price: '$99',
                period: '/month',
                builds: '50/month',
                credits: '50',
                features: ['50 builds/month', '25 downloads', 'All app types', 'API access', 'Advanced analytics'],
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                builds: 'Unlimited',
                credits: 'Unlimited',
                features: ['Unlimited builds', 'White-label', 'Dedicated support', 'Custom integrations'],
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-8 transition ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500 scale-105'
                    : 'bg-slate-800/50 border border-slate-700'
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                  {plan.period && <span className="text-slate-400">{plan.period}</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-slate-300 flex items-center gap-2">
                      <span className="text-cyan-400">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-bold transition ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/50'
                      : 'border border-slate-600 text-white hover:border-slate-400'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Get 10 free credits, 3-day unlimited trial, and earn 25 credits per referral.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition"
          >
            Start Building Now →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold text-cyan-400 mb-4">BuildOrbit</div>
              <p className="text-slate-400">AI-powered app builder for the modern web.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/features" className="hover:text-white transition">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
                <li><Link href="/docs" className="hover:text-white transition">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/privacy" className="hover:text-white transition">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">Terms</Link></li>
                <li><Link href="/security" className="hover:text-white transition">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2026 BuildOrbit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
