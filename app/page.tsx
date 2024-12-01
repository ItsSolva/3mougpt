'use client';

import Chat from './components/Chat';

export default function Home() {
  return (
    <main className="App">
      <div className='container'>
        <div className='logoBox'>
          <img src="/logo.png" alt="3mouGPT logo" width="30%" height="auto" />
          <p>Meet your new favorite uncle, 3mouGPT! Ask him anything you want.</p>
        </div>
        <Chat />
      </div>
    </main>
  )
}