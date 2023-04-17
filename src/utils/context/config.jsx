import shortid from "shortid";
// import { formatDate, formatTime } from "../moment";
import { lorem20, random100, aboutMe1, aboutMe2, aboutMe3 } from "./variables";

export const isDev = process.env.NODE_ENV === "development";

export const app = {
  lot: [
    {
      uid: "acura-2013-9875",
      make: "Acura",
      model: "TL Advance",
      year: 2013,
      price: 9875,
      mileage: 152000,
      photos: [
        {
          src: "http://www.swauto59.com/photos/9360.jpg",
          uid: shortid.generate(),
          alt: "2013 Acura TL Advance",
        },
        {
          src: "http://www.swauto59.com/photos/cars/116224.jpg",
          uid: shortid.generate(),
          alt: "2013 Acura TL Advance",
        },
        {
          src: "http://www.swauto59.com/photos/cars/116225.jpg",
          uid: shortid.generate(),
          alt: "2013 Acura TL Advance",
        },
        {
          src: "http://www.swauto59.com/photos/cars/116226.jpg",
          uid: shortid.generate(),
          alt: "2013 Acura TL Advance",
        },
        {
          src: "http://www.swauto59.com/photos/cars/116227.jpg",
          uid: shortid.generate(),
          alt: "2013 Acura TL Advance",
        },
        {
          src: "http://www.swauto59.com/photos/cars/116228.jpg",
          uid: shortid.generate(),
          alt: "2013 Acura TL Advance",
        },
        {
          src: "http://www.swauto59.com/photos/cars/116229.jpg",
          uid: shortid.generate(),
          alt: "2013 Acura TL Advance",
        },
        {
          src: "http://www.swauto59.com/photos/cars/116230.jpg",
          uid: shortid.generate(),
          alt: "2013 Acura TL Advance",
        },
        {
          src: "http://www.swauto59.com/photos/cars/116231.jpg",
          uid: shortid.generate(),
          alt: "2013 Acura TL Advance",
        },
      ],
      features: [
        {
          bodyStyle: "sedan",
          engine: "3.5L",
          cylinders: "6-Cylinder",
          driveTrain: "FWD",
          transmission: "Automatic 6-Speed",
          color: "black",
          mileage: 152000,
          doors: "4D",
          stockNumber: 0,
        },
      ],
      comments:
        "2013 Acura TL Advance FWD, 6-Cylinder Auto, 3.5L, Leather Seats, 152k Miles, Bluetooth, Backup Camera, Push-Start, Heated/Cooled Seats, Sunroof, Memory Seats,  Traction Control, Aux Audio Connection, Rear Window Defroster. P/w P/dl P/m. Special Finance Available Bad Credit, No Problem! 713-780-1616. Se Habla Espanol, No Credit, No Social Security Number Ok! Nosotros Financiamos!  www.swauto59.com      ",
      optionsInstalled: "",
    },
    {
      uid: "bmw-2013-15750",
      make: "BMW",
      model: "750 Li",
      year: 2013,
      price: 15750,
      mileage: 61000,
      photos: [
        {
          src: "http://www.swauto59.com/photos/cars/103160.jpg",
          uid: shortid.generate(),
          alt: "2013 BMW 750li",
        },
        {
          src: "http://www.swauto59.com/photos/cars/103161.jpg",
          uid: shortid.generate(),
          alt: "2013 BMW 750li",
        },
        {
          src: "http://www.swauto59.com/photos/cars/103162.jpg",
          uid: shortid.generate(),
          alt: "2013 BMW 750li",
        },
        {
          src: "http://www.swauto59.com/photos/cars/103163.jpg",
          uid: shortid.generate(),
          alt: "2013 BMW 750li",
        },
        {
          src: "http://www.swauto59.com/photos/cars/103164.jpg",
          uid: shortid.generate(),
          alt: "2013 BMW 750li",
        },
        {
          src: "http://www.swauto59.com/photos/cars/103165.jpg",
          uid: shortid.generate(),
          alt: "2013 BMW 750li",
        },
        {
          src: "http://www.swauto59.com/photos/cars/103166.jpg",
          uid: shortid.generate(),
          alt: "2013 BMW 750li",
        },
        {
          src: "http://www.swauto59.com/photos/cars/103167.jpg",
          uid: shortid.generate(),
          alt: "2013 BMW 750li",
        },
        {
          src: "http://www.swauto59.com/photos/cars/103168.jpg",
          uid: shortid.generate(),
          alt: "2013 BMW 750li",
        },
        {
          src: "http://www.swauto59.com/photos/cars/103169.jpg",
          uid: shortid.generate(),
          alt: "2013 BMW 750li",
        },
        {
          src: "http://www.swauto59.com/photos/cars/103170.jpg",
          uid: shortid.generate(),
          alt: "2013 BMW 750li",
        },
      ],
      features: [
        {
          bodyStyle: "sedan",
          engine: "4.4L",
          cylinders: "8 Cylinder Turbo",
          driveTrain: "Rear Wheel Drive",
          transmission: "Automatic 8-Speed",
          color: "white",
          mileage: 61000,
          doors: "4D",
          stockNumber: 0,
        },
      ],
      comments:
        "2013 BMW 750Li RWD, 8-Cylinder Turbo Auto, 4.4L, 61k Miles, Sunroof, Leather Seats, Memory Seats, Navigation, Heated Seats, Heads Up Display, Rear Window Defroster, P/Steering Wheel Adjuster, P/w PDL P/m P/s A/C Am Fm CD Tilt Cruise. Special Finance Available. No Credit Bad Credit, No Driver License, No Social Security, No Problem! We finance 713-780-1616. Se Habla Espanol! $2,250 Down + Tax TL. www.swauto59.com ",
      optionsInstalled: "",
    },
  ],
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
