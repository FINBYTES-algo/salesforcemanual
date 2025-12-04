import React, { useState } from 'react';
import { Copy, Check, FileCode } from 'lucide-react';
import { CodeSnippet } from '../types';

interface CodeBlockProps {
  snippet: CodeSnippet;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ snippet }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightCode = (code: string, lang: string) => {
    // 1. Escape HTML characters to prevent rendering them as HTML
    let safeCode = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    if (lang === 'text') return safeCode;

    // 2. Tokenize Strings and Comments to protect them from keyword replacement
    const tokens: string[] = [];
    const placeholders: string[] = [];
    
    // Regex explanation:
    // '...' -> Single quoted strings (handling escaped quotes)
    // "..." -> Double quoted strings (handling escaped quotes)
    // /* ... */ -> Multi-line comments
    // // ... -> Single-line comments
    const tokenRegex = /('(?:\\'|[^'])*'|"(?:\\"|[^"])*"|\/\*[\s\S]*?\*\/|\/\/.*$)/gm;

    safeCode = safeCode.replace(tokenRegex, (match) => {
      placeholders.push(match);
      return `___TOKEN_${placeholders.length - 1}___`;
    });

    // 3. Highlight Keywords
    // We use a temporary class placeholder "___KW___" to avoid 
    // subsequent number regex matching digits inside "text-pink-400"
    const keywords = [
      'public', 'private', 'global', 'protected', 'static', 'final', 'void', 'class', 'extends', 'implements',
      'interface', 'new', 'this', 'super', 'return', 'if', 'else', 'for', 'while', 'do', 'switch', 'case',
      'break', 'continue', 'try', 'catch', 'finally', 'throw', 'trigger', 'on', 'before', 'after', 'insert',
      'update', 'delete', 'undelete', 'with sharing', 'without sharing', 'inherited sharing', 'enum', 'get', 'set',
      'null', 'true', 'false', 'List', 'Map', 'Set', 'ID', 'String', 'Integer', 'Decimal', 'Boolean', 'Date', 'Datetime',
      'System', 'Database', 'Trigger', 'Test', 'Assert', 'Math', 'UserInfo', 'Limits', 
      'SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'LIMIT', 'IN', 'NOT', 'GROUP BY', 'ORDER BY'
    ];

    const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
    safeCode = safeCode.replace(keywordRegex, '<span class="___KW___">$1</span>');

    // 4. Highlight Annotations (e.g. @isTest)
    // Placeholder "___AN___"
    safeCode = safeCode.replace(/(@\w+)/g, '<span class="___AN___">$1</span>');

    // 5. Highlight Numbers
    // Placeholder "___NU___"
    // This is safe now because "___KW___" and "___AN___" do not contain numbers.
    safeCode = safeCode.replace(/\b(\d+)\b/g, '<span class="___NU___">$1</span>');

    // 6. Restore Tokens with specific styling
    safeCode = safeCode.replace(/___TOKEN_(\d+)___/g, (_, index) => {
      const token = placeholders[Number(index)];
      if (token.startsWith('//') || token.startsWith('/*')) {
        // Comment style
        return `<span class="text-slate-500 italic">${token}</span>`;
      } else {
        // String style
        return `<span class="text-green-400">${token}</span>`;
      }
    });

    // 7. Resolve Class Placeholders to Tailwind Classes
    // This step happens last to ensure no regex matches inside the class names
    safeCode = safeCode
      .replace(/___KW___/g, 'text-pink-400 font-semibold')
      .replace(/___AN___/g, 'text-yellow-400')
      .replace(/___NU___/g, 'text-purple-300');

    return safeCode;
  };

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-slate-700 bg-slate-900 shadow-xl">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <FileCode size={14} />
          <span>{snippet.filename || snippet.language.toUpperCase()}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 text-xs text-slate-400 hover:text-white bg-slate-700/50 hover:bg-slate-700 rounded transition-colors cursor-pointer"
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed text-slate-200">
          <code dangerouslySetInnerHTML={{ __html: highlightCode(snippet.code, snippet.language) }} />
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;