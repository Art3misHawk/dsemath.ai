"use client";

import React from 'react';
import { KaTeX, MathRenderer } from '@/components';

export default function MathDemo() {
  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Math Rendering Demo</h1>
      
      <div className="space-y-8">
        {/* Basic KaTeX Component Examples */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Basic KaTeX Component</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Inline Math:</h3>
              <p className="text-gray-700">
                The quadratic formula is{' '}
                <KaTeX>{'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}'}</KaTeX>
                {' '}which is very useful.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Display Math:</h3>
              <div className="text-center">
                <KaTeX displayMode={true}>
                  {'\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}'}
                </KaTeX>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced MathRenderer Examples */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Advanced MathRenderer Component</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Mixed Content:</h3>
              <MathRenderer>
                {'Consider the function $f(x) = x^2 + 2x + 1$. We can factor this as $f(x) = (x + 1)^2$.'}
              </MathRenderer>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Display Math in Mixed Content:</h3>
              <MathRenderer>
                {'The derivative of $f(x) = x^2$ is: $$\\frac{d}{dx}x^2 = 2x$$ This follows from the power rule.'}
              </MathRenderer>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Complex Mathematical Expression:</h3>
              <MathRenderer>
                {"Einstein's mass-energy equivalence $E = mc^2$ revolutionized physics. The full equation is: $$E^2 = (mc^2)^2 + (pc)^2$$ where $p$ is momentum and $c$ is the speed of light."}
              </MathRenderer>
            </div>
          </div>
        </section>

        {/* Error Handling Example */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Error Handling</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Invalid LaTeX (graceful error):</h3>
              <KaTeX throwOnError={false}>
                {'\\invalid{LaTeX} syntax here'}
              </KaTeX>
            </div>
          </div>
        </section>

        {/* Styling Examples */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Custom Styling</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Colored Math:</h3>
              <KaTeX 
                className="text-blue-600" 
                style={{ fontSize: '1.2em' }}
              >
                {'\\color{red} \\text{Red text} + \\color{blue} \\text{Blue text}'}
              </KaTeX>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Large Display Math:</h3>
              <KaTeX 
                displayMode={true}
                style={{ fontSize: '1.5em' }}
              >
                {'\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}'}
              </KaTeX>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
