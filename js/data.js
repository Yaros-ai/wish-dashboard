const user = {
  name: "Ярослава",
  surname: "Савченко",
  userPhoto: "my-photo.jpg",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "car.jpg", alt: "MACBOOK AIR 2020" },
    { src: "home.jpg", alt: "ГЕЛЕНТВАГЕН AMG" },
    { src: "voyage.jpg", alt: "Подорож до Дубай" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  13583256,
  700,
  800,
  1000,
  1200,
  1500,
  1800,
  2100,
  2400,
  2700,
  3000,
  33,
];

const necessaryExpenses = 80;

const todo = [
  { month: "Червень", skill: "Читання" },
  { month: "Липень", skill: "Java" },
  { month: "Серпень", skill: "Python" },
  { month: "Вересень", skill: "Самостійність" },
  { month: "Жовтень", skill: "Катання на роликах" },
  { month: "Листопад", skill: "Емоційний інтелект" },
  { month: "Грудень", skill: "Креативність" },
  { month: "Січень", skill: "Лідерство" },
  { month: "Лютий", skill: "Катання на ковзанах" },
  { month: "Березень", skill: "Особистий бренд" },
  { month: "Квітень", skill: "Управління фінансами" },
  { month: "Травень", skill: "Публічні виступи" },
];

export { user, arr, necessaryExpenses, todo };
