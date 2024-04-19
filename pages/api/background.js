const background = [
    {
        eduCards: [
            {
                id: 0,
                title: "Technical University of Berlin",
                degree: "BS, Computer Science",
                detail: "Bachelor's Degree in Computer Science from TU Berlin.",
                year: "2019-2023",
            },
            {
                id: 1,
                title: "German School of Istanbul",
                degree: "High School",
                detail: "Turkish and German High School Diploma from German School of Istanbul.",
                year: "2014-2019",
            },
        ],
    },
    {
        expCards: [
            {
                id: 1,
                role: "Data Science Intern",
                title: "DAI-Labor der TU Berlin",
                url: "https://dai-labor.de/",
                desc: "The content of the work I did for DAI-Labor is confidential, due to a non-disclosure agreement",
                year: "10/2022 - 03/2023",
                location: "Berlin, Germany",
            },
            {
                id: 2,
                role: "Junior Fullstack Software Engineer",
                title: "Coyotiv GmbH",
                url: "https://coyotiv.com/",
                desc: "Started as an Intern and promoted to Junior Fullstack Software Engineer after few months",
                year: "08/2021 - 10/2022",
                location: "Berlin, Germany",
            },
            {
                id: 3,
                role: "IT-Intern",
                title: "Karden İnşaat A.Ş.",
                url: "https://www.kardeninsaat.com.tr/",
                desc: "Worked as an Intern in the IT Department of Karden İnşaat A.Ş. for 3 months",
                year: "07/2020 - 09/2020",
                location: "Istanbul, Turkiye",
            },
        ],
    },
]

export default function handler(req, res) {
    res.status(200).json(background)
}
