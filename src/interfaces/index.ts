/**
 * The Expression Events - Type Interfaces
 */

// Navigation
export interface NavItem {
  label: string;
  href: string;
}

export interface NavbarProps {
  className?: string;
}

// Common Component Props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Hero & Media
export interface MediaAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

// Offerings / Event Pillars (e.g. 01, 02, 03, 04)
export interface EventPillar {
  id: string;
  number: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

// Philosophy / Approach Cards
export interface PhilosophyCard {
  id: string;
  title: string;
  lead: string;
  description: string;
}

// Portfolio & Selected Works
export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  date?: string;
  location?: string;
}

// Contact / Inquiry Form Data
export type EventCategory =
  | "Corporate Event"
  | "Social Celebration / Wedding"
  | "Intimate Gathering / Soirée"
  | "Full Event Decoration & Styling"
  | "Mood Board Creation & Aesthetic Concept";

export interface ContactInquiry {
  fullName: string;
  email: string;
  category: EventCategory;
  dateAndLocation: string;
  visionNotes: string;
}

