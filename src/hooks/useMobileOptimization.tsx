
import { useState, useEffect } from 'react';

interface MobileOptimizationHook {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  orientation: 'portrait' | 'landscape';
  touchEnabled: boolean;
  installPrompt: any;
  canInstall: boolean;
  installPWA: () => Promise<void>;
}

export const useMobileOptimization = (): MobileOptimizationHook => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('landscape');
  const [touchEnabled, setTouchEnabled] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      const mobile = width < 768;
      const tablet = width >= 768 && width < 1024;
      const desktop = width >= 1024;

      setIsMobile(mobile);
      setIsTablet(tablet);
      setIsDesktop(desktop);
    };

    const checkOrientation = () => {
      setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
    };

    const checkTouchSupport = () => {
      setTouchEnabled('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    // Initial checks
    checkDeviceType();
    checkOrientation();
    checkTouchSupport();

    // Event listeners
    window.addEventListener('resize', checkDeviceType);
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    // PWA Install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
      setCanInstall(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('resize', checkDeviceType);
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const installPWA = async () => {
    if (!installPrompt) return;

    const result = await installPrompt.prompt();
    console.log('PWA install result:', result);
    setInstallPrompt(null);
    setCanInstall(false);
  };

  return {
    isMobile,
    isTablet,
    isDesktop,
    orientation,
    touchEnabled,
    installPrompt,
    canInstall,
    installPWA
  };
};
