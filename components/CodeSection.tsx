// CodeSection.tsx — drop into MediaDance marketing site
// Sits between the three feature cards and pricing

'use client';

import { useState } from 'react';
import styles from './CodeSection.module.scss';

const CURL_EXAMPLE = `$ curl -X POST https://api.mediadance.io/v1/rooms \\
  -H "x-telehealth-api-key: $MEDIADANCE_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "tenantID":        "tenant_clinical_prod_01",
    "roomReferenceID": "session_9821",
    "role":            "host"
  }'`;

const RESPONSE_EXAMPLE = `{
  "success": true,
  "room": {
    "sid":            "rm_sid_8f3a92bc71c",
    "secureRtcRoomID": "rm_sec_f293b7ad10c9"
  },
  "credentials": {
    "token":        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresAt":    "2026-05-31T09:05:00Z",
    "signalingUrl": "wss://router.mediadance.io:443"
  }
}`;

export default function CodeSection() {
  const [tab, setTab] = useState<'request' | 'response'>('request');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      tab === 'request' ? CURL_EXAMPLE : RESPONSE_EXAMPLE
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Left — narrative */}
        <div className={styles.narrative}>
          <p className={styles.label}>// integration</p>
          <h2 className={styles.headline}>
            One API call.<br />
            Room provisioned.<br />
            Session live.
          </h2>
          <p className={styles.body}>
            Your backend calls one endpoint.
            MediaDance issues a cryptographically signed token.
            Your client connects directly to the nearest edge node.
          </p>

          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNum}>01</span>
              <div>
                <div className={styles.stepTitle}>Provision the room</div>
                <div className={styles.stepDesc}>POST /v1/rooms from your backend. Never from the browser.</div>
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>02</span>
              <div>
                <div className={styles.stepTitle}>Receive signed token</div>
                <div className={styles.stepDesc}>RS256 asymmetric JWT. Role + room baked in. 5 minute expiry.</div>
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>03</span>
              <div>
                <div className={styles.stepTitle}>Client connects</div>
                <div className={styles.stepDesc}>Pass token to MediaDance SDK. P2P stream established. Done.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — terminal */}
        <div className={styles.terminal}>
          {/* Title bar */}
          <div className={styles.titleBar}>
            <div className={styles.dots}>
              <span className={`${styles.dot} ${styles.red}`} />
              <span className={`${styles.dot} ${styles.amber}`} />
              <span className={`${styles.dot} ${styles.green}`} />
            </div>
            <span className={styles.termTitle}>session_broker_handshake.sh</span>
            <button className={styles.copyBtn} onClick={handleCopy}>
              {copied ? '✓ copied' : 'copy'}
            </button>
          </div>

          {/* Tabs */}
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${tab === 'request' ? styles.activeTab : ''}`}
              onClick={() => setTab('request')}
            >
              request
            </button>
            <button
              className={`${styles.tab} ${tab === 'response' ? styles.activeTab : ''}`}
              onClick={() => setTab('response')}
            >
              response
            </button>
          </div>

          {/* Code */}
          <div className={styles.codeWrap}>
            {tab === 'request' ? (
              <pre className={styles.code}>
                <span className={styles.comment}>{'// Provision a room — server-side only'}</span>
                {'\n\n'}
                {CURL_EXAMPLE.split('\n').map((line, i) => (
                  <span key={i}>
                    {line.startsWith('$') ? (
                      <><span className={styles.prompt}>$</span>{line.slice(1)}</>
                    ) : line.includes('-H') ? (
                      <span className={styles.flag}>{line}</span>
                    ) : line.includes('"') ? (
                      <span className={styles.string}>{line}</span>
                    ) : (
                      line
                    )}
                    {'\n'}
                  </span>
                ))}
              </pre>
            ) : (
              <pre className={styles.code}>
                <span className={styles.comment}>{'// Room ready. Token issued. Client connects.'}</span>
                {'\n\n'}
                {RESPONSE_EXAMPLE.split('\n').map((line, i) => {
                  if (line.includes('"success"') || line.includes('true')) {
                    return <span key={i} className={styles.success}>{line}{'\n'}</span>;
                  }
                  if (line.includes('"token"')) {
                    return <span key={i} className={styles.highlight}>{line}{'\n'}</span>;
                  }
                  if (line.includes(':')) {
                    return <span key={i} className={styles.string}>{line}{'\n'}</span>;
                  }
                  return <span key={i}>{line}{'\n'}</span>;
                })}
              </pre>
            )}
          </div>

          {/* Status bar */}
          <div className={styles.statusBar}>
            <span className={styles.statusDot} />
            <span>room provisioned in &lt;200ms</span>
            <span className={styles.statusRight}>RS256 · wss · zero-persistence</span>
          </div>
        </div>

      </div>
    </section>
  );
}
