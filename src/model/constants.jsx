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

export const cashierSidebarLinks = [
    {
        itemName: "DASHBOARD",
        itemPath: "/cashier/dashboard",
        icon: arrow
    },
    {
        itemName: "MEMBER",
        itemPath: "/cashier/member",
        icon: arrow
    },
    {
        itemName: "TRANSACTION",
        itemPath: "/cashier/transaction",
        icon: fatarrow
    },
];

export const ownerSidebarLinks = [
    {
        itemName: "DASHBOARD",
        itemPath: "/owner/dashboard",
        icon: arrow
    },
    {
        itemName: "TRANSACTION",
        itemPath: "/owner/transaction",
        icon: fatarrow
    },
];

export const adminSidebarLinks = [
    {
        itemName: "DASHBOARD",
        itemPath: "/admin/dashboard",
        icon: arrow
    },
    {
        itemName: "MEMBER",
        itemPath: "/admin/member",
        icon: arrow
    },
    {
        itemName: "OUTLET",
        itemPath: "/admin/outlet",
        icon: arrow
    },
    {
        itemName: "USER",
        itemPath: "/admin/users",
        icon: arrow
    },
    {
        itemName: "PRODUCTS/PACKAGES",
        itemPath: "/admin/products",
        icon: arrow
    },
];

export const historySidebarLinks = [
    {
        itemName: "TRANSACTION",
        itemPath: "/admin/transaction",
        icon: fatarrow
    },
    {
        itemName: "LOG HISTORY",
        itemPath: "/admin/log",
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