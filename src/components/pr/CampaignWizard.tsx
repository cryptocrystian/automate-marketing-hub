
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { 
  CalendarIcon, 
  Users, 
  FileText, 
  Target, 
  DollarSign, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  X
} from 'lucide-react';

interface CampaignWizardProps {
  onClose: () => void;
}

const CampaignWizard: React.FC<CampaignWizardProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    objectives: '',
    startDate: undefined as Date | undefined,
    endDate: undefined as Date | undefined,
    targetAudience: '',
    messagePositioning: '',
    budget: '',
    selectedContacts: [] as string[],
    contentAssets: [] as string[],
    distributionChannels: [] as string[],
    successMetrics: [] as string[]
  });

  const totalSteps = 6;

  const steps = [
    'Campaign Details',
    'Target Audience',
    'Media Selection',
    'Content Integration',
    'Distribution',
    'Success Metrics'
  ];

  const mediaContacts = [
    { id: '1', name: 'Sarah Mitchell', outlet: 'TechCrunch', tier: 'A-List' },
    { id: '2', name: 'Marcus Rodriguez', outlet: 'Forbes', tier: 'Core' },
    { id: '3', name: 'Emily Chen', outlet: 'Marketing Land', tier: 'Core' },
    { id: '4', name: 'David Thompson', outlet: 'VentureBeat', tier: 'Prospect' }
  ];

  const contentAssets = [
    { id: '1', title: 'Holiday Email Campaign', type: 'Email' },
    { id: '2', title: 'Q1 Social Media Posts', type: 'Social' },
    { id: '3', title: 'Product Launch Blog', type: 'Blog' }
  ];

  const distributionOptions = [
    'Press Release Wire Services',
    'Direct Media Outreach',
    'Social Media Amplification',
    'Email Marketing',
    'Podcast Pitching',
    'AI Platform Optimization'
  ];

  const metricOptions = [
    'Media Mentions',
    'Earned Media Value',
    'Website Traffic',
    'Brand Sentiment',
    'Share of Voice',
    'Lead Generation',
    'Social Engagement',
    'Backlink Acquisition'
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Campaign created:', formData);
    onClose();
  };

  const toggleSelection = (value: string, field: keyof typeof formData) => {
    const currentArray = formData[field] as string[];
    const updated = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    
    setFormData({ ...formData, [field]: updated });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Campaign Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter campaign name"
              />
            </div>
            <div>
              <Label htmlFor="objectives">Campaign Objectives</Label>
              <Textarea
                id="objectives"
                value={formData.objectives}
                onChange={(e) => setFormData({ ...formData, objectives: e.target.value })}
                placeholder="Describe your campaign objectives and goals"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Start Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.startDate ? format(formData.startDate, "PPP") : "Pick start date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.startDate}
                      onSelect={(date) => setFormData({ ...formData, startDate: date })}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label>End Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.endDate ? format(formData.endDate, "PPP") : "Pick end date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.endDate}
                      onSelect={(date) => setFormData({ ...formData, endDate: date })}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="targetAudience">Target Audience</Label>
              <Textarea
                id="targetAudience"
                value={formData.targetAudience}
                onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                placeholder="Describe your target audience"
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="messagePositioning">Message Positioning</Label>
              <Textarea
                id="messagePositioning"
                value={formData.messagePositioning}
                onChange={(e) => setFormData({ ...formData, messagePositioning: e.target.value })}
                placeholder="Define your key messaging and positioning"
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="budget">Campaign Budget</Label>
              <Input
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                placeholder="Enter budget amount"
                type="number"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div>
              <Label>Select Media Contacts</Label>
              <p className="text-sm text-muted-foreground mb-3">Choose journalists and media outlets for your campaign</p>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {mediaContacts.map((contact) => (
                  <div
                    key={contact.id}
                    className={cn(
                      "flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-colors",
                      formData.selectedContacts.includes(contact.id) 
                        ? "border-blue-500 bg-blue-50" 
                        : "border-gray-200 hover:border-gray-300"
                    )}
                    onClick={() => toggleSelection(contact.id, 'selectedContacts')}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-medium">{contact.name}</div>
                        <div className="text-sm text-muted-foreground">{contact.outlet}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{contact.tier}</Badge>
                      {formData.selectedContacts.includes(contact.id) && (
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                Selected: {formData.selectedContacts.length} contacts
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div>
              <Label>Content Assets Integration</Label>
              <p className="text-sm text-muted-foreground mb-3">Link content pieces from your Content Calendar</p>
              <div className="space-y-2">
                {contentAssets.map((asset) => (
                  <div
                    key={asset.id}
                    className={cn(
                      "flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-colors",
                      formData.contentAssets.includes(asset.id) 
                        ? "border-blue-500 bg-blue-50" 
                        : "border-gray-200 hover:border-gray-300"
                    )}
                    onClick={() => toggleSelection(asset.id, 'contentAssets')}
                  >
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-gray-500" />
                      <div>
                        <div className="font-medium">{asset.title}</div>
                        <div className="text-sm text-muted-foreground">{asset.type}</div>
                      </div>
                    </div>
                    {formData.contentAssets.includes(asset.id) && (
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <div>
              <Label>Distribution Channels</Label>
              <p className="text-sm text-muted-foreground mb-3">Select distribution channels for your campaign</p>
              <div className="grid grid-cols-2 gap-2">
                {distributionOptions.map((option) => (
                  <div
                    key={option}
                    className={cn(
                      "p-3 border rounded-lg cursor-pointer transition-colors text-center",
                      formData.distributionChannels.includes(option) 
                        ? "border-blue-500 bg-blue-50" 
                        : "border-gray-200 hover:border-gray-300"
                    )}
                    onClick={() => toggleSelection(option, 'distributionChannels')}
                  >
                    <div className="font-medium text-sm">{option}</div>
                    {formData.distributionChannels.includes(option) && (
                      <CheckCircle className="w-4 h-4 text-blue-600 mx-auto mt-1" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <div>
              <Label>Success Metrics & KPIs</Label>
              <p className="text-sm text-muted-foreground mb-3">Define how you'll measure campaign success</p>
              <div className="grid grid-cols-2 gap-2">
                {metricOptions.map((metric) => (
                  <div
                    key={metric}
                    className={cn(
                      "p-3 border rounded-lg cursor-pointer transition-colors text-center",
                      formData.successMetrics.includes(metric) 
                        ? "border-blue-500 bg-blue-50" 
                        : "border-gray-200 hover:border-gray-300"
                    )}
                    onClick={() => toggleSelection(metric, 'successMetrics')}
                  >
                    <div className="font-medium text-sm">{metric}</div>
                    {formData.successMetrics.includes(metric) && (
                      <CheckCircle className="w-4 h-4 text-blue-600 mx-auto mt-1" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Create New PR Campaign
              </DialogTitle>
              <DialogDescription>
                Step {currentStep} of {totalSteps}: {steps[currentStep - 1]}
              </DialogDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        {/* Progress Indicator */}
        <div className="flex items-center space-x-2 mb-6">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div key={i} className="flex items-center">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                  i + 1 <= currentStep 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-200 text-gray-600"
                )}
              >
                {i + 1}
              </div>
              {i < totalSteps - 1 && (
                <div className={cn(
                  "w-12 h-1 mx-2",
                  i + 1 < currentStep ? "bg-blue-600" : "bg-gray-200"
                )} />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="mb-6">
          {renderStepContent()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          {currentStep === totalSteps ? (
            <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700">
              <CheckCircle className="w-4 h-4 mr-2" />
              Create Campaign
            </Button>
          ) : (
            <Button onClick={handleNext}>
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CampaignWizard;
