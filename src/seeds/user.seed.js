import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  {
    email: "dmitry.gordeev@example.com",
    fullName: "Дмитрий Гордеев",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "daniil.kondratiev@example.com",
    fullName: "Даниил Кондратьев",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "veronika.yakupova@example.com",
    fullName: "Вероника Якупова",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "filipp.vakurov@example.com",
    fullName: "Филипп Вакуров",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "nikita.galkin@example.com",
    fullName: "Никита Галкин",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "arseniy.naymenko@example.com",
    fullName: "Арсений Науменко",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "daniil.kobzar@example.com",
    fullName: "Даниил Кобзарь",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    email: "oleg.pytalev@example.com",
    fullName: "Олег Пыталев",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    email: "emil.asabaev@example.com",
    fullName: "Эмиль Асабаев",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "emil.urazbahtin@example.com",
    fullName: "Эмиль Уразбахтин",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "tayler.derden@example.com",
    fullName: "Тайлер Дерден",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "vladimir.lukashenko@example.com",
    fullName: "Владимир Лукашенко",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "ivan.zolo@example.com",
    fullName: "Иван Золо",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "adam.evovich@example.com",
    fullName: "Адам Евович",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "ruslan.sharipov@example.com",
    fullName: "Руслан Шарипов",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();