
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Search, 
  Filter, 
  Plus, 
  Brain, 
  Star, 
  MapPin, 
  Mail, 
  Phone, 
  Eye, 
  MessageSquare, 
  Edit3, 
  Zap, 
  Upload, 
  Download, 
  BarChart3, 
  Award 
} from 'lucide-react';

const MediaDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Statistics data
  const stats = [
    { label: 'Total Contacts', value: '247', icon: Users, color: 'text-blue-600' },
    { label: 'A-List Relationships', value: '23', icon: Award, color: 'text-green-600' },
    { label: 'Average Response Rate', value: '78%', icon: BarChart3, color: 'text-blue-600' },
    { label: 'Recent Interactions', value: '156', icon: MessageSquare, color: 'text-purple-600' },
    { label: 'New This Month', value: '32', icon: Plus, color: 'text-orange-600' }
  ];

  // Filter options
  const filterOptions = [
    { value: 'all', label: 'All Contacts', count: 247 },
    { value: 'a-list', label: 'A-List (90%+ Response)', count: 23 },
    { value: 'core', label: 'Core Relationships', count: 89 },
    { value: 'prospects', label: 'New Prospects', count: 135 },
    { value: 'tech', label: 'Technology Beat', count: 67 },
    { value: 'business', label: 'Business & Strategy', count: 45 },
    { value: 'marketing', label: 'Marketing & PR', count: 38 }
  ];

  // Sample contact data
  const contacts = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      title: 'Senior Technology Reporter',
      outlet: 'TechCrunch',
      tier: 'A-List',
      relationshipScore: 9.2,
      responseRate: 92,
      totalInteractions: 34,
      beats: ['AI & Machine Learning', 'SaaS', 'Enterprise Tech', 'Startups'],
      location: 'San Francisco, CA',
      email: 'sarah.mitchell@techcrunch.com',
      phone: '+1 (555) 123-4567',
      verified: true,
      aiInsights: {
        pitchStyle: 'Data-driven, technical depth preferred',
        bestTime: 'Tuesday-Thursday 9-11 AM PST'
      },
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      title: 'Business Strategy Correspondent',
      outlet: 'Forbes',
      tier: 'Core',
      relationshipScore: 8.7,
      responseRate: 84,
      totalInteractions: 28,
      beats: ['Business Strategy', 'Leadership', 'Digital Transformation'],
      location: 'New York, NY',
      email: 'm.rodriguez@forbes.com',
      phone: '+1 (555) 234-5678',
      verified: true,
      aiInsights: {
        pitchStyle: 'Executive focus, strategic insights',
        bestTime: 'Monday-Wednesday 2-4 PM EST'
      },
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Emily Chen',
      title: 'Marketing Technology Editor',
      outlet: 'Marketing Land',
      tier: 'Core',
      relationshipScore: 8.4,
      responseRate: 79,
      totalInteractions: 22,
      beats: ['MarTech', 'Digital Marketing', 'Analytics', 'Automation'],
      location: 'Austin, TX',
      email: 'emily.chen@marketingland.com',
      phone: '+1 (555) 345-6789',
      verified: false,
      aiInsights: {
        pitchStyle: 'Case studies and ROI focus',
        bestTime: 'Tuesday-Friday 10 AM-12 PM CST'
      },
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'David Thompson',
      title: 'Startup Reporter',
      outlet: 'VentureBeat',
      tier: 'Prospect',
      relationshipScore: 7.1,
      responseRate: 67,
      totalInteractions: 8,
      beats: ['Startups', 'Venture Capital', 'Innovation'],
      location: 'Seattle, WA',
      email: 'd.thompson@venturebeat.com',
      phone: '+1 (555) 456-7890',
      verified: true,
      aiInsights: {
        pitchStyle: 'Innovation stories, founder interviews',
        bestTime: 'Wednesday-Friday 1-3 PM PST'
      },
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'Lisa Park',
      title: 'PR Industry Analyst',
      outlet: 'PR Daily',
      tier: 'Core',
      relationshipScore: 8.9,
      responseRate: 88,
      totalInteractions: 31,
      beats: ['Public Relations', 'Communications', 'Crisis Management'],
      location: 'Chicago, IL',
      email: 'lisa.park@prdaily.com',
      phone: '+1 (555) 567-8901',
      verified: true,
      aiInsights: {
        pitchStyle: 'Industry trends and best practices',
        bestTime: 'Monday-Thursday 9 AM-11 AM CST'
      },
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 6,
      name: 'Alex Kumar',
      title: 'Technology Features Writer',
      outlet: 'Wired',
      tier: 'Prospect',
      relationshipScore: 6.3,
      responseRate: 45,
      totalInteractions: 5,
      beats: ['Consumer Tech', 'Future of Work', 'Digital Culture'],
      location: 'Los Angeles, CA',
      email: 'alex.kumar@wired.com',
      phone: '+1 (555) 678-9012',
      verified: false,
      aiInsights: {
        pitchStyle: 'Cultural impact and human stories',
        bestTime: 'Thursday-Friday 2-4 PM PST'
      },
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'A-List': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Core': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Prospect': return 'bg-gray-100 text-gray-800 border-gray-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 9) return 'bg-green-100 text-green-800';
    if (score >= 7) return 'bg-blue-100 text-blue-800';
    if (score >= 5) return 'bg-orange-100 text-orange-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Users className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">Media Database</h2>
              <Badge className="bg-purple-100 text-purple-800 border-purple-300">
                <Brain className="w-3 h-3 mr-1" />
                AI-Enhanced
              </Badge>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Advanced Contact Management</h3>
            <p className="text-muted-foreground">Manage relationships with journalists, influencers, and media outlets</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Contact
          </Button>
        </div>
      </div>

      {/* Statistics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search & Filter Controls */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search contacts, outlets, or beats..."
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <select
                  className="pl-10 pr-8 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                >
                  {filterOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label} ({option.count})
                    </option>
                  ))}
                </select>
              </div>
              
              <Button variant="outline" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Import
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact) => (
          <Card key={contact.id} className="hover:border-blue-300 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-4">
              <div className="flex items-start space-x-3">
                <div className="relative">
                  <img
                    src={contact.avatar}
                    alt={contact.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {contact.verified && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                      <Star className="w-2 h-2 text-white fill-current" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 truncate">{contact.name}</h3>
                  <p className="text-sm text-muted-foreground truncate">{contact.title}</p>
                  <p className="text-sm font-medium text-gray-700">{contact.outlet}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-3">
                <Badge className={getTierColor(contact.tier)}>
                  {contact.tier}
                </Badge>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${getScoreColor(contact.relationshipScore)}`}>
                  {contact.relationshipScore}/10
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="text-center p-2 bg-gray-50 rounded">
                  <div className="font-semibold text-gray-900">{contact.responseRate}%</div>
                  <div className="text-muted-foreground">Response Rate</div>
                </div>
                <div className="text-center p-2 bg-gray-50 rounded">
                  <div className="font-semibold text-gray-900">{contact.totalInteractions}</div>
                  <div className="text-muted-foreground">Interactions</div>
                </div>
              </div>

              {/* Beat Tags */}
              <div>
                <div className="flex flex-wrap gap-1">
                  {contact.beats.slice(0, 3).map((beat, index) => (
                    <Badge key={index} variant="secondary">
                      {beat}
                    </Badge>
                  ))}
                  {contact.beats.length > 3 && (
                    <Badge variant="secondary">
                      +{contact.beats.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 mr-2" />
                  {contact.location}
                </div>
                <div className="flex items-center">
                  <Mail className="w-3 h-3 mr-2" />
                  {contact.email}
                </div>
                <div className="flex items-center">
                  <Phone className="w-3 h-3 mr-2" />
                  {contact.phone}
                </div>
              </div>

              {/* AI Insights */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <div className="flex items-center mb-2">
                  <Brain className="w-4 h-4 text-purple-600 mr-2" />
                  <span className="text-sm font-medium text-purple-900">AI Insights</span>
                </div>
                <div className="space-y-1 text-xs text-purple-800">
                  <div><strong>Pitch Style:</strong> {contact.aiInsights.pitchStyle}</div>
                  <div><strong>Best Time:</strong> {contact.aiInsights.bestTime}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="w-3 h-3 mr-1" />
                  Profile
                </Button>
                <Button variant="outline" size="sm">
                  <MessageSquare className="w-3 h-3 mr-1" />
                  Message
                </Button>
                <Button variant="outline" size="sm">
                  <Edit3 className="w-3 h-3 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  <Zap className="w-3 h-3 mr-1" />
                  Pitch
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MediaDatabase;
