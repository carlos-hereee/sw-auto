export const lorem10 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, neque?";
export const lorem20 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, molestias reprehenderit. Voluptates fugit tenetur itaque minus sed, assumenda delectus accusantium!";
export const lorem30 =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt explicabo accusantium vel. Quos, illo. Velit est voluptatum at dignissimos, amet alias veritatis obcaecati assumenda, repellat aliquid non quae nam! Nobis.";

export let random100 = (n) => Math.floor(Math.random() * n) + 1;
export let randomMileague = () => Math.floor(Math.random() * (300000 - 20000 + 1));
export let randomPrice = () => Math.floor(Math.random() * (65000 - 6000 + 1));
export let minPrice = (count, increment) => {
  let prices = [];
  for (let i = 0; i < count; i++) {
    prices.push(5000 + i * increment);
  }
  return prices;
};
export const aboutMe1 =
  "SW Auto of Houston treats our customers with paramount concern. We have a great varieties of vehicles for you to choose from. We all know that your time is precious and you have high expectations. As a fast growing used car dealer in Houston, we enjoy the challenge of meeting and exceeding those standards each and every time. So, come see us and find out.";

export const aboutMe2 =
  "Our experienced and friendly sales are always eager to share their knowledge and enthusiasm with you. We encourage you to browse our online inventory. Please don't hesitate to call and schedule a test drive when you are ready.";
export const aboutMe3 =
  "If you don't see a particular vehicle, we are only a phone call away. We will gladly work closely with you and inform you when a matching car arrives. Allow us to be your one-stop auto dealer. We look forward to serving you, always!";

export const vehicles = {
  audi: [
    "https://www.topgear.com/sites/default/files/2022/02/1-Audi-Q3-review.jpg",
    "https://www.topgear.com/sites/default/files/2022/02/2-Audi-Q3-review.jpg?w=976&h=549",
    "https://www.topgear.com/sites/default/files/2022/02/3-Audi-Q3-review.jpg?w=976&h=549",
    "https://www.topgear.com/sites/default/files/2022/02/4-Audi-Q3-review.jpg?w=976&h=549",
    "https://www.topgear.com/sites/default/files/2022/02/5-Audi-Q3-review.jpg?w=976&h=549",
    "https://www.topgear.com/sites/default/files/2022/02/6-Audi-Q3-review.jpg?w=976&h=549",
    "https://www.topgear.com/sites/default/files/2022/02/7-Audi-Q3-review.jpg?w=976&h=549",
    "https://www.topgear.com/sites/default/files/2022/02/8-Audi-Q3-review.jpg?w=976&h=549",
  ],
  chevrolet: [
    "http://www.swauto59.com/photos/cars/82325.jpg",
    "http://www.swauto59.com/photos/cars/82326.jpg",
    "http://www.swauto59.com/photos/cars/82327.jpg",
    "http://www.swauto59.com/photos/cars/82328.jpg",
    "http://www.swauto59.com/photos/cars/82329.jpg",
    "http://www.swauto59.com/photos/cars/82330.jpg",
    "http://www.swauto59.com/photos/cars/82331.jpg",
  ],
  cadillac: [
    "http://www.swauto59.com/photos/cars/116504.jpg",
    "http://www.swauto59.com/photos/cars/116505.jpg",
    "http://www.swauto59.com/photos/cars/116506.jpg",
    "http://www.swauto59.com/photos/cars/116507.jpg",
    "http://www.swauto59.com/photos/cars/116508.jpg",
    "http://www.swauto59.com/photos/cars/116509.jpg",
  ],
  acura: [
    "http://www.swauto59.com/photos/cars/116223.jpg",
    "http://www.swauto59.com/photos/cars/116224.jpg",
    "http://www.swauto59.com/photos/cars/116225.jpg",
    "http://www.swauto59.com/photos/cars/116226.jpg",
    "http://www.swauto59.com/photos/cars/116227.jpg",
    "http://www.swauto59.com/photos/cars/116228.jpg",
    "http://www.swauto59.com/photos/cars/116229.jpg",
  ],
  bmw: [
    "http://www.swauto59.com/photos/cars/103160.jpg",
    "http://www.swauto59.com/photos/cars/103161.jpg",
    "http://www.swauto59.com/photos/cars/103163.jpg",
    "http://www.swauto59.com/photos/cars/103164.jpg",
    "http://www.swauto59.com/photos/cars/103165.jpg",
    "http://www.swauto59.com/photos/cars/103166.jpg",
    "http://www.swauto59.com/photos/cars/103167.jpg",
    "http://www.swauto59.com/photos/cars/103168.jpg",
    "http://www.swauto59.com/photos/cars/103169.jpg",
  ],
  chrysler: [
    "http://www.swauto59.com/photos/cars/120163.jpg",
    "http://www.swauto59.com/photos/cars/120164.jpg",
    "http://www.swauto59.com/photos/cars/120165.jpg",
    "http://www.swauto59.com/photos/cars/120166.jpg",
    "http://www.swauto59.com/photos/cars/120167.jpg",
    "http://www.swauto59.com/photos/cars/120168.jpg",
    "http://www.swauto59.com/photos/cars/120169.jpg",
    "http://www.swauto59.com/photos/cars/120170.jpg",
    "http://www.swauto59.com/photos/cars/120171.jpg",
  ],
  ford: [
    "http://www.swauto59.com/photos/cars/107664.jpg",
    "http://www.swauto59.com/photos/cars/107665.jpg",
    "http://www.swauto59.com/photos/cars/107666.jpg",
    "http://www.swauto59.com/photos/cars/107667.jpg",
    "http://www.swauto59.com/photos/cars/107668.jpg",
    "http://www.swauto59.com/photos/cars/107669.jpg",
    "http://www.swauto59.com/photos/cars/107670.jpg",
  ],
  buick: [
    "http://www.swauto59.com/photos/cars/114070.jpg",
    "http://www.swauto59.com/photos/cars/114071.jpg",
    "http://www.swauto59.com/photos/cars/114072.jpg",
    "http://www.swauto59.com/photos/cars/114073.jpg",
    "http://www.swauto59.com/photos/cars/114074.jpg",
    "http://www.swauto59.com/photos/cars/114075.jpg",
    "http://www.swauto59.com/photos/cars/114076.jpg",
    "http://www.swauto59.com/photos/cars/114077.jpg",
    "http://www.swauto59.com/photos/cars/114078.jpg",
    "http://www.swauto59.com/photos/cars/114079.jpg",
    "http://www.swauto59.com/photos/cars/114080.jpg",
  ],
  infiniti: [
    "http://www.swauto59.com/photos/cars/109431.jpg",
    "http://www.swauto59.com/photos/cars/109432.jpg",
    "http://www.swauto59.com/photos/cars/109433.jpg",
    "http://www.swauto59.com/photos/cars/109434.jpg",
    "http://www.swauto59.com/photos/cars/109435.jpg",
    "http://www.swauto59.com/photos/cars/109436.jpg",
    "http://www.swauto59.com/photos/cars/109437.jpg",
    "http://www.swauto59.com/photos/cars/109438.jpg",
    "http://www.swauto59.com/photos/cars/109439.jpg",
  ],
};
