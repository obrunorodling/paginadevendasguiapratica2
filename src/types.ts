export interface DimensionItem {
  id: string;
  name: string;
  question: string;
  shortDesc: string;
  iconBg: string;
  tagColor: string;
  explanation: string;
  exampleQuestion: string;
  practicalTip: string;
}

export interface ChapterItem {
  number: string;
  title: string;
  description: string;
  keyTakeaway: string;
}

export interface BonusItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  originalValue: string;
  currentPrice: string;
  iconName: string;
  image?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
  highlight: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
