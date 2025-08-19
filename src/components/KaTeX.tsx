"use client";

import React, { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface KaTeXProps {
  children: string;
  displayMode?: boolean;
  throwOnError?: boolean;
  errorColor?: string;
  macros?: Record<string, string>;
  colorIsTextColor?: boolean;
  maxSize?: number;
  maxExpand?: number;
  strict?: boolean | 'warn' | 'ignore' | 'error' | ((context: unknown) => boolean);
  trust?: boolean | ((context: unknown) => boolean);
  className?: string;
  style?: React.CSSProperties;
}

const KaTeX: React.FC<KaTeXProps> = ({
  children,
  displayMode = false,
  throwOnError = false,
  errorColor = '#cc0000',
  macros = {},
  colorIsTextColor = false,
  maxSize = Infinity,
  maxExpand = 1000,
  strict = 'warn',
  trust = false,
  className = '',
  style = {},
  ...props
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current && children) {
      try {
        // Clear previous content
        containerRef.current.innerHTML = '';
        
        // Render KaTeX
        katex.render(children, containerRef.current, {
          displayMode,
          throwOnError,
          errorColor,
          macros,
          colorIsTextColor,
          maxSize,
          maxExpand,
          strict,
          trust,
        });
      } catch (error) {
        if (throwOnError) {
          throw error;
        } else {
          // Display error message in a user-friendly way
          if (containerRef.current) {
            containerRef.current.innerHTML = `<span style="color: ${errorColor}; font-style: italic;">Math Error: ${error instanceof Error ? error.message : 'Unknown error'}</span>`;
          }
        }
      }
    }
  }, [
    children,
    displayMode,
    throwOnError,
    errorColor,
    macros,
    colorIsTextColor,
    maxSize,
    maxExpand,
    strict,
    trust,
  ]);

  return (
    <span
      ref={containerRef}
      className={`katex-container ${className}`}
      style={style}
      {...props}
    />
  );
};

export default KaTeX;
