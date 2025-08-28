'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ChartContainerProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
}

export default function ChartContainer({ 
  title, 
  description, 
  children, 
  className = '',
  isLoading = false 
}: ChartContainerProps) {
  return (
    <Card className={`bg-blue-50/50 ${className}`}>
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {title}
        </CardTitle>
        {description && (
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {description}
          </p>
        )}
      </CardHeader>
      <CardContent className="pt-0">
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-600"></div>
          </div>
        ) : (
          children
        )}
      </CardContent>
    </Card>
  );
}
