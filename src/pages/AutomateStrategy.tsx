import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { 
  Target, 
  Users, 
  TrendingUp, 
  Settings, 
  BarChart3, 
  Zap, 
  Repeat, 
  CheckCircle,
  ArrowRight,
  Trophy,
  Clock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AutomateStrategy = () => {
  const navigate = useNavigate();

  const steps = [
    {
      letter: 'A',
      title: 'Assess & Audit',
      description: 'Comprehensive marketing audit across all channels and pillars',
      status: 'completed' as const,
      color: 'bg-green-600',
      route: '/automate/assess-audit',
      progress: 100,
      tasks: 20,
      completedTasks: 20
    },
    {
      letter: 'U',
      title: 'Understand Your Audience',
      description: 'Deep persona development and journey mapping',
      status: 'completed' as const,
      color: 'bg-green-600',
      route: '/automate/understand-audience',
      progress: 100,
      tasks: 15,
      completedTasks: 15
    },
    {
      id: 'target',
      letter: 'T',
      title: 'Target & Strategy',
      description: 'Strategic goal setting and KPI definition',
      progress: 25,
      status: 'in-progress',
      icon: Target,
      color: 'bg-blue-600',
      tasks: 25,
      completedTasks: 6,
      route: '/automate/target-strategy'
    },
    {
      id: 'optimize',
      letter: 'O',
      title: 'Optimize Systems',
      description: 'Marketing tech stack and workflow optimization',
      progress: 60,
      status: 'in-progress',
      icon: Settings,
      color: 'bg-blue-600',
      tasks: 8,
      completedTasks: 5,
      route: '/automate/optimize-systems'
    },
    {
      id: 'measure',
      letter: 'M',
      title: 'Measure & Monitor',
      description: 'Analytics implementation and performance tracking',
      progress: 45,
      status: 'in-progress',
      icon: BarChart3,
      color: 'bg-blue-600',
      tasks: 7,
      completedTasks: 3,
      route: '/automate/measure-monitor'
    },
    {
      id: 'accelerate',
      letter: 'A',
      title: 'Accelerate Growth',
      description: 'Scaling successful strategies',
      progress: 30,
      status: 'in-progress',
      icon: Zap,
      color: 'bg-blue-600',
      tasks: 5,
      completedTasks: 1,
      route: '/automate/accelerate-growth'
    },
    {
      id: 'transform',
      letter: 'T',
      title: 'Transform & Evolve',
      description: 'Continuous improvement and innovation adoption',
      progress: 20,
      status: 'pending',
      icon: Repeat,
      color: 'bg-gray-400',
      tasks: 6,
      completedTasks: 1,
      route: '/automate/transform-evolve'
    },
    {
      id: 'execute',
      letter: 'E',
      title: 'Execute Excellence',
      description: 'Quality assurance and team coordination',
      progress: 40,
      status: 'in-progress',
      icon: CheckCircle,
      color: 'bg-blue-600',
      tasks: 4,
      completedTasks: 2,
      route: '/automate/execute-excellence'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'pending': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const overallProgress = Math.round(steps.reduce((acc, step) => acc + step.progress, 0) / steps.length);
  
  // Add the missing healthScore calculation
  const healthScore = Math.round(steps.reduce((acc, step) => acc + (step.progress || 0), 0) / steps.length);

  const handleContinueStep = (step: any) => {
    if (step.route) {
      navigate(step.route);
    }
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <SidebarTrigger />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">AUTOMATE Strategy Center</h1>
              <p className="text-gray-600">Transform chaotic marketing into streamlined, strategic operations</p>
            </div>
          </div>
          <Badge variant="outline" className="text-blue-600 border-blue-200">
            Methodology-Driven
          </Badge>
        </div>

        {/* Health Score Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-1 bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Trophy className="h-5 w-5 text-blue-600" />
                AUTOMATE Health Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{healthScore}%</div>
                <Progress value={healthScore} className="mb-3" />
                <p className="text-sm text-gray-600">Overall methodology completion</p>
                <div className="mt-4 flex justify-center space-x-4 text-sm">
                  <span className="text-green-600">+8% this month</span>
                  <span className="text-gray-500">Target: 85%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">2</div>
                  <p className="text-sm text-blue-800">Steps Completed</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">4</div>
                  <p className="text-sm text-blue-800">In Progress</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-600">2</div>
                  <p className="text-sm text-blue-800">Pending</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AUTOMATE Methodology Steps */}
        <Card className="mb-6 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-xl text-blue-900">AUTOMATE Methodology Progress</CardTitle>
            <CardDescription className="text-blue-700">
              Your journey through our proprietary 8-step marketing transformation framework
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {steps.map((step, index) => (
                <div key={step.id} className="relative">
                  <Card className="hover:shadow-md transition-shadow border-l-4 border-l-blue-600 bg-white">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${step.color} rounded-lg flex items-center justify-center text-white font-bold text-lg shrink-0`}>
                          {step.letter}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-900 truncate">{step.title}</h3>
                            <Badge variant="outline" className={getStatusColor(step.status)}>
                              {step.status.replace('-', ' ')}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                          
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">Progress</span>
                              <span className="font-medium">{step.progress}%</span>
                            </div>
                            <Progress value={step.progress} className="h-2" />
                            
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600 flex items-center gap-1">
                                <CheckCircle className="h-3 w-3" />
                                {step.completedTasks}/{step.tasks} tasks
                              </span>
                              <Button 
                                size="sm" 
                                variant="outline"
                                className="h-7 px-3 text-xs"
                                onClick={() => handleContinueStep(step)}
                              >
                                Continue <ArrowRight className="h-3 w-3 ml-1" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Next Steps and Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                Recommended Next Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="w-6 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">T</div>
                  <div>
                    <p className="font-medium text-gray-900">Complete Target & Strategy</p>
                    <p className="text-sm text-gray-600">2 remaining tasks in strategic planning</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="w-6 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">O</div>
                  <div>
                    <p className="font-medium text-gray-900">Optimize Systems Setup</p>
                    <p className="text-sm text-gray-600">3 remaining workflow optimizations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="w-6 h-6 bg-gray-600 rounded text-white text-xs flex items-center justify-center font-bold">M</div>
                  <div>
                    <p className="font-medium text-gray-900">Enhance Measurement</p>
                    <p className="text-sm text-gray-600">4 analytics implementations needed</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg">Methodology Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Marketing Efficiency</span>
                  <span className="font-semibold text-green-600">+34%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Campaign Performance</span>
                  <span className="font-semibold text-green-600">+28%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Lead Quality Score</span>
                  <span className="font-semibold text-green-600">+42%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Team Alignment</span>
                  <span className="font-semibold text-green-600">+67%</span>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-xs text-gray-500">*Compared to pre-AUTOMATE baseline</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AutomateStrategy;
