import React from 'react';

export type PageView = 'home' | 'services' | 'methodology' | 'intelligence' | 'terminal' | 'contact' | 'portfolio' | 'about' | 'careers' | 'faq' | 'service-detail' | 'portfolio-detail';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  // Detailed Content
  fullDescription: string;
  benefits: string[];
  methodology: { title: string; desc: string }[];
  deliverables: string[];
  faq: { q: string; a: string }[];
}

export interface VulnerabilityStats {
  critical: number;
  high: number;
  medium: number;
}

export interface ThreadIntel {
  id: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  title: string;
  date: string;
  code: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string; // "FinTech Giant" etc (redacted real names)
  type: string;
  outcome: string;
  image: string;
  // Detailed Content
  date: string;
  duration: string;
  teamSize: number;
  challenge: string;
  execution: string; // The "story" of the hack
  findings: { title: string; severity: 'Critical' | 'High' | 'Medium' | 'Low'; desc: string }[];
  technicalDetails: string[];
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
}