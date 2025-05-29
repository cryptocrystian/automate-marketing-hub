import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { TrendingUp, TrendingDown, AlertTriangle, Target, Brain, Zap, Bell, CheckCircle } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart } from 'recharts';

const PredictiveAnalytics = () => {
  const [selectedModel, setSelectedModel] = useState('traffic');

  const predictionData = [
    { month: 'Jan', actual: 2400, predicted: 2350, confidence: 85 },
    { month: 'Feb', actual: 1398, predicted: 1450, confidence: 82 },
    { month: 'Mar', actual: 9800, predicted: 9500, confidence: 78 },
    { month: 'Apr', actual: 3908, predicted: 4100, confidence: 88 },
    { month: 'May', actual: null, predicted: 4800, confidence: 85 },
    { month: 'Jun', actual: null, predicted: 5200, confidence: 82 },
    { month: 'Jul', actual: null, predicted: 5500, confidence: 79 }
  ];

  const forecastModels = [
    { id: 'traffic', name: 'Traffic Forecasting', accuracy: 87, status: 'Active' },
    { id: 'revenue', name: 'Revenue Prediction', accuracy: 92, status: 'Active' },
    { id: 'churn', name: 'Churn Prediction', accuracy: 89, status: 'Active' },
    { id: 'conversion', name: 'Conversion Rate', accuracy: 84, status: 'Training' }
  ];

  const anomalies = [
    { 
      type: 'Traffic Drop', 
      severity: 'High', 
      detected: '2 hours ago', 
      description: '45% decrease in organic traffic',
      action: 'Check SEO rankings'
    },
    { 
      type: 'Conversion Spike', 
      severity: 'Medium', 
      detected: '6 hours ago', 
      description: '23% increase in email conversions',
      action: 'Analyze successful elements'
    },
    { 
      type: 'Bounce Rate', 
      severity: 'Low', 
      detected: '1 day ago', 
      description: 'Bounce rate trending upward',
      action: 'Review page performance'
    }
  ];

  const optimizationRecommendations = [
    {
      title: 'Increase Email Frequency',
      impact: 'High',
      effort: 'Low',
      expectedLift: '+15%',
      description: 'Data suggests your audience is receptive to more frequent communication'
    },
    {
      title: 'Optimize Mobile Experience',
      impact: 'High',
      effort: 'Medium',
      expectedLift: '+22%',
      description: 'Mobile conversion rate is 40% below desktop average'
    },
    {
      title: 'A/B Test Subject Lines',
      impact: 'Medium',
      effort: 'Low',
      expectedLift: '+8%',
      description: 'Personalized subject lines show 12% higher open rates'
    },
    {
      title: 'Implement Exit-Intent Popups',
      impact: 'Medium',
      effort: 'Medium',
      expectedLift: '+18%',
      description: 'Reduce bounce rate and capture more leads'
    }
  ];

  const alerts = [
    { id: 1, type: 'warning', message: 'Traffic projection 15% below target for Q2', timestamp: '5 min ago' },
    { id: 2, type: 'success', message: 'Email campaign performance exceeding predictions', timestamp: '1 hour ago' },
    { id: 3, type: 'error', message: 'Unusual spike in bounce rate detected', timestamp: '2 hours ago' },
    { id: 4, type: 'info', message: 'Monthly forecast model updated with new data', timestamp: '1 day ago' }
  ];

  return (
    <div className="space-y-6">
      {/* Model Overview */}
      <Card className="border border-slate-200 bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-800">Predictive Models Dashboard</CardTitle>
          <CardDescription className="text-slate-600">
            AI-powered forecasting and trend analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {forecastModels.map((model) => (
              <div 
                key={model.id}
                className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                  selectedModel === model.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
                onClick={() => setSelectedModel(model.id)}
              >
                <div className="flex items-center justify-between mb-2">
                  <Brain className="h-5 w-5 text-blue-600" />
                  <Badge 
                    variant={model.status === 'Active' ? 'default' : 'secondary'}
                    className={model.status === 'Active' ? 'bg-green-600 text-white' : ''}
                  >
                    {model.status}
                  </Badge>
                </div>
                <h4 className="font-medium text-slate-800 mb-1">{model.name}</h4>
                <p className="text-sm text-slate-600">Accuracy: {model.accuracy}%</p>
                <Progress value={model.accuracy} className="mt-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trend Predictions */}
        <Card className="border border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-800">Trend Predictions</CardTitle>
            <CardDescription className="text-slate-600">
              AI forecast vs actual performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={predictionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="month" stroke="#64748B" />
                <YAxis stroke="#64748B" />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="predicted" 
                  fill="#3B82F6" 
                  fillOpacity={0.2} 
                  stroke="#1E40AF" 
                  strokeWidth={2}
                  name="Predicted"
                />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#10B981" 
                  strokeWidth={3}
                  name="Actual"
                />
              </ComposedChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm text-slate-600">Next Month</p>
                <p className="text-xl font-bold text-slate-800">4,800</p>
                <p className="text-sm text-green-600">+23% growth</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Confidence</p>
                <p className="text-xl font-bold text-slate-800">85%</p>
                <p className="text-sm text-slate-600">High accuracy</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Trend</p>
                <div className="flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-green-600 mr-1" />
                  <span className="text-xl font-bold text-green-600">+15%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Anomaly Detection */}
        <Card className="border border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-800">Anomaly Detection</CardTitle>
            <CardDescription className="text-slate-600">
              Real-time alerts for unusual patterns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {anomalies.map((anomaly, index) => (
                <Alert key={index} className={`border-l-4 ${
                  anomaly.severity === 'High' ? 'border-l-red-500 bg-red-50' :
                  anomaly.severity === 'Medium' ? 'border-l-blue-500 bg-blue-50' :
                  'border-l-blue-500 bg-blue-50'
                }`}>
                  <AlertTriangle className={`h-4 w-4 ${
                    anomaly.severity === 'High' ? 'text-red-600' :
                    anomaly.severity === 'Medium' ? 'text-blue-600' :
                    'text-blue-600'
                  }`} />
                  <AlertDescription>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-slate-800">{anomaly.type}</h4>
                      <Badge 
                        variant="outline"
                        className={
                          anomaly.severity === 'High' ? 'border-red-200 text-red-700' :
                          anomaly.severity === 'Medium' ? 'border-blue-200 text-blue-700' :
                          'border-blue-200 text-blue-700'
                        }
                      >
                        {anomaly.severity}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-2">{anomaly.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">{anomaly.detected}</span>
                      <Button variant="outline" size="sm">
                        {anomaly.action}
                      </Button>
                    </div>
                  </AlertDescription>
                </Alert>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Optimization Recommendations */}
      <Card className="border border-slate-200 bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-800">AI Optimization Recommendations</CardTitle>
          <CardDescription className="text-slate-600">
            Data-driven suggestions to improve performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {optimizationRecommendations.map((rec, index) => (
              <div key={index} className="p-4 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-slate-800">{rec.title}</h4>
                  <Badge className="bg-green-600 text-white">{rec.expectedLift}</Badge>
                </div>
                <p className="text-sm text-slate-600 mb-3">{rec.description}</p>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      <Target className="h-4 w-4 text-blue-600 mr-1" />
                      <span className="text-sm text-slate-600">Impact: {rec.impact}</span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="h-4 w-4 text-blue-600 mr-1" />
                      <span className="text-sm text-slate-600">Effort: {rec.effort}</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Implement
                  </Button>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Alert System */}
      <Card className="border border-slate-200 bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg font-semibold text-slate-800">Smart Alert System</CardTitle>
              <CardDescription className="text-slate-600">
                Proactive notifications for critical events
              </CardDescription>
            </div>
            <Button variant="outline">
              <Bell className="h-4 w-4 mr-2" />
              Configure Alerts
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div key={alert.id} className="flex items-center justify-between p-3 rounded-lg border border-slate-200">
                <div className="flex items-center space-x-3">
                  {alert.type === 'success' && <CheckCircle className="h-5 w-5 text-green-600" />}
                  {alert.type === 'warning' && <AlertTriangle className="h-5 w-5 text-blue-600" />}
                  {alert.type === 'error' && <AlertTriangle className="h-5 w-5 text-red-600" />}
                  {alert.type === 'info' && <Bell className="h-5 w-5 text-blue-600" />}
                  <div>
                    <p className="text-sm font-medium text-slate-800">{alert.message}</p>
                    <p className="text-xs text-slate-500">{alert.timestamp}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border border-slate-200 bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700">Forecast Accuracy</CardTitle>
            <Brain className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">87.3%</div>
            <p className="text-xs text-slate-500 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
              +2.1% this month
            </p>
          </CardContent>
        </Card>

        <Card className="border border-slate-200 bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700">Anomalies Detected</CardTitle>
            <AlertTriangle className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">12</div>
            <p className="text-xs text-slate-500">Last 7 days</p>
          </CardContent>
        </Card>

        <Card className="border border-slate-200 bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700">Recommendations</CardTitle>
            <Target className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">8</div>
            <p className="text-xs text-slate-500">Actionable insights</p>
          </CardContent>
        </Card>

        <Card className="border border-slate-200 bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700">Model Training</CardTitle>
            <Zap className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">94%</div>
            <p className="text-xs text-slate-500">Complete</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PredictiveAnalytics;
