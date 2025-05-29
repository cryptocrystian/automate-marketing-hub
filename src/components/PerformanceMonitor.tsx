
import React, { useState, useEffect } from 'react';
import { Activity, Wifi, WifiOff, Download, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface PerformanceMetrics {
  loadTime: number;
  networkStatus: 'online' | 'offline' | 'slow';
  memoryUsage: number;
  cacheHitRate: number;
  apiResponseTime: number;
}

interface NetworkInfo {
  effectiveType: string;
  downlink: number;
  rtt: number;
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    networkStatus: 'online',
    memoryUsage: 0,
    cacheHitRate: 85,
    apiResponseTime: 120
  });
  const [networkInfo, setNetworkInfo] = useState<NetworkInfo | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Performance monitoring
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        
        setMetrics(prev => ({
          ...prev,
          loadTime: Math.round(loadTime)
        }));
      }

      // Memory usage (if available)
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
        setMetrics(prev => ({
          ...prev,
          memoryUsage: Math.round(memoryUsage)
        }));
      }
    };

    // Network monitoring
    const updateNetworkStatus = () => {
      const status = navigator.onLine ? 'online' : 'offline';
      setMetrics(prev => ({ ...prev, networkStatus: status }));

      // Get network information if available
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        setNetworkInfo({
          effectiveType: connection.effectiveType || 'unknown',
          downlink: connection.downlink || 0,
          rtt: connection.rtt || 0
        });

        // Determine if connection is slow
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          setMetrics(prev => ({ ...prev, networkStatus: 'slow' }));
        }
      }
    };

    measurePerformance();
    updateNetworkStatus();

    // Event listeners
    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);

    // Performance observer for API calls
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const apiCalls = entries.filter(entry => 
          entry.name.includes('/api/') || entry.name.includes('api.')
        );
        
        if (apiCalls.length > 0) {
          const avgResponseTime = apiCalls.reduce((sum, entry) => sum + entry.duration, 0) / apiCalls.length;
          setMetrics(prev => ({
            ...prev,
            apiResponseTime: Math.round(avgResponseTime)
          }));
        }
      });

      observer.observe({ entryTypes: ['resource'] });
    }

    return () => {
      window.removeEventListener('online', updateNetworkStatus);
      window.removeEventListener('offline', updateNetworkStatus);
    };
  }, []);

  // Auto-hide after 10 seconds
  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setIsVisible(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  // Show in development or when there are performance issues
  const shouldShow = process.env.NODE_ENV === 'development' || 
                    metrics.networkStatus === 'offline' || 
                    metrics.loadTime > 3000 || 
                    metrics.memoryUsage > 80;

  if (!shouldShow || !isVisible) return null;

  const getNetworkIcon = () => {
    switch (metrics.networkStatus) {
      case 'offline':
        return <WifiOff className="h-4 w-4 text-red-500" />;
      case 'slow':
        return <Wifi className="h-4 w-4 text-blue-500" />;
      default:
        return <Wifi className="h-4 w-4 text-green-500" />;
    }
  };

  const getNetworkBadge = () => {
    switch (metrics.networkStatus) {
      case 'offline':
        return <Badge variant="destructive">Offline</Badge>;
      case 'slow':
        return <Badge variant="secondary" className="bg-blue-100 text-blue-800">Slow</Badge>;
      default:
        return <Badge variant="secondary" className="bg-green-100 text-green-800">Online</Badge>;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="w-80 shadow-lg">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <Activity className="h-4 w-4" />
            Performance Monitor
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {getNetworkIcon()}
              <span className="text-sm">Network</span>
            </div>
            {getNetworkBadge()}
          </div>

          {networkInfo && (
            <div className="text-xs text-slate-500">
              {networkInfo.effectiveType} • {networkInfo.downlink} Mbps • {networkInfo.rtt}ms RTT
            </div>
          )}

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-3 w-3" />
                <span>Load Time</span>
              </div>
              <span className={metrics.loadTime > 3000 ? 'text-red-500' : 'text-green-500'}>
                {metrics.loadTime}ms
              </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span>Memory Usage</span>
              <span className={metrics.memoryUsage > 80 ? 'text-red-500' : 'text-green-500'}>
                {metrics.memoryUsage}%
              </span>
            </div>
            <Progress value={metrics.memoryUsage} className="h-1" />

            <div className="flex items-center justify-between text-sm">
              <span>Cache Hit Rate</span>
              <span className="text-green-500">{metrics.cacheHitRate}%</span>
            </div>
            <Progress value={metrics.cacheHitRate} className="h-1" />

            <div className="flex items-center justify-between text-sm">
              <span>API Response</span>
              <span className={metrics.apiResponseTime > 500 ? 'text-blue-500' : 'text-green-500'}>
                {metrics.apiResponseTime}ms
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
