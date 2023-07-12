import { ReactComponent as Calendar } from "../static/images/icons/calendar.svg";
import { ReactComponent as Chat } from "../static/images/icons/chat.svg";
import { ReactComponent as Task } from "../static/images/icons/task.svg";
import { ReactComponent as Note } from "../static/images/icons/note.svg";
import { ReactComponent as Contact } from "../static/images/icons/contact.svg";

import { ReactComponent as Shopping } from "../static/images/icons/shopping.svg";
import { ReactComponent as Food } from "../static/images/icons/food.svg";
import { ReactComponent as Sport } from "../static/images/icons/sport.svg";
import { ReactComponent as Travel } from "../static/images/icons/travel.svg";
import { ReactComponent as Medicine } from "../static/images/icons/medicine.svg";

export const mockSidebar = [
  {
    label: "dashboard",
    icon: "icon-grid",
  },
  {
    label: "e-commerce",
    icon: "icon-cart",
    subMenu: [
      {
        label: "products",
      },
      {
        label: "orders",
      },
      {
        label: "customers",
      },
    ],
  },
  {
    label: "calendar",
    svg: <Calendar />,
  },
  {
    label: "mail",
    icon: "icon-mail",
    count: 8,
  },
  {
    label: "chat",
    svg: <Chat />,
  },
  {
    label: "tasks",
    svg: <Task />,
  },
  {
    label: "projects",
    icon: "icon-project",
  },
  {
    label: "file manager",
    icon: "icon-folder",
  },
  {
    label: "notes",
    svg: <Note />,
  },
  {
    label: "contacts",
    svg: <Contact />,
  },
];

export const mockTransaction = [
  {
    name: "Shopping",
    date: "08:00 AM  —  19 August",
    total: "1.400",
    icon: <Shopping />,
  },
  {
    name: "Travel",
    date: "09:45 AM  —  21 August",
    total: "850",
    icon: <Travel />,
  },
  {
    name: "Food",
    date: "10:15 AM  —  24 August",
    total: "2.150",
    icon: <Food />,
  },
  {
    name: "Medicine",
    date: "10:50 AM  —  24 August",
    total: "650",
    icon: <Medicine />,
  },
  {
    name: "Sport",
    date: "12:45 AM  —  28 August",
    total: "900",
    icon: <Sport />,
  },
];

export const mockCreditCard = [
  { key: "Card Type", value: "Visa" },
  { key: "Card Holder", value: "Felecia Brown" },
  { key: "Expires", value: "12/19" },
  { key: "Card Number", value: "5880 5087 3288 8854" },
  { key: "Total Balance", value: "80,700.00" },
  { key: "Total Debt", value: "8,250.00" },
];

export const mockRevenue = [
  {
    title: "Total Income",
    value: "8.500",
    status: "up",
    average: 50.8,
    bg: "#0A6EE1",
  },
  {
    title: "Total Expense",
    value: "3.500K",
    status: "down",
    average: 10.5,
    bg: "#22AB67",
  },
  {
    title: "Total Bonus",
    value: "5.100K",
    status: "up",
    average: 24.9,
    bg: "#F8BD26",
  },
];

export const mockTabList = [
  { name: "All", value: 283 },
  { name: "Available", value: 268 },
  { name: "Disabled", value: 15 },
];

export const mockDisplayType = [
  { name: "list", icon: "icon-list" },
  { name: "grid", icon: "icon-grid" },
];

export const mockBarChart = [
  {
    day: "Mon",
    income: "7.600",
    expense: "4.800",
  },
  {
    day: "Tue",
    income: "3.700",
    expense: "2.670",
  },
  {
    day: "Wed",
    income: "2.940",
    expense: "3.670",
  },
  {
    day: "Thu",
    income: "1.900",
    expense: "6.200",
  },
  {
    day: "Fri",
    income: "4.300",
    expense: "3.590",
  },
  {
    day: "Sat",
    income: "7.800",
    expense: "2.700",
  },
  {
    day: "Sun",
    income: "5.000",
    expense: "2.200",
  },
];

export const mockBalanceLineChart = [
  {
    expenses: 0,
    income: 0,
  },
  {
    expenses: 3000,
    income: 1398,
  },
  {
    expenses: 2000,
    income: 5100,
  },
  {
    expenses: 2780,
    income: 3908,
  },
  {
    expenses: 1890,
    income: 4800,
  },
  {
    expenses: 2390,
    income: 3800,
  },
  {
    expenses: 3490,
    income: 4300,
  },
];

export const mockAreaChart = [
  { x: 1, y: 64 },
  { x: 2, y: 61 },
  { x: 3, y: 64 },
  { x: 4, y: 62 },
  { x: 5, y: 64 },
  { x: 6, y: 60 },
  { x: 7, y: 58 },
  { x: 8, y: 59 },
  { x: 9, y: 53 },
  { x: 10, y: 54 },
  { x: 11, y: 61 },
  { x: 12, y: 60 },
  { x: 13, y: 55 },
  { x: 14, y: 60 },
  { x: 15, y: 56 },
  { x: 16, y: 60 },
  { x: 17, y: 59.5 },
  { x: 18, y: 63 },
  { x: 19, y: 58 },
  { x: 20, y: 54 },
  { x: 21, y: 59 },
  { x: 22, y: 64 },
  { x: 23, y: 59 },
];
