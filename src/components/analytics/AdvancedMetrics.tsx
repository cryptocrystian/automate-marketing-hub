
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { DollarSign, Users, Target, TrendingUp, Filter, ChevronDown } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, FunnelChart, Funnel, Cell } from 'recharts';

const AdvancedMetrics = () => {
  const [selectedMetric, setSelectedMetric] = useState('clv');
  
  const clvData = [
    { segment: 'Premium', clv: 4800, count: 245, avgOrderValue: 320 },
    { segment: 'Standard', clv: 2400, count: 892, avgOrderValue: 180 },
    { segment: 'Basic', clv: 1200, count: 1534, avgOrderValue: 95 },
    { segment: 'Trial', clv: 480, count: 2156, avgOrderValue: 45 }
  ];

  const attributionData = [
    { channel: 'Email', firstTouch: 35, lastTouch: 28, linear: 31, timeDecay: 29 },
    { channel: 'Social', firstTouch: 25, lastTouch: 15, linear: 20, timeDecay: 18 },
    { channel: 'Paid Search', firstTouch: 20, lastTouch: 35, linear: 28, timeDecay: 32 },
    { channel: 'Organic', firstTouch: 15, lastTouch: 18, linear: 16, timeDecay: 17 },
    { channel: 'Direct', firstTouch: 5, lastTouch: 4, linear: 5, timeDecay: 4 }
  ];

  const funnelData = [
    { stage: 'Awareness', visitors: 10000, conversion: 100 },
    { stage: 'Interest', visitors: 7500, conversion: 75 },
    { stage: 'Consideration', visitors: 4200, conversion: 42 },
    { stage: 'Intent', visitors: 2100, conversion: 21 },
    { stage: 'Purchase', visitors: 840, conversion: 8.4 }
  ];

  const cohortData = [
    { month: 'Jan', month0: 100, month1: 75, month2: 65, month3: 58, month4: 52, month5: 48 },
    { month: 'Feb', month0: 100, month1: 78, month2: 68, month3: 61, month4: 55, month5: 50 },
    { month: 'Mar', month0: 100, month1: 82, month2: 72, month3: 65, month4: 58, month5: 53 },
    { month: 'Apr', month0: 100, month1: 79, month2: 69, month3: 62, month4: 56, month5: 51 },
    { month: 'May', month0: 100, month1: 84, month2: 74, month3: 67, month4: 61, month5: 56 },
    { month: 'Jun', month0: 100, month1: 81, month2: 71, month3: 64, month4: 58, month5: 54 }
  ];

  return (
    <div className="space-y-6">
      {/* Metric Selector */}
      <Card className="border border-slate-200 bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-800">Advanced Metrics Suite</CardTitle>
          <CardDescription className="text-slate-600">
            Deep dive into customer behavior and business performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Select value={selectedMetric} onValueChange={setSelectedMetric}>
              <SelectTrigger className="w-64">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="clv">Customer Lifetime Value</SelectItem>
                <SelectItem value="attribution">Attribution Modeling</SelectItem>
                <SelectItem value="funnel">Funnel Analysis</SelectItem>
                <SelectItem value="cohort">Cohort Analysis</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Apply Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Customer Lifetime Value */}
      {selectedMetric === 'clv' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-slate-200 bg-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-700">Average CLV</CardTitle>
                <DollarSign className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-800">$2,480</div>
                <p className="text-xs text-slate-500 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
                  +15.2% from last quarter
                </p>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 bg-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-700">Total Customers</CardTitle>
                <Users className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-800">4,827</div>
                <p className="text-xs text-slate-500 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
                  +8.1% new customers
                </p>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 bg-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-700">CLV/CAC Ratio</CardTitle>
                <Target className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-800">3.2:1</div>
                <p className="text-xs text-slate-500">Healthy ratio (>3:1)</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-800">CLV by Customer Segment</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={clvData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="segment" stroke="#64748B" />
                  <YAxis stroke="#64748B" />
                  <Tooltip formatter={(value, name) => [`$${value}`, name === 'clv' ? 'CLV' : name]} />
                  <Bar dataKey="clv" fill="#1E40AF" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-800">Segment Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {clvData.map((segment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-slate-100">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-slate-800">{segment.segment} Customers</h4>
                        <Badge variant="outline">{segment.count} customers</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
                        <div>CLV: <span className="font-medium text-slate-800">${segment.clv}</span></div>
                        <div>Avg Order: <span className="font-medium text-slate-800">${segment.avgOrderValue}</span></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Attribution Modeling */}
      {selectedMetric === 'attribution' && (
        <div className="space-y-6">
          <Card className="border border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-800">Attribution Models Comparison</CardTitle>
              <CardDescription className="text-slate-600">
                Compare different attribution models to understand channel impact
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={attributionData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis type="number" stroke="#64748B" />
                  <YAxis dataKey="channel" type="category" stroke="#64748B" width={100} />
                  <Tooltip />
                  <Bar dataKey="firstTouch" fill="#1E40AF" name="First Touch" />
                  <Bar dataKey="lastTouch" fill="#3B82F6" name="Last Touch" />
                  <Bar dataKey="linear" fill="#10B981" name="Linear" />
                  <Bar dataKey="timeDecay" fill="#8B5CF6" name="Time Decay" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-800">Model Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                    <h4 className="font-medium text-blue-800">First Touch Attribution</h4>
                    <p className="text-sm text-blue-600">Email drives 35% of initial customer discovery</p>
                  </div>
                  <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                    <h4 className="font-medium text-green-800">Last Touch Attribution</h4>
                    <p className="text-sm text-green-600">Paid Search closes 35% of final conversions</p>
                  </div>
                  <div className="p-3 rounded-lg bg-purple-50 border border-purple-200">
                    <h4 className="font-medium text-purple-800">Time Decay Model</h4>
                    <p className="text-sm text-purple-600">Paid Search shows strongest recent impact</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-800">Channel Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {attributionData.map((channel, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="font-medium text-slate-800">{channel.channel}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-slate-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${channel.linear}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-slate-600 w-12">{channel.linear}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Funnel Analysis */}
      {selectedMetric === 'funnel' && (
        <div className="space-y-6">
          <Card className="border border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-800">Conversion Funnel</CardTitle>
              <CardDescription className="text-slate-600">
                Track user journey from awareness to purchase
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {funnelData.map((stage, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-slate-800">{stage.stage}</h4>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-slate-600">{stage.visitors.toLocaleString()} visitors</span>
                        <Badge variant="outline">{stage.conversion}%</Badge>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-8">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-blue-400 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium"
                        style={{ width: `${stage.conversion}%` }}
                      >
                        {stage.conversion > 20 && `${stage.visitors.toLocaleString()}`}
                      </div>
                    </div>
                    {index < funnelData.length - 1 && (
                      <div className="text-center text-xs text-slate-500 mt-2">
                        Drop-off: {((funnelData[index].visitors - funnelData[index + 1].visitors) / funnelData[index].visitors * 100).toFixed(1)}%
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-slate-700">Overall Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-800">8.4%</div>
                <Progress value={8.4} className="mt-2" />
              </CardContent>
            </Card>

            <Card className="border border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-slate-700">Biggest Drop-off</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-800">Interest → Consideration</div>
                <p className="text-sm text-slate-600 mt-1">44% drop-off rate</p>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-slate-700">Optimization Potential</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">+2.1%</div>
                <p className="text-sm text-slate-600 mt-1">Estimated improvement</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Cohort Analysis */}
      {selectedMetric === 'cohort' && (
        <div className="space-y-6">
          <Card className="border border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-800">Customer Retention Cohorts</CardTitle>
              <CardDescription className="text-slate-600">
                Monthly cohort retention analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 font-medium text-slate-700">Cohort</th>
                      <th className="text-center py-3 px-4 font-medium text-slate-700">Month 0</th>
                      <th className="text-center py-3 px-4 font-medium text-slate-700">Month 1</th>
                      <th className="text-center py-3 px-4 font-medium text-slate-700">Month 2</th>
                      <th className="text-center py-3 px-4 font-medium text-slate-700">Month 3</th>
                      <th className="text-center py-3 px-4 font-medium text-slate-700">Month 4</th>
                      <th className="text-center py-3 px-4 font-medium text-slate-700">Month 5</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cohortData.map((cohort, index) => (
                      <tr key={index} className="border-b border-slate-100">
                        <td className="py-3 px-4 font-medium text-slate-800">{cohort.month}</td>
                        <td className="py-3 px-4 text-center">
                          <div className="inline-flex items-center justify-center w-12 h-8 rounded bg-blue-600 text-white text-sm font-medium">
                            {cohort.month0}%
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <div className={`inline-flex items-center justify-center w-12 h-8 rounded text-sm font-medium ${
                            cohort.month1 >= 75 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {cohort.month1}%
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <div className={`inline-flex items-center justify-center w-12 h-8 rounded text-sm font-medium ${
                            cohort.month2 >= 65 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {cohort.month2}%
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <div className={`inline-flex items-center justify-center w-12 h-8 rounded text-sm font-medium ${
                            cohort.month3 >= 60 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {cohort.month3}%
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <div className={`inline-flex items-center justify-center w-12 h-8 rounded text-sm font-medium ${
                            cohort.month4 >= 55 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {cohort.month4}%
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <div className={`inline-flex items-center justify-center w-12 h-8 rounded text-sm font-medium ${
                            cohort.month5 >= 50 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {cohort.month5}%
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-slate-700">Average 6-Month Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-800">52.3%</div>
                <p className="text-sm text-green-600 mt-1">+3.2% vs industry avg</p>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-slate-700">Best Performing Cohort</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-800">May 2024</div>
                <p className="text-sm text-slate-600 mt-1">56% retention at 5 months</p>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-slate-700">Month 1 Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-800">79.8%</div>
                <p className="text-sm text-slate-600 mt-1">Critical first month</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedMetrics;
