
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Settings, Mail, Activity, Download } from 'lucide-react';

const SystemSettings = () => {
  const [emailSettings, setEmailSettings] = useState({
    smtpServer: 'smtp.gmail.com',
    smtpPort: '587',
    username: 'admin@company.com',
    password: ''
  });

  const [apiSettings, setApiSettings] = useState({
    apiKey: 'sk-1234567890abcdef',
    webhookUrl: 'https://api.company.com/webhook',
    rateLimitPerHour: '1000'
  });

  const handleEmailSave = () => {
    console.log('Saving email settings:', emailSettings);
  };

  const handleApiSave = () => {
    console.log('Saving API settings:', apiSettings);
  };

  const handleBackup = () => {
    console.log('Creating backup...');
  };

  const handleRestore = () => {
    console.log('Restoring from backup...');
  };

  return (
    <div className="space-y-6">
      {/* Platform Configuration */}
      <Card className="bg-white shadow-sm border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
            <Settings className="h-5 w-5 mr-2" />
            Platform Configuration
          </CardTitle>
          <CardDescription className="text-gray-600">
            General system configuration settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="platformName">Platform Name</Label>
              <Input id="platformName" defaultValue="Campaign Manager Pro" />
            </div>
            <div>
              <Label htmlFor="timezone">Default Timezone</Label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white text-gray-700">
                <option>UTC-5 (Eastern Time)</option>
                <option>UTC-8 (Pacific Time)</option>
                <option>UTC+0 (GMT)</option>
              </select>
            </div>
            <div>
              <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
              <Input id="sessionTimeout" type="number" defaultValue="60" />
            </div>
            <div>
              <Label htmlFor="maxFileSize">Max File Upload Size (MB)</Label>
              <Input id="maxFileSize" type="number" defaultValue="10" />
            </div>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Save Configuration
          </Button>
        </CardContent>
      </Card>

      {/* Email Server Settings */}
      <Card className="bg-white shadow-sm border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
            <Mail className="h-5 w-5 mr-2" />
            Email Server Settings
          </CardTitle>
          <CardDescription className="text-gray-600">
            Configure SMTP settings for system emails
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="smtpServer">SMTP Server</Label>
              <Input
                id="smtpServer"
                value={emailSettings.smtpServer}
                onChange={(e) => setEmailSettings({...emailSettings, smtpServer: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="smtpPort">SMTP Port</Label>
              <Input
                id="smtpPort"
                value={emailSettings.smtpPort}
                onChange={(e) => setEmailSettings({...emailSettings, smtpPort: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="smtpUsername">Username</Label>
              <Input
                id="smtpUsername"
                value={emailSettings.username}
                onChange={(e) => setEmailSettings({...emailSettings, username: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="smtpPassword">Password</Label>
              <Input
                id="smtpPassword"
                type="password"
                value={emailSettings.password}
                onChange={(e) => setEmailSettings({...emailSettings, password: e.target.value})}
              />
            </div>
          </div>
          <div className="flex space-x-2">
            <Button onClick={handleEmailSave} className="bg-blue-600 hover:bg-blue-700 text-white">
              Save Email Settings
            </Button>
            <Button variant="outline">Test Connection</Button>
          </div>
        </CardContent>
      </Card>

      {/* API Management */}
      <Card className="bg-white shadow-sm border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
            <Activity className="h-5 w-5 mr-2" />
            API Key Management
          </CardTitle>
          <CardDescription className="text-gray-600">
            Manage API keys and webhook settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="apiKey">Master API Key</Label>
              <div className="flex space-x-2">
                <Input
                  id="apiKey"
                  value={apiSettings.apiKey}
                  onChange={(e) => setApiSettings({...apiSettings, apiKey: e.target.value})}
                  type="password"
                />
                <Button variant="outline">Regenerate</Button>
              </div>
            </div>
            <div>
              <Label htmlFor="webhookUrl">Webhook URL</Label>
              <Input
                id="webhookUrl"
                value={apiSettings.webhookUrl}
                onChange={(e) => setApiSettings({...apiSettings, webhookUrl: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="rateLimit">Rate Limit (requests/hour)</Label>
              <Input
                id="rateLimit"
                type="number"
                value={apiSettings.rateLimitPerHour}
                onChange={(e) => setApiSettings({...apiSettings, rateLimitPerHour: e.target.value})}
              />
            </div>
          </div>
          <Button onClick={handleApiSave} className="bg-blue-600 hover:bg-blue-700 text-white">
            Save API Settings
          </Button>
        </CardContent>
      </Card>

      {/* Backup & Restore */}
      <Card className="bg-white shadow-sm border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
            <Download className="h-5 w-5 mr-2" />
            Backup & Restore
          </CardTitle>
          <CardDescription className="text-gray-600">
            Backup system data and restore from previous backups
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">Automatic Backups</h4>
              <p className="text-sm text-gray-600">Daily backups at 2:00 AM UTC</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-900">Last backup: Jan 15, 2024</p>
              <p className="text-xs text-green-600">Successful</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button onClick={handleBackup} className="bg-blue-600 hover:bg-blue-700 text-white">
              Create Backup Now
            </Button>
            <Button onClick={handleRestore} variant="outline">
              Restore from Backup
            </Button>
            <Button variant="outline">
              Download Backup
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SystemSettings;
