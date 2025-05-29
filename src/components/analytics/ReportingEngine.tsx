
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, Download, Mail, Plus, Settings, Clock, FileText, Users, BarChart3 } from 'lucide-react';

const ReportingEngine = () => {
  const [selectedReport, setSelectedReport] = useState('performance');
  const [reportFrequency, setReportFrequency] = useState('weekly');

  const reportTemplates = [
    { id: 'performance', name: 'Performance Overview', description: 'Key metrics and KPIs', icon: BarChart3 },
    { id: 'customer', name: 'Customer Analytics', description: 'Customer behavior and retention', icon: Users },
    { id: 'campaign', name: 'Campaign Performance', description: 'Email and social campaign results', icon: Mail },
    { id: 'financial', name: 'Financial Summary', description: 'Revenue and ROI analysis', icon: FileText }
  ];

  const scheduledReports = [
    { name: 'Weekly Performance Report', frequency: 'Weekly', nextRun: '2024-01-15', recipients: 3, status: 'Active' },
    { name: 'Monthly Executive Summary', frequency: 'Monthly', nextRun: '2024-02-01', recipients: 2, status: 'Active' },
    { name: 'Campaign Analysis', frequency: 'Bi-weekly', nextRun: '2024-01-22', recipients: 5, status: 'Active' },
    { name: 'Customer Retention Report', frequency: 'Monthly', nextRun: '2024-02-01', recipients: 3, status: 'Paused' }
  ];

  const clientReports = [
    { client: 'TechCorp Inc.', template: 'Performance Overview', lastSent: '2024-01-08', status: 'Delivered' },
    { client: 'Marketing Pro', template: 'Campaign Performance', lastSent: '2024-01-07', status: 'Delivered' },
    { client: 'StartupXYZ', template: 'Customer Analytics', lastSent: '2024-01-06', status: 'Pending' },
    { client: 'Enterprise Co.', template: 'Financial Summary', lastSent: '2024-01-05', status: 'Delivered' }
  ];

  return (
    <div className="space-y-6">
      {/* Report Builder */}
      <Card className="border border-slate-200 bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-800">Custom Report Builder</CardTitle>
          <CardDescription className="text-slate-600">
            Create and customize reports with drag-and-drop components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-slate-800 mb-4">Report Templates</h4>
              <div className="space-y-3">
                {reportTemplates.map((template) => (
                  <div 
                    key={template.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                      selectedReport === template.id 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                    onClick={() => setSelectedReport(template.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <template.icon className="h-5 w-5 text-slate-600" />
                      <div>
                        <h5 className="font-medium text-slate-800">{template.name}</h5>
                        <p className="text-sm text-slate-600">{template.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium text-slate-800 mb-4">Report Configuration</h4>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="report-name">Report Name</Label>
                  <Input id="report-name" placeholder="Enter report name" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="date-range">Date Range</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select date range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="last-7-days">Last 7 days</SelectItem>
                      <SelectItem value="last-30-days">Last 30 days</SelectItem>
                      <SelectItem value="last-90-days">Last 90 days</SelectItem>
                      <SelectItem value="custom">Custom range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Include Metrics</Label>
                  <div className="mt-2 space-y-2">
                    {['Traffic & Engagement', 'Conversion Metrics', 'Revenue Analytics', 'Customer Behavior'].map((metric) => (
                      <div key={metric} className="flex items-center space-x-2">
                        <Checkbox id={metric} defaultChecked />
                        <label htmlFor={metric} className="text-sm text-slate-700">{metric}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Report
                  </Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Automated Reports */}
      <Card className="border border-slate-200 bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg font-semibold text-slate-800">Automated Report Scheduling</CardTitle>
              <CardDescription className="text-slate-600">
                Set up recurring reports and email automation
              </CardDescription>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Schedule Report
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-slate-800 mb-4">Quick Setup</h4>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="report-type">Report Type</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select report type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="performance">Performance Overview</SelectItem>
                      <SelectItem value="customer">Customer Analytics</SelectItem>
                      <SelectItem value="campaign">Campaign Performance</SelectItem>
                      <SelectItem value="financial">Financial Summary</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="frequency">Frequency</Label>
                  <Select value={reportFrequency} onValueChange={setReportFrequency}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="bi-weekly">Bi-weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="recipients">Email Recipients</Label>
                  <Input id="recipients" placeholder="Enter email addresses (comma separated)" className="mt-1" />
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Clock className="h-4 w-4 mr-2" />
                  Schedule Report
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-slate-800 mb-4">Scheduled Reports</h4>
              <div className="space-y-3">
                {scheduledReports.map((report, index) => (
                  <div key={index} className="p-3 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium text-slate-800">{report.name}</h5>
                      <Badge 
                        variant={report.status === 'Active' ? 'default' : 'secondary'}
                        className={report.status === 'Active' ? 'bg-green-600 text-white' : ''}
                      >
                        {report.status}
                      </Badge>
                    </div>
                    <div className="text-sm text-slate-600 space-y-1">
                      <p>Frequency: {report.frequency}</p>
                      <p>Next run: {report.nextRun}</p>
                      <p>Recipients: {report.recipients} people</p>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <Button variant="outline" size="sm">
                        <Settings className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <Mail className="h-3 w-3 mr-1" />
                        Send Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* White-label Client Reports */}
      <Card className="border border-slate-200 bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-800">White-label Client Reports</CardTitle>
          <CardDescription className="text-slate-600">
            Branded reports for client delivery and presentation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h4 className="font-medium text-slate-800 mb-4">Recent Client Reports</h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 font-medium text-slate-700">Client</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-700">Template</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-700">Last Sent</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-700">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clientReports.map((report, index) => (
                      <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-3 px-4 font-medium text-slate-800">{report.client}</td>
                        <td className="py-3 px-4 text-slate-700">{report.template}</td>
                        <td className="py-3 px-4 text-slate-700">{report.lastSent}</td>
                        <td className="py-3 px-4">
                          <Badge 
                            variant={report.status === 'Delivered' ? 'default' : 'secondary'}
                            className={report.status === 'Delivered' ? 'bg-green-600 text-white' : 'bg-yellow-600 text-white'}
                          >
                            {report.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Download className="h-3 w-3 mr-1" />
                              Download
                            </Button>
                            <Button variant="outline" size="sm">
                              <Mail className="h-3 w-3 mr-1" />
                              Resend
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-slate-800 mb-4">Branding Options</h4>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="company-logo">Company Logo</Label>
                  <Input id="company-logo" type="file" accept="image/*" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="brand-colors">Brand Colors</Label>
                  <div className="flex space-x-2 mt-1">
                    <Input type="color" value="#1E40AF" className="w-12 h-10" />
                    <Input type="color" value="#10B981" className="w-12 h-10" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="footer-text">Footer Text</Label>
                  <Input id="footer-text" placeholder="© 2024 Your Company" className="mt-1" />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Settings className="h-4 w-4 mr-2" />
                  Update Branding
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Export Options */}
      <Card className="border border-slate-200 bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-800">Export & Download Center</CardTitle>
          <CardDescription className="text-slate-600">
            Export reports in various formats for external use
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-lg border border-slate-200">
              <FileText className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-medium text-slate-800 mb-2">PDF Reports</h4>
              <p className="text-sm text-slate-600 mb-4">Professional formatted documents</p>
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Export PDF
              </Button>
            </div>

            <div className="text-center p-6 rounded-lg border border-slate-200">
              <BarChart3 className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-medium text-slate-800 mb-2">Excel/CSV Data</h4>
              <p className="text-sm text-slate-600 mb-4">Raw data for analysis</p>
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
            </div>

            <div className="text-center p-6 rounded-lg border border-slate-200">
              <Mail className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h4 className="font-medium text-slate-800 mb-2">Email Reports</h4>
              <p className="text-sm text-slate-600 mb-4">Send directly to stakeholders</p>
              <Button variant="outline" className="w-full">
                <Mail className="h-4 w-4 mr-2" />
                Email Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportingEngine;
