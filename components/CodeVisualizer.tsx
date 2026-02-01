import React, { useState } from 'react';
import Icon from './Icon';

interface CodeVisualizerProps {
  title: string;
  caption: string;
  code: string;
}

const CodeVisualizer: React.FC<CodeVisualizerProps> = ({ title, caption, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-12 group">
       <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center justify-center gap-2">
            <Icon name="Terminal" size={24} className="text-blue-600" />
            {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400">{caption}</p>
       </div>

       <div className="rounded-xl overflow-hidden bg-[#1e1e1e] shadow-2xl border border-slate-800 transform transition-transform duration-500 hover:scale-[1.01]">
          {/* Editor Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-[#333]">
              <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <span className="ml-4 text-xs text-slate-400 font-mono">stock_valuation.sql</span>
              </div>
              <button 
                onClick={handleCopy}
                className="text-slate-400 hover:text-white transition-colors"
                title="Copy Code"
              >
                  {copied ? <Icon name="CheckCircle" size={16} /> : <Icon name="Copy" size={16} />}
              </button>
          </div>

          {/* Code Content */}
          <div className="p-6 overflow-x-auto">
              <pre className="font-mono text-sm leading-relaxed">
                  <code className="text-[#d4d4d4]">
                    {/* Basic syntax coloring simulation since we don't have a highlighter lib */}
                    {code.split('\n').map((line, i) => (
                      <div key={i} className="table-row">
                          <span className="table-cell select-none text-[#505050] text-right pr-4 w-8">{i + 1}</span>
                          <span className="table-cell">
                            {line.startsWith('/*') || line.startsWith(' *') || line.startsWith(' */') || line.startsWith('    --') ? (
                              <span className="text-[#6a9955]">{line}</span>
                            ) : (
                              <span dangerouslySetInnerHTML={{
                                __html: line
                                  .replace(/(CREATE PROCEDURE|AS|BEGIN|END|SET|NOCOUNT|ON|WITH|SELECT|FROM|INNER JOIN|WHERE|GROUP BY|SUM|AVG|AND|OR)/g, '<span class="text-[#569cd6] font-bold">$1</span>')
                                  .replace(/(@[a-zA-Z0-9_]+)/g, '<span class="text-[#9cdcfe]">$1</span>')
                                  .replace(/(\[.*?\])/g, '<span class="text-[#4ec9b0]">$1</span>')
                              }} />
                            )}
                          </span>
                      </div>
                    ))}
                  </code>
              </pre>
          </div>
       </div>
    </div>
  );
};

export default CodeVisualizer;