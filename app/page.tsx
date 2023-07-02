import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";
import Image from "next/image";
import TopCategoriesData from "../data";

// const TopCategoriesData = [
//   {
//     id: "1",
//     jobField: "WebsiteDevelopment",
//     position: "10",
//     jobMenu: [
//       {
//         _id: "6246db5be7676f0018395187",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3966706",
//         title: "Staff Systems Engineer, Foundry",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:43.063Z",
//       },
//       {
//         _id: "6246db5be7676f0018395187",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3966706",
//         title: "Staff Systems Engineer, Foundry",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:43.063Z",
//         position: "4",
//       },
//       {
//         _id: "6246db5be7676f0018395186",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3799024",
//         title: "Group Product Manager - Email & Core",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.635Z",
//         position: "30",
//       },
//       {
//         _id: "6246db5be7676f0018395185",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3892641",
//         title: "Senior Content Designer",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.517Z",
//         position: "3",
//       },
//       {
//         _id: "6246db5be7676f0018395184",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3927977",
//         title: "Senior Analyst, Marketing Content & SEO",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.382Z",
//         position: "8",
//       },
//       {
//         _id: "6246db5be7676f0018395183",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3437473",
//         title: "Analyst, Marketing Analytics",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.303Z",
//         position: "7",
//       },
//       {
//         _id: "6246db5be7676f0018395182",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3343712",
//         title: "Program Manager",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.221Z",
//         position: "3",
//       },
//       {
//         _id: "6246db5be7676f0018395180",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3871235",
//         title: "Software Engineer III, Front End Design Systems",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.826Z",
//         position: "11",
//       },
//       {
//         _id: "6246db5be7676f001839517f",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3977799",
//         title: "Senior Content Strategist(Video Specialty)",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.724Z",
//         position: "12",
//       },
//       {
//         _id: "6246db5be7676f001839517e",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4029545",
//         title: "Business Systems Analyst",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.613Z",
//         position: "13",
//       },
//       {
//         _id: "6246db5be7676f001839517c",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3981306",
//         title: "Senior Software Engineer, Data Services - Development",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.319Z",
//         position: "5",
//       },
//       {
//         _id: "6246db5be7676f001839517a",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4020464",
//         title: "Senior Engineering Manager, Smart Marketing Platform",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.216Z",
//         position: "7",
//       },
//       {
//         _id: "6246db5be7676f0018395179",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3549839",
//         title: "Product Manager, Customer Data & Privacy",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.024Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395178",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3589935",
//         title: "Senior Product Manager-Customer Empowerment",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.845Z",
//         position: "6",
//       },
//       {
//         _id: "6246db5be7676f0018395177",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4004538",
//         title: "Engineering Manager, Monetization",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.710Z",
//         position: "7",
//       },
//       {
//         _id: "6246db5be7676f0018395175",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3502887",
//         title: "Project Manager",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.554Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395174",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4054925",
//         title: "Senior Golang Software Engineer, Backend",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.486Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395172",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4055875",
//         title: "Support Insights Analyst III",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.178Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395171",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3971589",
//         title: "Partner Success Associate",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:39.977Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395170",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4081479",
//         title: "Sales Director",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:39.828Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f001839516f",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3954564",
//         title: "Senior Service Designer",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:39.662Z",
//         position: "10",
//       },
//     ],
//   },
//   {
//     id: "2",
//     jobField: "Software Development",
//     position: "5",
//     jobMenu: [
//       {
//         _id: "6246db5be7676f0018395187",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3966706",
//         title: "Staff Systems Engineer, Foundry",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:43.063Z",
//       },
//       {
//         _id: "6246db5be7676f0018395187",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3966706",
//         title: "Staff Systems Engineer, Foundry",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:43.063Z",
//         position: "4",
//       },
//       {
//         _id: "6246db5be7676f0018395186",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3799024",
//         title: "Group Product Manager - Email & Core",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.635Z",
//         position: "30",
//       },
//       {
//         _id: "6246db5be7676f0018395185",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3892641",
//         title: "Senior Content Designer",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.517Z",
//         position: "3",
//       },
//       {
//         _id: "6246db5be7676f0018395184",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3927977",
//         title: "Senior Analyst, Marketing Content & SEO",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.382Z",
//         position: "8",
//       },
//       {
//         _id: "6246db5be7676f0018395183",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3437473",
//         title: "Analyst, Marketing Analytics",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.303Z",
//         position: "7",
//       },
//       {
//         _id: "6246db5be7676f0018395182",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3343712",
//         title: "Program Manager",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.221Z",
//         position: "3",
//       },
//       {
//         _id: "6246db5be7676f0018395180",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3871235",
//         title: "Software Engineer III, Front End Design Systems",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.826Z",
//         position: "11",
//       },
//       {
//         _id: "6246db5be7676f001839517f",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3977799",
//         title: "Senior Content Strategist(Video Specialty)",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.724Z",
//         position: "12",
//       },
//       {
//         _id: "6246db5be7676f001839517e",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4029545",
//         title: "Business Systems Analyst",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.613Z",
//         position: "13",
//       },
//       {
//         _id: "6246db5be7676f001839517c",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3981306",
//         title: "Senior Software Engineer, Data Services - Development",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.319Z",
//         position: "5",
//       },
//       {
//         _id: "6246db5be7676f001839517a",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4020464",
//         title: "Senior Engineering Manager, Smart Marketing Platform",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.216Z",
//         position: "7",
//       },
//       {
//         _id: "6246db5be7676f0018395179",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3549839",
//         title: "Product Manager, Customer Data & Privacy",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.024Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395178",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3589935",
//         title: "Senior Product Manager-Customer Empowerment",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.845Z",
//         position: "6",
//       },
//       {
//         _id: "6246db5be7676f0018395177",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4004538",
//         title: "Engineering Manager, Monetization",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.710Z",
//         position: "7",
//       },
//       {
//         _id: "6246db5be7676f0018395175",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3502887",
//         title: "Project Manager",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.554Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395174",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4054925",
//         title: "Senior Golang Software Engineer, Backend",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.486Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395172",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4055875",
//         title: "Support Insights Analyst III",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.178Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395171",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3971589",
//         title: "Partner Success Associate",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:39.977Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395170",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4081479",
//         title: "Sales Director",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:39.828Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f001839516f",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3954564",
//         title: "Senior Service Designer",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:39.662Z",
//         position: "10",
//       },
//     ],
//   },
//   {
//     id: "3",
//     jobField: "UI Designer",
//     position: "8",
//     jobMenu: [
//       {
//         _id: "6246db5be7676f0018395187",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3966706",
//         title: "Staff Systems Engineer, Foundry",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:43.063Z",
//       },
//       {
//         _id: "6246db5be7676f0018395187",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3966706",
//         title: "Staff Systems Engineer, Foundry",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:43.063Z",
//         position: "4",
//       },
//       {
//         _id: "6246db5be7676f0018395186",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3799024",
//         title: "Group Product Manager - Email & Core",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.635Z",
//         position: "30",
//       },
//       {
//         _id: "6246db5be7676f0018395185",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3892641",
//         title: "Senior Content Designer",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.517Z",
//         position: "3",
//       },
//       {
//         _id: "6246db5be7676f0018395184",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3927977",
//         title: "Senior Analyst, Marketing Content & SEO",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.382Z",
//         position: "8",
//       },
//       {
//         _id: "6246db5be7676f0018395183",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3437473",
//         title: "Analyst, Marketing Analytics",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.303Z",
//         position: "7",
//       },
//       {
//         _id: "6246db5be7676f0018395182",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3343712",
//         title: "Program Manager",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.221Z",
//         position: "3",
//       },
//       {
//         _id: "6246db5be7676f0018395180",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3871235",
//         title: "Software Engineer III, Front End Design Systems",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.826Z",
//         position: "11",
//       },
//       {
//         _id: "6246db5be7676f001839517f",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3977799",
//         title: "Senior Content Strategist(Video Specialty)",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.724Z",
//         position: "12",
//       },
//       {
//         _id: "6246db5be7676f001839517e",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4029545",
//         title: "Business Systems Analyst",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.613Z",
//         position: "13",
//       },
//       {
//         _id: "6246db5be7676f001839517c",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3981306",
//         title: "Senior Software Engineer, Data Services - Development",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.319Z",
//         position: "5",
//       },
//       {
//         _id: "6246db5be7676f001839517a",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4020464",
//         title: "Senior Engineering Manager, Smart Marketing Platform",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.216Z",
//         position: "7",
//       },
//       {
//         _id: "6246db5be7676f0018395179",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3549839",
//         title: "Product Manager, Customer Data & Privacy",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.024Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395178",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3589935",
//         title: "Senior Product Manager-Customer Empowerment",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.845Z",
//         position: "6",
//       },
//       {
//         _id: "6246db5be7676f0018395177",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4004538",
//         title: "Engineering Manager, Monetization",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.710Z",
//         position: "7",
//       },
//       {
//         _id: "6246db5be7676f0018395175",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3502887",
//         title: "Project Manager",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.554Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395174",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4054925",
//         title: "Senior Golang Software Engineer, Backend",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.486Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395172",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4055875",
//         title: "Support Insights Analyst III",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.178Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395171",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3971589",
//         title: "Partner Success Associate",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:39.977Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395170",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4081479",
//         title: "Sales Director",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:39.828Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f001839516f",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3954564",
//         title: "Senior Service Designer",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:39.662Z",
//         position: "10",
//       },
//     ],
//   },
//   {
//     id: "4",
//     jobField: "PHP Programming",
//     position: "7",
//     jobMenu: [
//       {
//         _id: "6246db5be7676f0018395187",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3966706",
//         title: "Staff Systems Engineer, Foundry",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:43.063Z",
//       },
//       {
//         _id: "6246db5be7676f0018395187",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3966706",
//         title: "Staff Systems Engineer, Foundry",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:43.063Z",
//         position: "4",
//       },
//       {
//         _id: "6246db5be7676f0018395186",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3799024",
//         title: "Group Product Manager - Email & Core",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.635Z",
//         position: "30",
//       },
//       {
//         _id: "6246db5be7676f0018395185",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3892641",
//         title: "Senior Content Designer",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.517Z",
//         position: "3",
//       },
//       {
//         _id: "6246db5be7676f0018395184",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3927977",
//         title: "Senior Analyst, Marketing Content & SEO",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.382Z",
//         position: "8",
//       },
//       {
//         _id: "6246db5be7676f0018395183",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3437473",
//         title: "Analyst, Marketing Analytics",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.303Z",
//         position: "7",
//       },
//       {
//         _id: "6246db5be7676f0018395182",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3343712",
//         title: "Program Manager",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.221Z",
//         position: "3",
//       },
//       {
//         _id: "6246db5be7676f0018395180",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3871235",
//         title: "Software Engineer III, Front End Design Systems",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.826Z",
//         position: "11",
//       },
//       {
//         _id: "6246db5be7676f001839517f",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3977799",
//         title: "Senior Content Strategist(Video Specialty)",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.724Z",
//         position: "12",
//       },
//       {
//         _id: "6246db5be7676f001839517e",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4029545",
//         title: "Business Systems Analyst",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.613Z",
//         position: "13",
//       },
//       {
//         _id: "6246db5be7676f001839517c",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3981306",
//         title: "Senior Software Engineer, Data Services - Development",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.319Z",
//         position: "5",
//       },
//       {
//         _id: "6246db5be7676f001839517a",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4020464",
//         title: "Senior Engineering Manager, Smart Marketing Platform",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.216Z",
//         position: "7",
//       },
//       {
//         _id: "6246db5be7676f0018395179",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3549839",
//         title: "Product Manager, Customer Data & Privacy",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.024Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395178",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3589935",
//         title: "Senior Product Manager-Customer Empowerment",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.845Z",
//         position: "6",
//       },
//       {
//         _id: "6246db5be7676f0018395177",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4004538",
//         title: "Engineering Manager, Monetization",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.710Z",
//         position: "7",
//       },
//       {
//         _id: "6246db5be7676f0018395175",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3502887",
//         title: "Project Manager",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.554Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395174",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4054925",
//         title: "Senior Golang Software Engineer, Backend",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.486Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395172",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4055875",
//         title: "Support Insights Analyst III",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.178Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395171",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3971589",
//         title: "Partner Success Associate",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:39.977Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395170",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4081479",
//         title: "Sales Director",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:39.828Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f001839516f",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3954564",
//         title: "Senior Service Designer",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:39.662Z",
//         position: "10",
//       },
//     ],
//   },
//   {
//     id: "3",
//     jobField: "Graphic Designer",
//     position: "8",
//     jobMenu: [
//       {
//         _id: "6246db5be7676f0018395187",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3966706",
//         title: "Staff Systems Engineer, Foundry",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:43.063Z",
//       },
//       {
//         _id: "6246db5be7676f0018395187",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3966706",
//         title: "Staff Systems Engineer, Foundry",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:43.063Z",
//         position: "4",
//       },
//       {
//         _id: "6246db5be7676f0018395186",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3799024",
//         title: "Group Product Manager - Email & Core",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.635Z",
//         position: "30",
//       },
//       {
//         _id: "6246db5be7676f0018395185",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3892641",
//         title: "Senior Content Designer",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.517Z",
//         position: "3",
//       },
//       {
//         _id: "6246db5be7676f0018395184",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3927977",
//         title: "Senior Analyst, Marketing Content & SEO",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.382Z",
//         position: "8",
//       },
//       {
//         _id: "6246db5be7676f0018395183",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3437473",
//         title: "Analyst, Marketing Analytics",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.303Z",
//         position: "7",
//       },
//       {
//         _id: "6246db5be7676f0018395182",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3343712",
//         title: "Program Manager",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.221Z",
//         position: "3",
//       },
//       {
//         _id: "6246db5be7676f0018395180",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3871235",
//         title: "Software Engineer III, Front End Design Systems",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.826Z",
//         position: "11",
//       },
//       {
//         _id: "6246db5be7676f001839517f",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3977799",
//         title: "Senior Content Strategist(Video Specialty)",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.724Z",
//         position: "12",
//       },
//       {
//         _id: "6246db5be7676f001839517e",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4029545",
//         title: "Business Systems Analyst",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.613Z",
//         position: "13",
//       },
//       {
//         _id: "6246db5be7676f001839517c",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3981306",
//         title: "Senior Software Engineer, Data Services - Development",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.319Z",
//         position: "5",
//       },
//       {
//         _id: "6246db5be7676f001839517a",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4020464",
//         title: "Senior Engineering Manager, Smart Marketing Platform",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.216Z",
//         position: "7",
//       },
//       {
//         _id: "6246db5be7676f0018395179",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3549839",
//         title: "Product Manager, Customer Data & Privacy",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.024Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395178",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3589935",
//         title: "Senior Product Manager-Customer Empowerment",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.845Z",
//         position: "6",
//       },
//       {
//         _id: "6246db5be7676f0018395177",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4004538",
//         title: "Engineering Manager, Monetization",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.710Z",
//         position: "7",
//       },
//       {
//         _id: "6246db5be7676f0018395175",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3502887",
//         title: "Project Manager",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.554Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395174",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4054925",
//         title: "Senior Golang Software Engineer, Backend",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.486Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395172",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4055875",
//         title: "Support Insights Analyst III",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.178Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395171",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3971589",
//         title: "Partner Success Associate",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:39.977Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395170",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4081479",
//         title: "Sales Director",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:39.828Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f001839516f",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3954564",
//         title: "Senior Service Designer",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:39.662Z",
//         position: "10",
//       },
//     ],
//   },
//   {
//     id: "3",
//     jobField: "Customer Service",
//     position: "9",
//     jobMenu: [
//       {
//         _id: "6246db5be7676f0018395187",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3966706",
//         title: "Staff Systems Engineer, Foundry",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:43.063Z",
//       },
//       {
//         _id: "6246db5be7676f0018395187",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3966706",
//         title: "Staff Systems Engineer, Foundry",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:43.063Z",
//         position: "4",
//       },
//       {
//         _id: "6246db5be7676f0018395186",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3799024",
//         title: "Group Product Manager - Email & Core",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.635Z",
//         position: "30",
//       },
//       {
//         _id: "6246db5be7676f0018395185",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3892641",
//         title: "Senior Content Designer",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.517Z",
//         position: "3",
//       },
//       {
//         _id: "6246db5be7676f0018395184",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3927977",
//         title: "Senior Analyst, Marketing Content & SEO",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.382Z",
//         position: "8",
//       },
//       {
//         _id: "6246db5be7676f0018395183",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3437473",
//         title: "Analyst, Marketing Analytics",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.303Z",
//         position: "7",
//       },
//       {
//         _id: "6246db5be7676f0018395182",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3343712",
//         title: "Program Manager",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:42.221Z",
//         position: "3",
//       },
//       {
//         _id: "6246db5be7676f0018395180",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3871235",
//         title: "Software Engineer III, Front End Design Systems",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.826Z",
//         position: "11",
//       },
//       {
//         _id: "6246db5be7676f001839517f",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3977799",
//         title: "Senior Content Strategist(Video Specialty)",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.724Z",
//         position: "12",
//       },
//       {
//         _id: "6246db5be7676f001839517e",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4029545",
//         title: "Business Systems Analyst",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.613Z",
//         position: "13",
//       },
//       {
//         _id: "6246db5be7676f001839517c",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3981306",
//         title: "Senior Software Engineer, Data Services - Development",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.319Z",
//         position: "5",
//       },
//       {
//         _id: "6246db5be7676f001839517a",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4020464",
//         title: "Senior Engineering Manager, Smart Marketing Platform",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.216Z",
//         position: "7",
//       },
//       {
//         _id: "6246db5be7676f0018395179",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3549839",
//         title: "Product Manager, Customer Data & Privacy",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:41.024Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395178",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3589935",
//         title: "Senior Product Manager-Customer Empowerment",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.845Z",
//         position: "6",
//       },
//       {
//         _id: "6246db5be7676f0018395177",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4004538",
//         title: "Engineering Manager, Monetization",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.710Z",
//         position: "7",
//       },
//       {
//         _id: "6246db5be7676f0018395175",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3502887",
//         title: "Project Manager",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.554Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395174",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4054925",
//         title: "Senior Golang Software Engineer, Backend",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.486Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395172",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4055875",
//         title: "Support Insights Analyst III",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:40.178Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395171",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3971589",
//         title: "Partner Success Associate",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:39.977Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f0018395170",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-4081479",
//         title: "Sales Director",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:39.828Z",
//         position: "10",
//       },
//       {
//         _id: "6246db5be7676f001839516f",
//         company_logo:
//           "https://res.cloudinary.com/shz/image/upload/v1584468335/OKJob/mailchimp-logo.svg",
//         id: "mailchimp-3954564",
//         title: "Senior Service Designer",
//         location: "remote",
//         company_name: "mailchimp",
//         date: "2022-04-01T11:00:39.662Z",
//         position: "10",
//       },
//     ],
//   },
// ];

export default function Home() {
  // console.log(TopCategoriesData);
  return (
    <>
      <div>
        <Header />

        <div className="py-20 text-center">
          <div className="text-sm">
            Find Job, Employment, and Career Opportunities
          </div>
          <div className="text-5xl py-2">
            The Eassiest Way to Get Your New Job
          </div>
          <div className="">
            <div className="text-xs">JOB CATEGORIES</div>
            <div className="text-3xl font-medium">Top Categories</div>
            <div className="grid grid-cols-4 mx-20 gap-5">
              {TopCategoriesData.map((item, index) => (
                <div
                  key={index}
                  className="parents   py-4 rounded-md cursor-pointer"
                >
                  <div className="text-xl">{item.jobField}</div>
                  <div className="text-sm flex gap-2 justify-center my-3">
                    <div className="bg-white py-0.5 px-1.5 rounded-md text-orange-300">
                      {item.position}
                    </div>
                    <div className="text-gray-400 child">Open Position</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
