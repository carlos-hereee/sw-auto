import shortid from "shortid";
// import { formatDate, formatTime } from "../moment";

const lorem10 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, neque?";
const lorem20 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, molestias reprehenderit. Voluptates fugit tenetur itaque minus sed, assumenda delectus accusantium!";
const lorem30 =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt explicabo accusantium vel. Quos, illo. Velit est voluptatum at dignissimos, amet alias veritatis obcaecati assumenda, repellat aliquid non quae nam! Nobis.";

let random100 = (n) => Math.floor(Math.random() * n) + 1;
const aboutMe1 =
  "SW Auto of Houston treats our customers with paramount concern. We have a great varieties of vehicles for you to choose from. We all know that your time is precious and you have high expectations. As a fast growing used car dealer in Houston, we enjoy the challenge of meeting and exceeding those standards each and every time. So, come see us and find out.";

const aboutMe2 =
  "Our experienced and friendly sales are always eager to share their knowledge and enthusiasm with you. We encourage you to browse our online inventory. Please don't hesitate to call and schedule a test drive when you are ready.";
const aboutMe3 =
  "If you don't see a particular vehicle, we are only a phone call away. We will gladly work closely with you and inform you when a matching car arrives. Allow us to be your one-stop auto dealer. We look forward to serving you, always!";
export const isDev = process.env.NODE_ENV === "development";

export const app = {
  // landing: {},
  socials: [
    {
      isEmpty: true,
      name: "instagram",
      link: "https://www.instagram.com//",
      uid: shortid.generate(),
    },
  ],
  checkout: {
    title: "Check out",
    subtitle: "",
    hasHero: false,
    hasIcon: false,
    hero: { link: "", name: "main-hero" },
  },
  footerNewsletter: {
    title: "Join the newsletter",
    subtitle: "Suscribe to get the latest content by email",
    response: "Unsubscribe at any time.",
    hasHero: false,
    hasIcon: false,
    hasLink: false,
    hero: { link: "", name: "main-hero" },
  },
  contact: {
    title: "Contact us",
    subtitle: "",
    hasHero: false,
    hasIcon: false,
    hero: { link: "", name: "main-hero" },
  },
  about: {
    title: "Welcome to SW-Auto 59",
    subtitle: "",
    hasHero: false,
    hasIcon: false,
    hero: { link: "", name: "main-hero" },
    sections: [
      {
        title: "Welcome to SW Auto 59 of Houston",
        response: aboutMe1,
        sections: [aboutMe2, aboutMe3],
        uid: shortid.generate(),
        hasHero: false,
        hasIcon: false,
        hasLink: false,
        hero: { link: "/lorem", name: "lorem ipsum" },
        hyperlink: [{ word: "Maiores", link: "/lorem" }],
      },
      {
        title: "Who am I?",
        response: lorem20 + lorem20,
        uid: shortid.generate(),
        hasHero: false,
        hasIcon: false,
        hero: { link: "", name: "" },
        hasLink: false,
        hyperlink: [{ word: "obcaecati assumenda", link: "/lorem" }],
      },
    ],
  },
  schedule: {
    title: "Bussiness Hours",
    subtitle: "",
    hasHero: false,
    hasIcon: false,
    hero: { link: "", name: "main-hero" },
    hours: [
      { day: "Monday", hours: "9:00am - 7:00pm", key: shortid.generate() },
      { day: "Tuesday", hours: "9:00am - 7:00pm", key: shortid.generate() },
      { day: "Wednesday", hours: "9:00am - 7:00pm", key: shortid.generate() },
      { day: "Thursday", hours: "9:00am - 7:00pm", key: shortid.generate() },
      { day: "Friday", hours: "9:00am - 7:00pm", key: shortid.generate() },
      { day: "Saturday", hours: "9:00am - 7:00pm", key: shortid.generate() },
      { day: "Sunday", hours: "Closed", key: shortid.generate() },
    ],
  },
  menu: [
    // { name: "Espanol", uid: shortid.generate(), notification: 0 },
    { name: "Cars", uid: shortid.generate(), notification: 0 },
    // { name: "Services", uid: shortid.generate(), notification: 0, },
    // { name: "accessories", uid: shortid.generate(), notification: 0 , },
    // { name: "checkout", uid: shortid.generate(), notification: 0 , },
    { name: "Boats", uid: shortid.generate(), notification: 0 },
    { name: "RvAtv", uid: shortid.generate(), notification: 0 },
    { name: "financing", uid: shortid.generate(), notification: 0 },
  ],
  gallery: {
    title: "Check out what's in our lot!",
    subtitle: "",
    isNav: true,
    hasIcon: false,
    hasHero: false,
    nav: ["all", "Cars", "RV/ATV", "Boats"],
    hero: { link: "", name: "main-hero" },
    sections: [
      {
        hasIcon: false,
        hasHero: false,
        isBookable: false,
        isAccessory: true,
        count: 1,
        inStock: random100(100),
        isForSale: true,
        hero: {
          link: "http://localhost:4937/gallery/photo/?path=assets/hair/braids/gustavo-spindula-unsplash.jpg",
          name: "gustavo spindula unsplash",
          file: "gustavo-spindula-unsplash.jpg",
          path: "assets/hair/braids/gustavo-spindula-unsplash.jpg",
        },
        hasLink: false,
        hyperlink: [{ word: "Maiores", link: "/lorem" }],
        // artistName: "",
        cost: 24,
        response:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Dolor facilis commodi qui optio, quos quidem odio a vitaenulla facere? Rem facilis esse cum earum amet, enim iuretempora eveniet.",
        // src: "",
        title: "braids",
        uid: "39c68aab-4071-4b05-a8b3-a224b8fbba69",
      },
      {
        hasIcon: false,
        hasHero: false,
        isBookable: false,
        isAccessory: true,
        count: 1,
        inStock: random100(100),
        isForSale: true,
        hero: {
          link: "http://localhost:4937/gallery/photo/?path=assets/hair/braids/gustavo-spindula-unsplash.jpg",
          name: "gustavo spindula unsplash",
          file: "gustavo-spindula-unsplash.jpg",
          path: "assets/hair/braids/gustavo-spindula-unsplash.jpg",
        },
        hasLink: false,
        hyperlink: [{ word: "Maiores", link: "/lorem" }],
        // artistName: "",
        cost: 24,
        response:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Dolor facilis commodi qui optio, quos quidem odio a vitaenulla facere? Rem facilis esse cum earum amet, enim iuretempora eveniet.",
        // src: "",
        title: "braids",
        uid: "39c68aab-4071-4b05-a8b3-",
      },
    ],
  },
  paymentMethods: [
    {
      uid: shortid.generate(),
      type: "in-store",
      name: "In store",
      icon: "store",
      isCash: true,
      isCreditCard: false,
    },
  ],
};
