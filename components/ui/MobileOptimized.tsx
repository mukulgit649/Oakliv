'use client'

import { useEffect } from 'react'

export const MobileOptimized = () => {
  useEffect(() => {
    // Detect mobile devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    
    if (isMobile) {
      document.body.classList.add('is-mobile');
      
      // Add device-specific classes
      if (isIOS) {
        document.body.classList.add('is-ios');
      }
      if (isAndroid) {
        document.body.classList.add('is-android');
      }
    }

    // Prevent zoom on double tap for better mobile experience
    let lastTouchEnd = 0
    const preventZoom = (e: TouchEvent) => {
      const now = new Date().getTime()
      if (now - lastTouchEnd <= 300) {
        e.preventDefault()
      }
      lastTouchEnd = now
    }

    // Add touch event listeners
    document.addEventListener('touchend', preventZoom, { passive: false })

    // Prevent pull-to-refresh on mobile
    const preventPullToRefresh = (e: TouchEvent) => {
      if (e.touches.length !== 1) return
      
      const touch = e.touches[0]
      const target = e.target as Element
      
      // Allow pull-to-refresh only on specific elements
      if (target.closest('.allow-pull-refresh')) return
      
      // Prevent if scrolling up
      if (touch.clientY > 50) {
        e.preventDefault()
      }
    }

    document.addEventListener('touchstart', preventPullToRefresh, { passive: false })
    document.addEventListener('touchmove', preventPullToRefresh, { passive: false })

    // Optimize scroll performance
    const optimizeScroll = () => {
      document.body.style.overflow = 'auto'
      // @ts-ignore - webkitOverflowScrolling is a valid CSS property for iOS
      document.body.style.webkitOverflowScrolling = 'touch'
    }

    optimizeScroll()

    // PWA Installation Prompt
    let deferredPrompt: any = null;
    
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      deferredPrompt = e;
      
      // Show custom install prompt after 3 seconds
      setTimeout(() => {
        const installButton = document.createElement('div');
        installButton.innerHTML = `
          <div style="position: fixed; bottom: 20px; left: 20px; right: 20px; z-index: 1000; background: #4E342E; color: white; padding: 16px; border-radius: 12px; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
            <p style="margin: 0 0 12px 0; font-size: 14px;">Install Oakliv for better experience</p>
            <button id="install-app-btn" style="background: #D97706; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-size: 14px; cursor: pointer; margin-right: 8px; min-height: 44px;">Install</button>
            <button id="dismiss-install-btn" style="background: transparent; color: white; border: 1px solid white; padding: 8px 16px; border-radius: 6px; font-size: 14px; cursor: pointer; min-height: 44px;">Later</button>
          </div>
        `;
        
        document.body.appendChild(installButton);
        
        document.getElementById('install-app-btn')?.addEventListener('click', async () => {
          if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`User response to the install prompt: ${outcome}`);
            deferredPrompt = null;
          }
          installButton.remove();
        });
        
        document.getElementById('dismiss-install-btn')?.addEventListener('click', () => {
          installButton.remove();
        });
      }, 3000);
    };

    // Handle app installed
    const handleAppInstalled = () => {
      console.log('PWA was installed');
      // Remove install prompt if it exists
      const installPrompt = document.querySelector('[style*="position: fixed"]');
      if (installPrompt) {
        installPrompt.remove();
      }
    };

    // Add event listeners
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Add mobile-specific meta tags
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover');
    }

    // Add status bar styling for iOS
    if (isIOS) {
      const statusBarMeta = document.createElement('meta');
      statusBarMeta.name = 'apple-mobile-web-app-status-bar-style';
      statusBarMeta.content = 'default';
      document.head.appendChild(statusBarMeta);
    }

    return () => {
      // Cleanup
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      document.removeEventListener('touchend', preventZoom);
      document.removeEventListener('touchstart', preventPullToRefresh);
      document.removeEventListener('touchmove', preventPullToRefresh);
      document.body.classList.remove('is-mobile', 'is-ios', 'is-android');
    }
  }, [])

  return null
}
