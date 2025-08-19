"use client";

import React from 'react';
import KaTeX from './KaTeX';

interface MathRendererProps {
  children: string;
  displayMode?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Advanced math renderer that can handle mixed text and LaTeX content
 * Supports both inline math ($...$) and display math ($$...$$)
 */
const MathRenderer: React.FC<MathRendererProps> = ({
  children,
  displayMode = false,
  className = '',
  style = {},
}) => {
  // Function to parse mixed text and math content
  const parseContent = (text: string) => {
    const parts: Array<{ type: 'text' | 'math' | 'display'; content: string }> = [];
    let current = 0;
    
    // Regular expression to match $$....$$ (display math) and $....$ (inline math)
    const mathRegex = /(\$\$[\s\S]*?\$\$|\$[^$\n]*?\$)/g;
    let match;
    
    while ((match = mathRegex.exec(text)) !== null) {
      // Add text before the math
      if (match.index > current) {
        const textContent = text.slice(current, match.index);
        if (textContent.trim()) {
          parts.push({ type: 'text', content: textContent });
        }
      }
      
      // Add the math content
      const mathContent = match[1];
      if (mathContent.startsWith('$$') && mathContent.endsWith('$$')) {
        // Display math
        parts.push({
          type: 'display',
          content: mathContent.slice(2, -2).trim(),
        });
      } else if (mathContent.startsWith('$') && mathContent.endsWith('$')) {
        // Inline math
        parts.push({
          type: 'math',
          content: mathContent.slice(1, -1).trim(),
        });
      }
      
      current = match.index + match[0].length;
    }
    
    // Add remaining text
    if (current < text.length) {
      const remainingText = text.slice(current);
      if (remainingText.trim()) {
        parts.push({ type: 'text', content: remainingText });
      }
    }
    
    return parts;
  };

  // If the entire content should be rendered as math
  if (displayMode) {
    return (
      <KaTeX displayMode={true} className={className} style={style}>
        {children}
      </KaTeX>
    );
  }

  // Parse and render mixed content
  const parts = parseContent(children);
  
  // If no math content found, return as plain text
  if (parts.length === 0 || parts.every(part => part.type === 'text')) {
    return <span className={className} style={style}>{children}</span>;
  }

  return (
    <span className={className} style={style}>
      {parts.map((part, index) => {
        switch (part.type) {
          case 'text':
            return <span key={index}>{part.content}</span>;
          case 'math':
            return (
              <KaTeX key={index} displayMode={false}>
                {part.content}
              </KaTeX>
            );
          case 'display':
            return (
              <KaTeX key={index} displayMode={true}>
                {part.content}
              </KaTeX>
            );
          default:
            return null;
        }
      })}
    </span>
  );
};

export default MathRenderer;
