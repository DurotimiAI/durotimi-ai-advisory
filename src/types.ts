/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  buyerProblem: string;
  whatWeDo: string;
  deliverables: string[];
  bestSuitedFor: string;
  iconName: string;
}

export interface SectorItem {
  id: string;
  title: string;
  description: string;
  useCases: string[];
  iconName: string;
}

export interface InsightItem {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  content: string;
}

export interface ProcessStage {
  number: number;
  title: string;
  description: string;
  details: string[];
}

export interface EngagementTheme {
  id: string;
  title: string;
  description: string;
  duration: string;
  scope: string;
}

export interface ContactInquiry {
  name: string;
  organisation: string;
  role: string;
  email: string;
  country: string;
  areaOfInterest: string;
  message: string;
  consultationType: string;
}
