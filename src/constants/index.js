import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  spring,
  java,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  agenda,
  url,
  foodman,
  tempo
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Desenvolvedor Web",
    icon: web,
  },
  {
    title: "Desenvolvedor React",
    icon: mobile,
  },
  {
    title: "Desenvolvedor Back-End",
    icon: backend,
  },
  {
    title: "Desenvolvedor Front-End",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Restaurante FOODMAN",
    description:
      "Este site de restaurante oferece uma experiência personalizada com opções de tema claro e escuro, permitindo que o usuário escolha a interface que mais lhe agrada. O site exibe o cardápio completo, informações sobre o restaurante e suas promoções, proporcionando uma navegação agradável e adaptável ao gosto do visitante",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: foodman,
    source_code_link: "https://food-man-site-r3fxioqje-felipegreseles-projects.vercel.app/",
  },

  {
    name: "Previsão do tempo",
    description:
      "Este projeto é um aplicativo de previsão do tempo desenvolvido com React, onde o usuário pode consultar as condições climáticas de qualquer cidade em tempo real. Utilizando uma API externa, o app exibe dados como temperatura, umidade e condições do clima, oferecendo uma experiência prática para quem quer aprender a trabalhar com React e integração de APIs no desenvolvimento front-end.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tempo,
    source_code_link: "https://github.com/felipegresele/Previs-o-do-Tempo-",
  },

  {
    name: "Agenda de Contatos",
    description:
      "Desenvolvi um CRUD completo de agenda de contatos em Java Web, implementado com o padrão de arquitetura MVC. O sistema permite adicionar, editar e excluir contatos, utilizando tecnologias como Servlet, JSP, JDBC e MySQL. A aplicação foi configurada e publicada com sucesso no servidor de aplicação Tomcat, garantindo desempenho e escalabilidade.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "mvc",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: agenda,
    source_code_link: "https://github.com/felipegresele/AgendaContatosJava.git",
  },
  
  {
    name: "Encurtador URL",
    description:
      "O projeto é um encurtador de URLs que gera links curtos, compostos por 5 a 10 caracteres alfanuméricos. Cada URL encurtada, com um prazo de validade, é armazenada no MongoDB. Ao ser acessada, a URL encurtada redireciona para o link original. Caso não seja encontrada no banco, retorna erro 404.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "spring",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: url,
    source_code_link: "https://github.com/felipegresele/JAVA-EncurtadorURL.git",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
