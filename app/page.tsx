'use client';

import { useState } from 'react';

export default function MediaDanceMarketing() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleLeadCapture = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <main className="min-h-screen bg-black text-zinc-100 font-mono flex flex-col justify-between selection:bg-zinc-800 selection:text-white">
      {/* Structural Header Grid */}
      <header className="border-b border-zinc-900 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-black/50 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold tracking-widest uppercase text-white">MediaDance</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-xs text-zinc-400">
          <a href="#architecture" className="hover:text-white transition">SPECIFICATION</a>
          <a href="#features" className="hover:text-white transition">ISOLATION_MOAT</a>
          <a href="#compliance" className="hover:text-white transition">SECURITY</a>
        </nav>
      </header>

      {/* Hero Core Segment */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center flex-1 flex flex-col justify-center items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400 uppercase tracking-widest mb-6">
          <span>SLA BOUNDARY: ≤ 150MS ROUND-TRIP LATENCY</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white max-w-2xl leading-none uppercase">
          Sovereign Video Calling Infrastructure for Digital Health
        </h1>
        
        <p className="mt-6 text-sm text-zinc-400 max-w-xl leading-relaxed font-sans">
          Stop entanglement. Stop rebuilding complex media routing rules inside your consumer apps. Provision cryptographically isolated, zero-persistence WebRTC channels globally via the MediaDance single-hop gateway.
        </p>

        {/* Developer Sandbox Lead Form */}
        <div className="mt-10 w-full max-w-md">
          {submitted ? (
            <div className="border border-emerald-500/30 bg-emerald-950/20 rounded-xl p-4 text-xs text-emerald-400 border-dashed">
              [ACCESS_GRANTED]: Documentation token and sandbox configuration keys dispatched to your terminal wrapper.
            </div>
          ) : (
            <form onSubmit={handleLeadCapture} className="flex flex-col sm:flex-row gap-2 border border-zinc-800 p-1.5 rounded-xl bg-zinc-950/50 backdrop-blur-sm">
              <input 
                type="email" 
                placeholder="developer@institution.org"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-transparent px-4 py-2.5 text-xs focus:outline-none text-white font-mono placeholder:text-zinc-600"
              />
              <button 
                type="submit"
                className="bg-white text-black font-bold text-xs px-5 py-2.5 rounded-lg hover:bg-zinc-200 transition uppercase tracking-wide whitespace-nowrap"
              >
                Request Access Token
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Technical Feature Matrix Grid */}
      <section id="architecture" className="border-t border-zinc-900 bg-zinc-950/40 px-6 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="border border-zinc-900 p-6 rounded-2xl bg-zinc-950">
            <div className="text-xs text-zinc-500 font-bold mb-3">[01 // ISOLATION]</div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Multi-Tenant Routing Moat</h3>
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-sans">
              Room contexts scale independently. Multi-tenant logic separates identities directly at the WebSocket handshake layer, eliminating cross-contamination or packet bleeding risks.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-zinc-900 p-6 rounded-2xl bg-zinc-950">
            <div className="text-xs text-zinc-500 font-bold mb-3">[02 // LATENCY]</div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Single-Hop SFU Network</h3>
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-sans">
              Media tracks execute over decentralized edge routers. Core parent apps handle metadata only, bypassing proxy latency drops to secure true peer-to-peer real-time clarity.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-zinc-900 p-6 rounded-2xl bg-zinc-950">
            <div className="text-xs text-zinc-500 font-bold mb-3">[03 // PIPELINES]</div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">High-Fidelity Ambient Tap</h3>
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-sans">
              Fork audio channels simultaneously straight into volatile memory queues. Deliver raw, uncompressed byte blocks directly to your analytical endpoints the millisecond a call terminates.
            </p>
          </div>

        </div>
      </section>

      {/* Terminal Blueprint Interactive Mock */}
      <section className="border-t border-zinc-900 px-6 py-12 max-w-4xl mx-auto w-full">
        <div className="bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden shadow-2xl">
          <div className="bg-zinc-900/50 px-4 py-2 border-b border-zinc-900 flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
            <span className="text-[10px] text-zinc-500 ml-2 font-mono">session_broker_handshake.sh</span>
          </div>
          <pre className="p-4 overflow-x-auto text-[11px] leading-relaxed text-zinc-400 selection:bg-zinc-800">
{`$ curl -X POST https://api.mediadance.io/v1/rooms \\
  -H "x-platform-api-key: $MEDIADANCE_KEY" \\
  -d '{ "tenantID": "tenant_clinical_prod_01", "roomReferenceID": "session_9821" }'

{
  "success": true,
  "room": {
    "sid": "rm_sid_8f3a92bc71c",
    "secureRtcRoomID": "f293b7ad10c93ef8329a1"
  },
  "credentials": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "signalingUrl": "wss://router.mediadance.io:3001"
  }
}`}
          </pre>
        </div>
      </section>
      {/* Deep Technical Specification Section */}
<section id="specification" className="border-t border-zinc-900 bg-zinc-950/20 px-6 py-16">
  <div className="max-w-4xl mx-auto">
    <div className="text-left mb-10">
      <div className="text-xs text-zinc-500 font-mono font-bold uppercase tracking-widest">[ SYSTEM_TOPOLOGY_SPEC ]</div>
      <h2 className="text-xl font-bold text-white uppercase tracking-tighter mt-2">Zero-Proxy Real-Time Routing</h2>
    </div>

    <div className="space-y-8 font-sans text-xs text-zinc-400 leading-relaxed">
      <div className="border border-zinc-900 p-6 rounded-xl bg-black/40">
        <span className="font-mono text-white font-bold block mb-1">1. CONTROL PLANE SEPARATION</span>
        Your parent application backend only handles room metadata and lifecycle events via our REST gateway. It never touches a single live media packet. This complete separation keeps your core patient databases completely isolated from heavy real-time streaming overhead.
      </div>

      <div className="border border-zinc-900 p-6 rounded-xl bg-black/40">
        <span className="font-mono text-white font-bold block mb-1">2. DIRECT SINGLE-HOP EDGES</span>
        When a clinical session initializes, the client browser establishes an encrypted WebRTC peer connection straight to decentralized MediaDance edge routers. Media packets travel directly between users and the closest regional hardware node, locking in a strict ≤ 150MS round-trip latency boundary.
      </div>

      <div className="border border-zinc-900 p-6 rounded-xl bg-black/40">
        <span className="font-mono text-white font-bold block mb-1">3. VOLATILE MEMORY AUDIO TAP</span>
        Raw RTP audio streams are forked natively inside a high-speed RAM buffer the millisecond they hit the media server. No disk writes, no public internet routing during active calls, and zero data persistence. When the session terminates, the raw byte blocks are instantly fired to your registered ingest webhooks.
      </div>
    </div>
  </div>
</section>

      {/* Pricing & Tenant Tier Matrix */}
{/* Three-Column Pricing Matrix Section */}
<section id="pricing" className="border-t border-zinc-900 bg-black px-6 py-16">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-xs font-bold text-white uppercase tracking-widest">[ COMMERCIALLY ISOLATED LEASE TIERS ]</h2>
      <p className="text-xs text-zinc-500 mt-2 font-sans">Scale your operational footprint without code entanglement.</p>
    </div>

    {/* Responsive 3-Column Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Column 1: Startup Sandbox */}
      <div className="border border-zinc-900 p-6 rounded-xl bg-zinc-950/40 flex flex-col justify-between hover:border-zinc-800 transition">
        <div>
          <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider font-mono">01 // STARTUP SANDBOX</div>
          <div className="text-2xl font-bold text-white mt-4 font-mono">$149<span className="text-xs text-zinc-600 font-normal">/mo</span></div>
          <p className="mt-4 text-xs text-zinc-400 font-sans leading-relaxed min-h-[80px]">
            Perfect for early stage deployment instances like InstaDR Lite. Includes full multi-tenant handshake validation and standard WebRTC media channels.
          </p>
          <ul className="mt-6 space-y-2 text-[11px] text-zinc-500 font-mono tracking-wide border-t border-zinc-900/50 pt-4">
            <li>• Max 1,000 Concurrent Rooms</li>
            <li>• Standard Edge Routing</li>
            <li>• Webhook Post-Call Dispatches</li>
          </ul>
        </div>
        <button className="w-full mt-8 bg-zinc-900 hover:bg-zinc-800 text-white text-[11px] font-bold py-2.5 rounded-lg transition uppercase tracking-wider border border-zinc-800">
          Provision
        </button>
      </div>

      {/* Column 2: Institutional Scale */}
      <div className="border border-zinc-800 p-6 rounded-xl bg-zinc-950/80 flex flex-col justify-between relative overflow-hidden hover:border-zinc-700 transition shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-emerald-500" />
        <div>
          <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider font-mono flex items-center justify-between">
            <span>02 // INSTITUTIONAL SCALE</span>
            <span className="text-[8px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-mono font-normal">PROD</span>
          </div>
          <div className="text-2xl font-bold text-white mt-4 font-mono">$599<span className="text-xs text-zinc-600 font-normal">/mo</span></div>
          <p className="mt-4 text-xs text-zinc-300 font-sans leading-relaxed min-h-[80px]">
            Engineered for high-volume healthcare networks like ZenSpace Clinical. Unlocks parallel volatile memory buffers for real-time transcription streaming.
          </p>
          <ul className="mt-6 space-y-2 text-[11px] text-zinc-400 font-mono tracking-wide border-t border-zinc-800 pt-4">
            <li>• Unlimited Tenant Key Gen</li>
            <li>• Live RAM Audio Tap Forking</li>
            <li>• Dedicated Regional SFU Nodes</li>
          </ul>
        </div>
        <button className="w-full mt-8 bg-white hover:bg-zinc-200 text-black text-[11px] font-bold py-2.5 rounded-lg transition uppercase tracking-wider">
          Deploy Link
        </button>
      </div>

      {/* Column 3: Dedicated Infrastructure */}
      <div className="border border-zinc-900 p-6 rounded-xl bg-zinc-950/40 flex flex-col justify-between hover:border-zinc-800 transition">
        <div>
          <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider font-mono">03 // GLOBAL DEDICATED</div>
          <div className="text-2xl font-bold text-white mt-4 font-mono">$1,899<span className="text-xs text-zinc-600 font-normal">/mo</span></div>
          <p className="mt-4 text-xs text-zinc-400 font-sans leading-relaxed min-h-[80px]">
            Isolated physical iron deployments for multi-region hospital ecosystems. Zero shared hardware footprints and un-throttled core media assets.
          </p>
          <ul className="mt-6 space-y-2 text-[11px] text-zinc-500 font-mono tracking-wide border-t border-zinc-900/50 pt-4">
            <li>• Physical Hardware Isolation</li>
            <li>• BGP Anycast Edge Routing</li>
            <li>• Custom Encryption Handshakes</li>
          </ul>
        </div>
        <button className="w-full mt-8 bg-zinc-900 hover:bg-zinc-800 text-white text-[11px] font-bold py-2.5 rounded-lg transition uppercase tracking-wider border border-zinc-800">
          Request Core
        </button>
      </div>

    </div>
  </div>
</section>

      {/* Global Ledger Footer */}
      <footer className="border-t border-zinc-900 px-6 py-6 text-[10px] text-zinc-600 flex flex-col sm:flex-row justify-between gap-4">
        <span>© 2026 MEDIADANCE_INFRASTRUCTURE_GROUP. RIGHTS RESERVED.</span>
        <span>STATUS: ALL REPLICAS OPERATIONAL // PORT_3001_ACTIVE</span>
      </footer>
    </main>
  );
}