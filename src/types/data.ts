import type {
  HeroBox,
  MinderyKidsProps,
  ParentAndTeacherHubProps,
  PricingProps,
  ProgramFeaturesProps,
  ProgramProps,
  TestmonialProps,
  WhyChooseProps,
} from "./types";

export const HeroBoxContent: HeroBox[] = [
  {
    icon: "🧠",
    heading: "Improves",
    label: "Focus",
  },
  {
    icon: "😒",
    heading: "Reduces",
    label: "Stress",
  },
  {
    icon: "💤",
    heading: "Better",
    label: "Sleep",
  },
  {
    icon: "❤️",
    heading: "Builds",
    label: "Empathy",
  },
];

export const TestmonialContent: TestmonialProps[] = [
  {
    message:
      "Bedtime is finally peaceful. My 6-year old asks for the Star Boat story every night.",
    author: "Priya, Mom of 6-year-old",
  },
  {
    message:
      "The 5-minute 'reset' before homework has been a game changer of focus.",
    author: "Ravi, Dad of 10-year-old",
  },
  {
    message:
      "Our class uses the breathing games after lunch. Kids come back calm and ready.",
    author: "Anika, Grade 4 Teacher",
  },
];

export const MinderyKids: MinderyKidsProps[] = [
  {
    boxText: "Story Meditations",
    title: "Guided Adventures",
    desc: "Short,age-wise journeys that helps kids calm their bodies and name their feelings.",
  },
  {
    boxText: "Anytime Calm",
    title: "Tools for Big Feelings",
    desc: "Quick reset audios for anger, worry, pre-exam jitters, and bedtime battles. ",
  },
  {
    boxText: "Parent Hub",
    title: "Guides & Routines",
    desc: "Weekly tips, printable charts, and simple routines you can use at home or school.",
  },
];

export const ParentAndTeacherHub: ParentAndTeacherHubProps = {
  title: "Parent & Teacher Hub",
  desc: "Practical guides, printable routines, and progress insights so you can support mindfulness at home and school.",
  menu: [
    {
      icon: "📩",
      title: "Download Starter Kit (PDF)",
    },
    {
      icon: "🗓️",
      title: "7-Day Calm Plan",
    },
    {
      icon: "🏛️",
      title: "Classroom Pack",
    },
  ],
};

export const PricingContent: PricingProps[] = [
  {
    title: "Starter",
    desc: "Perfect for new explorers",
    pricing: "Free",
    features: [
      {
        text: "5 guided meditations",
      },
      {
        text: "2 sleep stories",
      },
      {
        text: "Parent starter kit",
      },
    ],
    button: "Get Started",
  },
  {
    title: "Premium",
    desc: "Unlock full potential",
    pricing: "299/mo",
    features: [
      {
        text: "Unlimited meditations",
      },
      {
        text: "Sleep stories & calming music",
      },
      {
        text: "Printable guides for parents",
      },
    ],
    button: "Upgrade Now",
  },
  {
    title: "Family",
    desc: "For multiple kids",
    pricing: "499/mo",
    features: [
      {
        text: "4 child profiles",
      },
      {
        text: "Rewards & streaks",
      },
      {
        text: "Classroom meditation pack",
      },
    ],
    button: "Get Family Plan",
  },
];

export const ProgramFeatures: ProgramFeaturesProps[] = [
  {
    title: "Ad-Free & Safe",
    desc: "Child-first design with privacy controls and no external ads.",
  },
  {
    title: "Rewards that Motivate",
    desc: "Stars, badges, and gentle streaks encourage healthy habits--no pressure.",
  },
  {
    title: "Offline Access",
    desc: "Download favorite sessions for calm on the go.",
  },
  {
    title: "Sleep Mode",
    desc: "Fade-out music and dim visuals help kids drift off peacefully.",
  },
  {
    title: "Classroom Friendly",
    desc: "Teacher packs with 5-minute start-of-class resets and posters.",
  },
  {
    title: "Multi-Child Profiles",
    desc: "Personalized tracks for each child in the family.",
  },
];

export const WhyChooseMindery: WhyChooseProps[] = [
  {
    feature: "Child-Friendly Guided Meditations",
    MinderyKids: "Story-based, fun & short",
    otherApps: "Genric adult content",
  },
  {
    feature: "Safe & Ad-Free Environment",
    MinderyKids: "100% secure for kids",
    otherApps: "Ads & distractions",
  },
  {
    feature: "Age-Specific Programs",
    MinderyKids: "Tailored for 4-14",
    otherApps: "One-size-fits-all",
  },
  {
    feature: "Parent & Teacher Support",
    MinderyKids: "Guides, printables, progress insights",
    otherApps: "Limited or none",
  },
];

export const ProgramContent: ProgramProps[] = [
  {
    picture: "",
    heading: "Little Explorers (4-6)",
    desc: "Three to five-minute stories with animal friends that teach belly-breathing, noticing sounds, and gentle stretching.",
    menu: [
      {
        icon: "😸",
        title: "Cozy Corner",
      },
      {
        icon: "🎵",
        title: "Calm Music",
      },
      {
        icon: "🎖️",
        title: "Sticker Badges",
      },
    ],
  },
  {
    picture: "",
    heading: "Brave Thinkers (7-10)",
    desc: "Mindset stories, focus timers, and kindness practices that build confidence and classroom readiness.",
    menu: [
      {
        icon: "🕛",
        title: "Focus Timer",
      },
      {
        icon: "📝",
        title: "Gratitude Notes",
      },
      {
        icon: "🌟",
        title: "Streak Rewards",
      },
    ],
  },
  {
    picture: "",
    heading: "Calm & Curious (11-14)",
    desc: "Longer meditations, reframing thoughts, and sleep stories for deeper rest and emotional balance.",
    menu: [
      {
        icon: "🧭",
        title: "Mindset Minis",
      },
      {
        icon: "🌙",
        title: "Sleep Stories",
      },
      {
        icon: "🎯",
        title: "Goals Cards",
      },
    ],
  },
];


export const FAQContent: { question: string; answer: string }[] = [
  {
    question: "Is Mindery Kids safe for children?",
    answer:
      "Yes! Mindery Kids is 100% ad-free and designed specifically for ages 4–14 in a secure environment.",
  },
  {
    question: "Do I need to meditate with my child?",
    answer:
      "Not at all. The app is child-friendly and guided, but many parents enjoy listening along with their kids.",
  },
  {
    question: "Can teachers use it in the classroom?",
    answer:
      "Absolutely! There are short breathing games and guided activities designed for group use in schools.",
  },
  {
    question: "Do you offer content in multiple languages?",
    answer:
      "Currently, Mindery Kids is available in English, with plans to expand to other languages soon.",
  },
  {
    question: "How long are the meditations?",
    answer:
      "Most meditations are between 3–8 minutes, keeping them short and engaging for children.",
  },
];