
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, ChevronLeft, ChevronRight, Eye, Edit, Clock } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'Email' | 'Social' | 'Blog' | 'Newsletter';
  status: 'draft' | 'review' | 'approved' | 'published';
  date: string;
  time: string;
}

const ContentCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<'month' | 'week' | 'day'>('month');
  
  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'Holiday Email Campaign',
      type: 'Email',
      status: 'published',
      date: '2024-01-15',
      time: '09:00'
    },
    {
      id: '2',
      title: 'Q1 Social Media Posts',
      type: 'Social',
      status: 'approved',
      date: '2024-01-20',
      time: '14:30'
    },
    {
      id: '3',
      title: 'Product Launch Blog',
      type: 'Blog',
      status: 'review',
      date: '2024-01-25',
      time: '10:00'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Email': return 'bg-blue-600';
      case 'Social': return 'bg-green-600';
      case 'Blog': return 'bg-purple-600';
      case 'Newsletter': return 'bg-red-600';
      default: return 'bg-slate-600';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-600';
      case 'approved': return 'bg-blue-600';
      case 'review': return 'bg-gray-600';
      case 'draft': return 'bg-slate-400';
      default: return 'bg-slate-200';
    }
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + (direction === 'next' ? 1 : -1));
    setCurrentDate(newDate);
  };

  const renderCalendarGrid = () => {
    const today = new Date();
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const currentDay = new Date(startDate);

    for (let i = 0; i < 42; i++) {
      const dayContent = contentItems.filter(item => 
        new Date(item.date).toDateString() === currentDay.toDateString()
      );

      days.push(
        <div
          key={i}
          className={`min-h-24 p-2 border border-slate-200 bg-white hover:bg-slate-50 transition-colors ${
            currentDay.getMonth() !== currentDate.getMonth() ? 'text-slate-400 bg-slate-50' : ''
          } ${
            currentDay.toDateString() === today.toDateString() ? 'bg-blue-50 border-blue-200' : ''
          }`}
          onDrop={(e) => handleDrop(e, currentDay.toISOString().split('T')[0])}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className="text-sm font-medium mb-1">{currentDay.getDate()}</div>
          <div className="space-y-1">
            {dayContent.map((item) => (
              <div
                key={item.id}
                draggable
                onDragStart={(e) => handleDragStart(e, item)}
                className="text-xs p-1 rounded cursor-move hover:shadow-sm transition-shadow group"
                style={{ backgroundColor: getTypeColor(item.type) }}
              >
                <div className="text-white font-medium truncate">{item.title}</div>
                <div className="text-white/80 flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {item.time}
                </div>
                <div className="opacity-0 group-hover:opacity-100 absolute z-10 bg-white border border-slate-200 rounded-lg p-3 shadow-lg -translate-y-2 translate-x-2 min-w-64">
                  <h4 className="font-semibold text-slate-800">{item.title}</h4>
                  <p className="text-sm text-slate-600 mt-1">Type: {item.type}</p>
                  <p className="text-sm text-slate-600">Status: {item.status}</p>
                  <p className="text-sm text-slate-600">Time: {item.time}</p>
                  <div className="flex gap-2 mt-2">
                    <Button size="sm" variant="outline" className="text-xs">
                      <Eye className="h-3 w-3 mr-1" /> View
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs">
                      <Edit className="h-3 w-3 mr-1" /> Edit
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

      currentDay.setDate(currentDay.getDate() + 1);
    }

    return days;
  };

  const handleDragStart = (e: React.DragEvent, item: ContentItem) => {
    e.dataTransfer.setData('text/plain', JSON.stringify(item));
  };

  const handleDrop = (e: React.DragEvent, newDate: string) => {
    e.preventDefault();
    const item = JSON.parse(e.dataTransfer.getData('text/plain'));
    console.log(`Moving ${item.title} to ${newDate}`);
    // Here you would update the item's date in your state/database
  };

  return (
    <Card className="border border-slate-200 bg-white">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-slate-800">Content Calendar</CardTitle>
            <CardDescription>Drag and drop content to reschedule</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex border border-slate-200 rounded-lg">
              {['month', 'week', 'day'].map((viewType) => (
                <Button
                  key={viewType}
                  size="sm"
                  variant={view === viewType ? "default" : "ghost"}
                  onClick={() => setView(viewType as any)}
                  className="capitalize"
                >
                  {viewType}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <Button size="sm" variant="outline" onClick={() => navigateMonth('prev')}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="font-medium text-slate-700 px-3">
                {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </span>
              <Button size="sm" variant="outline" onClick={() => navigateMonth('next')}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Calendar Header */}
        <div className="grid grid-cols-7 gap-0 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="p-2 text-center font-medium text-slate-700 bg-slate-100 border border-slate-200">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-0 border border-slate-200">
          {renderCalendarGrid()}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-200">
          <span className="text-sm text-slate-600">Content Types:</span>
          {['Email', 'Social', 'Blog', 'Newsletter'].map((type) => (
            <div key={type} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded ${getTypeColor(type)}`}></div>
              <span className="text-sm text-slate-700">{type}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentCalendar;
