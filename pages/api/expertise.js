const expertise = [
    {
        id: 0,
        title: "Full Stack Development",
        desc: "My main expertise and profesion is Full Stack Development. I have been working as a Full Stack Developer for 1,5 years. I have experience in developing web applications using MERN stack. I have also worked on various projects using MERN stack, Vue.js and SQL. I have a strong understanding of RESTful APIs and have experience in building and consuming them.",
    },
    {
        id: 1,
        title: "Data Science",
        desc: "As a computer science graduate, I am also somewhat experienced in data science. I have worked on projects involving data analysis, data visualization, and machine learning. I have experience in using Python libraries such as Pandas, NumPy, Matplotlib, Scikit-learn and TensorFlow. I have also worked on projects involving natural language processing. I am always looking to learn more about data science and machine learning.",
    },
    {
        id: 2,
        title: "Renewable Energy",
        desc: "Right now, I also provide consultancy services in the field of renewable energy, specialized in solar energy particularly. I have experience in conducting feasibility studies, designing renewable energy systems, and conducting energy audits. My experience is focused mostly in Türkiye and Germany.",
    },
    {
        id: 3,
        title: "Economy and Finance",
        desc: "I am proud to say that I have a strong understanding of economics and finance. Even though I am not an economist, I am financially literate since many years now. I have experience in investing in the stock market, cryptocurrencies and real estates. I hope to find myself a good spot in the FinTech industry in the future using both my engineering and finance knowledge.",
    },
    {
        id: 4,
        title: "Entrepreneurship",
        desc: "A life long dream of mine is to become an entrepreneur. I have been working on various projects and ideas for years now. I have some knowledge in business development, marketing, and sales and I hope to transform this knowledge into experiences and success in the future.",
    },
    {
        id: 5,
        title: "European Youth Parliament",
        desc: "I have been a member of the European Youth Parliament since 2017. I have attended various sessions and events in different countries. I have experience in public speaking, debating, and writing. I am also a member of the Alumni Association of the European Youth Parliament.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
