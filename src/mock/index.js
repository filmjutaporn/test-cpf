import { ReactComponent as Calendar } from '../static/images/icons/calendar.svg';
import { ReactComponent as Chat } from '../static/images/icons/chat.svg';
import { ReactComponent as Task } from '../static/images/icons/task.svg';
import { ReactComponent as Note } from '../static/images/icons/note.svg';
import { ReactComponent as Contact } from '../static/images/icons/contact.svg';



export const mockSidebar = [
  {
    label: "Dashboard",
    icon: "icon-grid",
  },
  {
    label: "E-Commerce",
    icon: "icon-cart",
    subMenu: [
      {
        label: "Products",
      },
      {
        label: "Orders",
      },
      {
        label: "Customers",
      },
    ],
  },
  {
    label: "Calendar",
    svg: <Calendar/>
  },
  {
    label: "Mail",
    icon: "icon-mail",
    count: 8,
  },
  {
    label: "Chat",
    svg: <Chat/>
  },
  {
    label: "Tasks",
    svg: <Task/>
  },
  {
    label: "Projects",
    icon: "icon-project",
  },
  {
    label: "File Manager",
    icon: "icon-folder",
  },
  {
    label: "Notes",
    svg: <Note/>
  },
  {
    label: "Contacts",
    svg: <Contact/>
  },
];

export const mockTransaction = [
  {
    name: "Shopping",
    date: "08:00 AM  —  19 August",
    total: "1.400",
  },
  {
    name: "Travel",
    date: "09:45 AM  —  21 August",
    total: "850",
  },
  {
    name: "Food",
    date: "10:15 AM  —  24 August",
    total: "2.150",
  },
  {
    name: "Medicine",
    date: "10:50 AM  —  24 August",
    total: "650",
  },
  {
    name: "Sport",
    date: "12:45 AM  —  28 August",
    total: "900",
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
    value: "8.5",
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
