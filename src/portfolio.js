const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'Jean Nshuti',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jean Nshuti',
  role: 'Machine Learning Engineer',
  description:
    'Currently, an MSIT student at CMU. A machine learning engineer with a keen interest in data and how it can be used for social good. Great experience in data exploration, pre-processing, and modelling. Capable of applying predictive modelling for decision making.',
  resume: 'https://drive.google.com/file/d/1Mc2YzPwHX9-mNx4TrA1GhKZF08ZyZogY/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/jeannshuti/',
    github: 'https://github.com/nshutijean',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Early crop disease discovery',
    description:
      'A CNN model used to detect early signs of crop diseases based on images of the plants leaves to prevent further spread of the disease and protect farmers crops.',
    stack: ['Pytorch', 'CNN', 'CV'],
    sourceCode: 'https://github.com/nshutijean/11785-early-crop-disease-discovery-dcnn',
    // livePreview: 'https://github.com',
  },
  {
    name: 'A knowledge-based recommender system for African authored books (concept)',
    description:
      'Research on using a knowledge-based recommender system to recommend underrepresented books: A look on African authored books',
    stack: ['RecSys', 'Knowledge-based'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://drive.google.com/file/d/1zQ0Kn09-YULg858rMfIacnb8Y9vkIRml/view?usp=share_link',
  },
  {
    name: 'AirQo Device failure detection.',
    description:
      'A binary classification model that identifies faulty sensors using AirQo’s air quality sensing devices.',
    stack: ['Python', 'classification', 'Logistic Regression', 'XGBoost', 'CatBoost', 'LightGBM'],
    sourceCode: 'https://github.com/nshutijean/faulty-air-quality-challenge-zindi-hackathon',
    // livePreview: 'https://github.com',
  },
]

const blogs = [
  // blogs can be added an removed
  // if there are no blogs, Blogs section won't show up
  {
    // image: 'https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
    url: 'https://dev.to/rajshekhar26/creating-a-portfolio-website-using-react-1h0',
    title: 'Creating a Portfolio Website using React',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
  },
  {
    // image: 'https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
    url: 'https://dev.to/rajshekhar26/creating-a-portfolio-website-using-react-1h0',
    title: 'Creating a Portfolio Website using React',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
  },
]


// const experience = [
//   // experience can be added an removed
//   // if there are no experience, Experience section won't show up
//   {
//     role: 'Software Engineer',
//     company: 'Google',
//     companylogo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//     date: 'June 2018 – Present',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     descBullets: [
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//     ],
//   },

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Pytorch',
  'Scikit-learn',
  'Pandas',
  'NumPy',

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jeannshuti007@gmail.com',
}

export { header, about, projects, skills, contact, blogs }
