const config = () => {
  let data_object = {
    social_links: {
      facebook: "https://www.facebook.com/fake.ti.101/",
      github: "https://github.com/faketi101",
      pinterest: "https://www.pinterest.com/codingbeast404/",
      instagram: "https://instagram.com/_ti_tamim/",
      twitter: "https://twitter.com/Tarikul13841073",
    },
    service_data: [
      {
        id: 1,
        name: "Html",
        img: "html.png",
        percent: "98%",
        background: "#ff6600",
        aos_data: "fade-right",
      },
      {
        id: 2,
        name: "CSS",
        img: "css.png",
        percent: "98%",
        background: "#3A9BD5",
        aos_data: "fade-right",
      },
      {
        id: 3,
        name: "JavaScript",
        img: "js.jpg",
        percent: "95%",
        background: "#ECDD23",
        aos_data: "fade-right",
      },
      {
        id: 4,
        name: "Express JS",
        img: "expressjs.png",
        percent: "94%",
        background: "#ECDD23",
        aos_data: "fade-left",
      },
      {
        id: 5,
        name: "React JS",
        img: "reactjs.jpg",
        percent: "90%",
        background: "#87DAFE",
        aos_data: "fade-left",
      },
      {
        id: 6,
        name: "Mongo DB",
        img: "mongodb.png",
        percent: "95%",
        background: "#4D9444",
        aos_data: "fade-left",
      },
    ],
    work_data: [
      {
        id: 1,
        name: "School Attendance System",
        type: "Web Development",
        img: "ph-1",
        aos_data: "fade-right",
        link: "/work/attendance-system"
      },
      {
        id: 2,
        name: "Brigade Project",
        type: "Web Development",
        img: "ph-1",
        aos_data: "fade-right",
        link: "/work/brigate",
      },
      {
        id: 3,
        name: "Simple Browser Homepage",
        type: "Web Development",
        img: "ph-1",
        aos_data: "fade-right",
        link:"/work/browser-homepage-1"
      },
    ],
  };
  return data_object;
};
export default config;
