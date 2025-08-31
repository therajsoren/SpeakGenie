export interface HeroBox {
  icon: string;
  heading: string;
  label: string;
}

export interface TestmonialProps {
  message: string;
  author: string;
}

export interface MinderyKidsProps {
  boxText: string;
  title: string;
  desc: string;
}

export interface WhyChooseProps {
  feature: string;
  MinderyKids: string;
  otherApps: string;
}

export interface Menu {
  icon: string;
  title: string;
}

export interface ParentAndTeacherHubProps {
  title: string;
  desc: string;
  menu: Menu[];
}

export interface List {
  text: string;
}

export interface PricingProps {
  title: string;
  desc: string;
  pricing: string;
  features: List[];
  button: string;
}

export interface ProgramFeaturesProps {
  title: string;
  desc: string;
}

export interface ProgramProps {
  picture?: string;
  heading: string;
  desc: string;
  menu: Menu[];
}

export interface HeroProps {
  heading: string;
  list: Menu[];
}
