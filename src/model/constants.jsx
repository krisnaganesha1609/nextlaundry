import {login, dot, arrow, fatarrow, reversefatarrow, trendingup, trendingdown} from "../assets/";

export const navLinks = [
    {
        id: "home",
        title: "Home", 
        dot:dot
    },
    {
        id: "about",
        title: "About",
        dot: dot
    },
    {
        id: "services",
        title: "Services",
        dot: dot
    },
    {
        id: "contact",
        title: "Contact",
        dot: dot
    },
    {
        id: "auth",
        icon: login
    },
];

export const userSidebarLinks = [
    {
        itemName: "DASHBOARD",
        itemPath: "/nextlaundry/dashboard",
        icon: arrow
    },
    {
        itemName: "TRANSACTION",
        itemPath: "/nextlaundry/transaction",
        icon: fatarrow
    },
];

export const adminSidebarLinks = [
    {
        itemName: "DASHBOARD",
        itemPath: "/nextlaundry/dashboard",
        icon: arrow
    },
    {
        itemName: "MEMBER",
        itemPath: "/nextlaundry/member",
        icon: arrow
    },
    {
        itemName: "OUTLET",
        itemPath: "/nextlaundry/outlet",
        icon: arrow
    },
    {
        itemName: "USER",
        itemPath: "/nextlaundry/users",
        icon: arrow
    },
    {
        itemName: "PRODUCTS/PACKAGES",
        itemPath: "/nextlaundry/products",
        icon: arrow
    },
];

export const historySidebarLinks = [
    {
        itemName: "TRANSACTION",
        itemPath: "/nextlaundry/transaction",
        icon: fatarrow
    },
    {
        itemName: "LOG HISTORY",
        itemPath: "/nextlaundry/log",
        icon: fatarrow
    },
];

export const dangerSidebarLinks = [
    {
        itemName: "LET ME OUT",
        itemPath: "/auth",
        icon: reversefatarrow
    },
];

export const dataCard = [
    {
        header: "Pickup",
        total: "100,326",
        percent: "5,89%",
        trending: trendingup,
        footer: "Compared to (96,114) last month"
    },
    {
        header: "Member",
        total: "90,472",
        percent: "7,92%",
        trending: trendingup,
        footer: "Compared to (86,231) last month"
    },
    {
        header: "Net Income",
        total: "Rp259,456,990",
        percent: "10,12%",
        trending: trendingdown,
        footer: "Compared to (304,986,557) last month"
    },
];