
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calendar, Filter, RefreshCw, TrendingUp, TrendingDown, Zap } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart } from 'recharts';

const InteractiveDashboard = () => {
  const [dateRange, setDateRange] = useState('last-30-days');
  const [comparisonMode, setComparisonMode] = useState('mom');
  const [isRealTime, setIsRealTime] = useState(true);

  const realtimeData = [
    { time: '09:00', visitors: 124, conversions: 12, revenue: 2400 },
    { time: '10:00', visitors: 185, conversions: 18, revenue: 3600 },
    { time: '11:00', visitors: 243, conversions: 24, revenue: 4800 },
    { time: '12:00', visitors: 298, conversions: 35, revenue: 7000 },
    { time: '13:00', visitors: 387, conversions: 42, revenue: 8400 },
    { time: '14:00', visitors: 425, conversions: 38, revenue: 7600 },
    { time: '15:00', visitors: 354, conversions: 29, revenue: 5800 }
  ];

  const comparisonData = [
    { period: 'Week 1', current: 2400, previous: 2100, growth: 14.3 },
    { period: 'Week 2', current: 1398, previous: 1800, growth: -22.3 },
    { period: 'Week 3', current: 9800, previous: 8500, growth: 15.3 },
    { period: 'Week 4', current: 3908, previous: 3200, growth: 22.1 }
  ];

  const drillDownData = [
    { source: 'Email Campaign', visits: 1234, conversions: 156, rate: 12.6 },
    { source: 'Social Media', visits: 892, conversions: 78, rate: 8.7 },
    { source: 'Direct Traffic', visits: 2156, conversions: 324, rate: 15.0 },
    { source: 'Organic Search', visits: 1678, conversions: 201, rate: 12.0 },
    { source: 'Paid Ads', visits: 987, conversions: 134, rate: 13.6 }
  ];

  return (
    <div className="space-y-6">
      {/* Controls */}
      <Card className="border border-slate-200 bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg font-semibold text-slate-800">Interactive Dashboard Controls</CardTitle>
              <CardDescription className="text-slate-600">
                Customize your view with advanced filtering and comparison options
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant={isRealTime ? "default" : "secondary"} style={{ backgroundColor: '#10b981', color: 'white' }}>
                <Zap className="h-3 w-3 mr-1" />
                {isRealTime ? 'Live' : 'Static'}
              </Badge>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsRealTime(!isRealTime)}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Toggle Real-time
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-slate-600" />
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="yesterday">Yesterday</SelectItem>
                  <SelectItem value="last-7-days">Last 7 days</SelectItem>
                  <SelectItem value="last-30-days">Last 30 days</SelectItem>
                  <SelectItem value="last-90-days">Last 90 days</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-slate-600" />
              <Select value={comparisonMode} onValueChange={setComparisonMode}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mom">Month over Month</SelectItem>
                  <SelectItem value="yoy">Year over Year</SelectItem>
                  <SelectItem value="wow">Week over Week</SelectItem>
                  <SelectItem value="dod">Day over Day</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-time Performance */}
      <Card className="border border-slate-200 bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-800">Real-time Performance</CardTitle>
          <CardDescription className="text-slate-600">
            Live updates every 30 seconds
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={realtimeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="time" stroke="#64748B" />
              <YAxis yAxisId="left" stroke="#64748B" />
              <YAxis yAxisId="right" orientation="right" stroke="#64748B" />
              <Tooltip />
              <Area yAxisId="left" type="monotone" dataKey="visitors" fill="#3B82F6" fillOpacity={0.3} stroke="#1E40AF" />
              <Bar yAxisId="right" dataKey="conversions" fill="#ff6b35" />
              <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#c3073f" strokeWidth={2} />
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Comparison Analysis */}
        <Card className="border border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-800">Comparison Analysis</CardTitle>
            <CardDescription className="text-slate-600">
              Current vs Previous Period ({comparisonMode.toUpperCase()})
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="period" stroke="#64748B" />
                <YAxis stroke="#64748B" />
                <Tooltip />
                <Bar dataKey="current" fill="#1e3d59" name="Current" />
                <Bar dataKey="previous" fill="#94A3B8" name="Previous" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Drill-down Analysis */}
        <Card className="border border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-800">Source Performance</CardTitle>
            <CardDescription className="text-slate-600">
              Click to drill down into detailed metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {drillDownData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 cursor-pointer border border-slate-100">
                  <div>
                    <p className="font-medium text-slate-800">{item.source}</p>
                    <p className="text-sm text-slate-600">{item.visits} visits • {item.conversions} conversions</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-sm" style={{ borderColor: '#ff6b35', color: '#ff6b35' }}>
                      {item.rate}%
                    </Badge>
                    {item.rate > 12 ? (
                      <TrendingUp className="h-4 w-4" style={{ color: '#10b981' }} />
                    ) : (
                      <TrendingDown className="h-4 w-4" style={{ color: '#ef4444' }} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Growth Metrics */}
      <Card className="border border-slate-200 bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-800">Growth Trends</CardTitle>
          <CardDescription className="text-slate-600">
            Period-over-period growth analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {comparisonData.map((item, index) => (
              <div key={index} className="text-center p-4 rounded-lg border border-slate-100">
                <p className="text-sm font-medium text-slate-600">{item.period}</p>
                <p className="text-2xl font-bold text-slate-800">{item.current.toLocaleString()}</p>
                <div className="flex items-center justify-center mt-2">
                  {item.growth > 0 ? (
                    <TrendingUp className="h-4 w-4 mr-1" style={{ color: '#10b981' }} />
                  ) : (
                    <TrendingDown className="h-4 w-4 mr-1" style={{ color: '#ef4444' }} />
                  )}
                  <span className={`text-sm font-medium`} style={{ color: item.growth > 0 ? '#10b981' : '#ef4444' }}>
                    {item.growth > 0 ? '+' : ''}{item.growth}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveDashboard;
