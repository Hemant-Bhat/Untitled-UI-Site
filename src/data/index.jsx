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
    thumbail:
      "https://s3-alpha-sig.figma.com/img/92f9/d44d/896aad9fd5981c841633a846ddb6994b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QKUyo7n7wkv~yjfh1-DF4-jlrmxtPCaXfgo5YDpvC9vDSLCW0Vs7yCm9i8ocGUpwv-W9yXIp6hxU1Xw8ccYydKuoIw6hTv9nE1Cy2dUcbIzP-qAExdGJnx071tIvG6fm-TTSEaCzeOUzc2EHzw8p0lMXmcK6mcNbGiif1fBL4eOcTrsqtqR8Yxz-dL-TQLl9CKQhOOWF3ZgzJnrsWZjpACaBi11a2tIF-yyBPoFYVrrBHr90GywrnQ-O7TTx1dufzTpHtTGwUO7tQglz362WAuwF6QnCi5jNF1ojiJv063H42Hy0bf4yFGM3PUbVyzhm2ufy5k9RAvQyfLPV83U0BQ__",
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
    thumbail:
      "https://s3-alpha-sig.figma.com/img/a4c5/2ab3/a3c522719b54dd45b1795921034a3f00?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NDrIKwVr9Bg-rsBFsi9B0tYlIPDZsLSLlUmJfRznBZpUEnSL~oJB7C~6I-HV~KAeeoodnPMt16eMhdmZknZE-qbUH4NshEPq4YFgvxMQe8FobQppe-8HMHyD8rWsrWV5JhvEMmes~PeG57rtL48JwvFxDtitQCgwcmj97WzhnWYAJVvGvKHwARauC6NVoSL5ucxqDtBlZnft2ctDEVmS01VTj6LrQThfjsvD-6qLHgb-ZpXHjZasoqNHkTqMV1B-WaHisvF1aGB3Zh7oZwgjiyelpnUQAALWNvMzM026oFY9uy9ocdYk0MOAUbLOfQpXBPPUtfCILXQOOtMzdqrxgQ__",
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
    thumbail:
      "https://s3-alpha-sig.figma.com/img/e2d0/7def/1dbd591c5182a37dfedc9ff110ae94d9?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Acy1mH9gUr-Hc1TagW9uf6wIFDSuy7cJ6fnNkiPSNztTxsZlhgALceGARFFrKdI4T54CclGP1QSXvtJR23UhUZl9aLYtkDqr1I0q-WCjK5keQzZMYtsTgegZQ3VZpo422uJI6SPrAnyF5CGN3~yey6T67drIFZWV-UpsVa0xozxaDs9vQ9RFIcK-oEfcqQfCpM1kjtligBQlHLV1hqIIFrprOuuU7Sa1MCS6qzgVwkoh0z95IMI0x0HuuEXRJtr9hkSiqcI6YYZboG1Q11t~gwhwn5p7Xfl-75R90B6zU4Lr3VI1WvOgmg5iqRk3IlXae8uopMC0vYpko1u34noJnw__",
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
