export type CodeLanguage = 'apex' | 'json' | 'yaml' | 'javascript' | 'soql' | 'text';

export interface CodeSnippet {
  language: CodeLanguage;
  code: string;
  filename?: string;
}

export interface SectionContent {
  type: 'text' | 'code' | 'list' | 'table' | 'diagram' | 'accordion';
  content?: string; // For text
  items?: string[]; // For lists
  codeSnippet?: CodeSnippet; // For code
  tableData?: { headers: string[]; rows: string[][] }; // For tables
  diagramLines?: string[]; // For ASCII/Tree diagrams
  accordionData?: { title: string; content: SectionContent[] }; // Nested content
}

export interface Lesson {
  id: string;
  title: string;
  duration: string; // e.g., "15 min"
  content: SectionContent[];
  salesforceLink?: string; // Link to relevant Salesforce documentation
}

export interface Module {
  id: string;
  title: string;
  icon: string;
  lessons: Lesson[];
}