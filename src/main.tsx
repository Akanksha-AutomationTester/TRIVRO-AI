
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Register Service Worker for PWA functionality
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered successfully:', registration.scope);
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error);
      });
  });
}

// Remove dark mode class addition
createRoot(document.getElementById("root")!).render(<App />);
