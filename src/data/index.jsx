import Bolt from "../assets/icons/Bolt";
import Command from "../assets/icons/Command";
import GrowthReport from "../assets/icons/GrowthReport";
import MessageChat from "../assets/icons/MessageChat";
import MessageChatHeart from "../assets/icons/MessageChatHeart";
import MessageChatSmiley from "../assets/icons/MessageChatSmiley";

const posts = [
  {
    category: "Design",
    title: "UX review presentations",
    content:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    thumbail: "",
    author: {
      name: "Olivia Rhye",
      profile:
        "https://img.freepik.com/premium-photo/professional-photo-linkedin-profile-picture-beautiful-looking-woman-light-color_1078199-10524.jpg?w=360",
    },
    postedOn: "20 Jan 2024",
  },
  {
    category: "Product",
    title: "Migrating to Linear 101",
    content:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    thumbail: "",
    author: {
      name: "Phoenix Baker",
      profile:
        "https://img.freepik.com/premium-photo/professional-photo-linkedin-profile-picture-handsome-looking-man-light-color-background_1078199-10792.jpg?w=360",
    },
    postedOn: "19 Jan 2024",
  },
  ,
  {
    category: "Software Engineering",
    title: "Building your API stack",
    content:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    thumbail: "",
    author: {
      name: "Lana Steiner",
      profile:
        "https://www.glimpse.co.nz/img-get2/I0000jUEVPcEhfY0/fit=1000x750/Professional-Profile.jpg",
    },
    postedOn: "10 Jan 2024",
  },
];

const faqList = [
  {
    title: "Is there a free trial available?",
    content:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "Can I change my plan later?",
    content:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "What is your cancellation policy?",
    content:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "Can other info be added to an invoice?",
    content:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "How does billing work?",
    content:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
];

const features = [
  {
    icon: <MessageChat />,
    title: "Share team inboxes",
    content:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    icon: <Bolt />,
    title: "Deliver instant answers",
    content:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
  {
    icon: <GrowthReport />,
    title: "Manage your team with reports",
    content:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
  },
  {
    icon: <MessageChatSmiley />,
    title: "Connect with customers",
    content:
      "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
  },
  {
    icon: <Command />,
    title: "Connect the tools you already use",
    content:
      "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
  },
  {
    icon: <MessageChatHeart />,
    title: "Our people make the difference",
    content:
      "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
  },
];

export { posts, faqList, features };
