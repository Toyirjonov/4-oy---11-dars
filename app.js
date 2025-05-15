//  UYGI VAZIFA 264 QATORDAN BOSHLANGAN

const users = [
  {
    id: "001",
    role: "user",
    profile: {
      name: "Ahror X.",
      email: "ahrorx@site.com",
      age: 26,
      subscription: "premium",
    },
    permissions: {
      readAccess: true,
      writeAccess: false,
      deleteAccess: false,
    },
    activity: [
      { action: "login", time: "2025-05-12T09:00:00Z" },
      { action: "view_course", detail: "React Basics" },
    ],
    settings: {
      theme: "dark",
      language: "uz",
      notifications: { email: true, sms: false },
    },
  },
  {
    id: "002",
    role: "admin",
    profile: {
      name: "Ziyoda R.",
      email: "ziyoda.admin@site.com",
      age: 32,
      subscription: "admin",
    },
    permissions: {
      readAccess: true,
      writeAccess: true,
      deleteAccess: true,
    },
    activity: [
      { action: "login", time: "2025-05-12T07:00:00Z" },
      { action: "delete_user", detail: "User ID 009" },
    ],
    settings: {
      theme: "light",
      language: "en",
      notifications: { email: true, sms: true },
    },
  },
  {
    id: "003",
    role: "user",
    profile: {
      name: "Madina N.",
      email: "madina.n@site.com",
      age: 24,
      subscription: "free",
    },
    permissions: {
      readAccess: true,
      writeAccess: false,
      deleteAccess: false,
    },
    activity: [
      { action: "signup", time: "2025-04-01T12:00:00Z" },
      { action: "comment", detail: "Loved the course!" },
    ],
    settings: {
      theme: "dracula",
      language: "ru",
      notifications: { email: false, sms: false },
    },
  },
  {
    id: "004",
    role: "admin",
    profile: {
      name: "Dilshod K.",
      email: "dilshod.k@site.com",
      age: 35,
      subscription: "admin",
    },
    permissions: {
      readAccess: true,
      writeAccess: true,
      deleteAccess: true,
    },
    activity: [
      { action: "ban_user", detail: "User ID 005" },
      { action: "update_settings", time: "2025-05-10T11:11:11Z" },
    ],
    settings: {
      theme: "light",
      language: "uz",
      notifications: { email: true, sms: true },
    },
  },
  {
    id: "005",
    role: "user",
    profile: {
      name: "Ulug'bek T.",
      email: "ulugbek.t@site.com",
      age: 29,
      subscription: "gold",
    },
    permissions: {
      readAccess: true,
      writeAccess: true,
      deleteAccess: false,
    },
    activity: [
      { action: "like_post", detail: "Post ID 112" },
      { action: "update_profile", time: "2025-05-11T10:00:00Z" },
    ],
    settings: {
      theme: "dark",
      language: "en",
      notifications: { email: true, sms: false },
    },
  },
  {
    id: "006",
    role: "admin",
    profile: {
      name: "Aziz R.",
      email: "aziz.r@site.com",
      age: 38,
      subscription: "admin",
    },
    permissions: {
      readAccess: true,
      writeAccess: true,
      deleteAccess: true,
    },
    activity: [
      { action: "login", time: "2025-05-10T08:22:00Z" },
      { action: "edit_post", detail: "Post ID 456" },
    ],
    settings: {
      theme: "dark",
      language: "ru",
      notifications: { email: true, sms: true },
    },
  },
  {
    id: "007",
    role: "user",
    profile: {
      name: "Sevinch Y.",
      email: "sevinch.y@site.com",
      age: 27,
      subscription: "silver",
    },
    permissions: {
      readAccess: true,
      writeAccess: false,
      deleteAccess: false,
    },
    activity: [{ action: "feedback", detail: "Great interface!" }],
    settings: {
      theme: "light",
      language: "uz",
      notifications: { email: false, sms: false },
    },
  },
  {
    id: "008",
    role: "admin",
    profile: {
      name: "Javlon B.",
      email: "javlon.b@site.com",
      age: 40,
      subscription: "admin",
    },
    permissions: {
      readAccess: true,
      writeAccess: true,
      deleteAccess: true,
    },
    activity: [{ action: "created_post", detail: "News Update" }],
    settings: {
      theme: "light",
      language: "en",
      notifications: { email: true, sms: true },
    },
  },
  {
    id: "009",

    role: "user",
    profile: {
      name: "Kamola S.",
      email: "kamola.s@site.com",
      age: 23,
      subscription: "basic",
    },
    permissions: {
      readAccess: true,
      writeAccess: false,
      deleteAccess: false,
    },
    activity: [{ action: "joined_group", detail: "Frontend Club" }],
    settings: {
      theme: "dark",
      language: "en",
      notifications: { email: true, sms: false },
    },
  },
  {
    id: "010",
    role: "admin",
    profile: {
      name: "Shaxzod M.",
      email: "shaxzod.m@site.com",
      age: 33,
      subscription: "admin",
    },
    permissions: {
      readAccess: true,
      writeAccess: true,
      deleteAccess: true,
    },
    activity: [{ action: "reset_password", detail: "User ID 003" }],
    settings: {
      theme: "dracula",
      language: "uz",
      notifications: { email: true, sms: true },
    },
  },
];

// map
// const changesubscription = users.map((user) => {
//   return {
//     ...user,
//     profile: {
//       ...user.profile,
//       subscription:
//         user.profile.subscription === "admin"
//           ? "user"
//           : user.profile.subscription,
//     },
//   };
// });

// console.log(changesubscription);

// const changeLanguage = users.filter((user) => {
//   return user.settings.language == "uz";
// });
// console.log(changeLanguage);

// let totalAge = 0;

// for (let i = 0; i < users.length; i++) {
//   totalAge += users[i].profile.age;
// }

// console.log("O'rtacha yosh:", totalAge / users.length);

// UY VAZIFA SHU YERDAN BOSHLANGAN

// 1-task
// const checktheme = users.some((user) => {
//   return user.settings.theme == "dark";
// });

// console.log(checktheme);

// 2-task
// Barcha foydalanuvchilarning to‘liq ism va familyasidan iborat yangi array yarating (profile.firstName + " " + profile.email).  (map)

// const names = users.map((user) => {
//   return (user.profile.name += user.profile.email);
// });

// console.log(names);

// 3-task Foydalanuvchilar orasida, emailNotifications o‘chirilgan, lekin smsNotifications yoqilganlarni ajratib oling. (filter)

// const checknotification = users.filter((user) => {
//   return (
//     user.settings.notifications.email === false &&
//     user.settings.notifications.sms === true
//   );
// });

// console.log(checknotification);

// 4-task
// Barcha foydalanuvchilarning subscription qiymatiga qarab ularning obuna turlarini konsolga chiqarib chiqing (takrorlanmas holda). (forEach)

// const arr = [];

// users.forEach((user) => {
//   if (!arr.includes(user.profile.subscription)) {
//     arr.push(user.profile.subscription);
//   }
// });

// console.log(arr);

// 5-task
// Foydalanuvchilarning barcha name (profil nomlarini) kichik harflarda va faqat ism qismini (familyasiz) ajratib, yangi arrayga yig‘ing.
// Misol: "Ahror X." → "ahror"

// const names = users.map((user) => {
//   return user.profile.name.split(" ")[0].toLowerCase();
// });

// console.log(names);

// 6-task
// Foydalanuvchilar orasidan faqatgina sms xabarnomalari yoqilganlarini ajratib oling.
// const smson = users.filter((user) => {
//   return user.settings.notifications.sms == true;
// });

// console.log(smson);

// 8-task
// Foydalanuvchilar orasidan birinchi bo‘lib action maydonida "login" qilgan foydalanuvchini toping.
// const firstLogin = users.find((user) => {
//   return user.activity.some((activitye) => activitye.action == "login");
// });
// console.log(firstLogin);

// 9-task
// Har bir foydalanuvchi uchun yangi obyekt yarating: name, subscription, va language qiymatlari ajratilgan bo‘lsin.
// const newObjectForUsers = users.map((user) => {
//   return {
//     name: user.profile.name,
//     subscription: user.profile.subscription,
//     language: user.settings.language,
//   };
// });
// console.log(newObjectForUsers);

// 10-task
// Faqat user rolli foydalanuvchilardan iborat yangi array yarating, ularning faqat name va theme ma’lumotlarini saqlang.
// let arr = [];

// users.forEach((user) => {
//   if (user.role === "user") {
//     arr.push({
//       name: user.profile.name,
//       theme: user.settings.theme,
//     });
//   }
// });

// console.log(arr);

// 11-task
// Har bir foydalanuvchining activity arrayida "delete_user" harakati bor-yo‘qligini tekshiring.
// const checkActivity = users.some((user) => {
//   return user.activity.some((act) => act.action == "delete_user");
// });

// console.log(checkActivity);

// 12-task
// Foydalanuvchilar orasidan subscription qiymati free, basic yoki silver bo‘lganlarni ajratib oling.
// const Takesubscription = users.filter((user) => {
//   return (
//     user.profile.subscription == "free" ||
//     user.profile.subscription == "basic" ||
//     user.profile.subscription == "silver"
//   );
// });

// console.log(Takesubscription);

// 13-task
// Bahosi 5, 4, 3 bo’lgan o’quvchilarni ismlaridan iborat massiv qaytaruvchi getNamesByGrade(students, grade) funksiyasini tuzing. (map, filter)
// 5 baho - (85 - 100)
// 4 baho - (70 - 85)
// 3 baho - (60 - 70)

// const students = [
//   { name: "Ali", score: 60 },
//   { name: "Shohruhmirzo", score: 99 },
//   { name: "Madina", score: 75 },
//   { name: "Muhriddin", score: 55 }
// ];

// function getNamesByGrade(students, grade) {
//   let maxgrade = 0;
//   let mingrade = 0;

//   if (grade == 5) {
//     mingrade = 85;
//     maxgrade = 100;
//   } else if (grade == 4) {
//     mingrade = 70;
//     maxgrade = 85;
//   } else if (grade == 3) {
//     mingrade = 60;
//     maxgrade = 70;
//   } else {
//     return [];
//   }

//   return students
//     .filter((student) => student.score >= mingrade && student.score < maxgrade)
//     .map((student) => student.name);
// }

// console.log(getNamesByGrade(students, 5));
// console.log(getNamesByGrade(students, 4));
// console.log(getNamesByGrade(students, 3));

// 14-task
// Massiv elementlari kvadratlaridan hosil bo’lgan massiv hosil qiling. (map)
// Input: [1, 2, 3, 4, 5] → Output: [1, 4, 9, 16, 25]

// const numbers = [1, 2, 3, 4, 5];
// const kvadrat = numbers.map((number) => number * number);
// console.log(kvadrat);

// 15-task
// Massivdagi musbat sonlar yig’indisini hisoblang. (filter)
// Input: [1, -4, 12, 0, -3, 29, -150] → Output: 42

// const numbers = [1, -4, 12, 0, -3, 29, -150];

// const musbatsonlar = numbers.filter((number) => number > 0);
// let result = 0;
// musbatsonlar.forEach((number) => (result += number));
// console.log(result);

// 16-task
// Satrdagi so‘zlarning bosh harflarini oling. (split, map, join)
// Input: 'George Raymond Richard Martin' → Output: 'GRRM'

// const names = "George Raymond Richard Martin";

// const takeFirstLetter = names
//   .split(" ")
//   .map((word) => word[0])
//   .join("");

// console.log(takeFirstLetter);

// 17-task
// Massivdagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort)
// const ageDifference = users
//   .map((user) => user.profile.age)
//   .sort((a, b) => a - b);

// const difference = ageDifference[ageDifference.length - 1] - ageDifference[0];
// console.log(difference);

// 18-task
// N ta elementdan iborat massiv berilgan. Massiv elementlari orasidan juftlarini va toqlarini o'z ichiga oladigan massivlar hosil qilinsin. (filter)
// const numbers = [3, 7, 2, 8, 5, 12, 9, 4, 1, 6];
// const juft = numbers.filter((number) => number % 2 === 0);
// const toq = numbers.filter((number) => number % 2 !== 0);
// console.log(juft);
// console.log(toq);

// 19-task
// N ta elementdan iborat massiv berilgan. Massiv elementlari orasidan bir xil qiymatga ega bo’lganlarini o’chiruvchi dastur tuzilsin. Faqat birinchi uchragani qoldirilsin. (filter yoki Set)
// const numbers = [1, 3, 2, 3, 4, 1, 5, 2];
// const number = numbers.filter((item, index, arr) => {
//   return arr.indexOf(item) == index;
// });
// console.log(number);

// 20-task
// Products massivini id, name, price, rating va discount bo'yicha sortlash. (sort)
// const products = [
//   { id: 3, name: "Smartphone", price: 450, rating: 4.5, discount: 10 },
//   { id: 1, name: "Laptop", price: 999, rating: 4.7, discount: 15 },
//   { id: 5, name: "Headphones", price: 99, rating: 4.3, discount: 5 },
//   { id: 4, name: "Keyboard", price: 120, rating: 4.0, discount: 20 },
//   { id: 2, name: "Monitor", price: 300, rating: 4.2, discount: 12 },
// ];

// const byId = [...products].sort((a, b) => a.id - b.id);
// const byName = [...products].sort((a, b) => {
//   if (a.name < b.name) return -1;
//   if (a.name > b.name) return 1;
//   return 0;
// });
// const byPrice = [...products].sort((a, b) => a.price - b.price);
// const byRating = [...products].sort((a, b) => b.rating - a.rating);
// const byDiscount = [...products].sort((a, b) => b.discount - a.discount);

// console.log(byId);
// console.log(byName);
// console.log(byPrice);
// console.log(byRating);
// console.log(byDiscount);

// 21-task
// Rating bo'yicha eng kuchli product topilsin. (sort)
// const products = [
//   { id: 3, name: "Smartphone", price: 450, rating: 4.5, discount: 10 },
//   { id: 1, name: "Laptop", price: 999, rating: 4.7, discount: 15 },
//   { id: 5, name: "Headphones", price: 99, rating: 4.3, discount: 5 },
//   { id: 4, name: "Keyboard", price: 120, rating: 4.0, discount: 20 },
//   { id: 2, name: "Monitor", price: 300, rating: 4.2, discount: 12 },
// ];
// const strongProduct = products.sort((a, b) => b.rating - a.rating)[0];
// console.log(strongProduct);
