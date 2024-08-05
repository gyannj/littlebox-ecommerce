import React from "react";
import DeveloperCard from "../../modules/components/developercard";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="text-white p-8 py-24">
      <div className="text-textColor font-bold text-4xl mb-10 mx-16">
        Our Awesome Developers
      </div>
      <div className="flex flex-row lg:flex-col gap-24">
        <DeveloperCard
          imgSrc="https://res.cloudinary.com/dhoi8bcqz/image/upload/v1709297688/me_rfyqom.webp"
          name="Jacinth Mahanta"
          designation="Developer and UI/UX Designer"
          about={aboutJacinth()}
          fbLink="https://www.facebook.com/jacinth.mahanta/"
          githubLink="https://github.com/GitSentinel"
          linkedinLink="https://in.linkedin.com/in/gitsentinel"
        />
        <DeveloperCard
          imgSrc="/p1.png"
          name="Gyan Jyoti Das"
          designation="Student / Developer"
          about={aboutGyan()}
          fbLink="https://www.facebook.com/gyanjyoti.das.1048"
          githubLink="https://github.com/gyannj"
          linkedinLink="https://www.linkedin.com/in/gyan-jyoti/"
        />
        <DeveloperCard
          imgSrc="/p3.png"
          name="Rituraj Gautam"
          designation="Student / Developer"
          about={aboutRituraj()}
          fbLink="https://www.facebook.com/thisisrg/"
          githubLink="https://github.com/zayconik"
          linkedinLink="https://www.linkedin.com/in/riturajgautam/"
        />
        {/* <DeveloperCard /> */}
      </div>
    </div>
  );
};

export default page;

const aboutJacinth = () => (
  <div className="flex w-3/5 text-justify gap-4 flex-col">
    <p>
      I&apos;m Jacinth Mahanta, a final-year Electronics and Communication
      Engineering student at NIT Silchar, deeply passionate about technology,
      innovation, and community engagement.
    </p>
    <p>
      Currently, I serve as the Outreach Head at GDSC NIT Silchar, where I lead
      initiatives focused on fostering a culture of learning and collaboration.
      Through GDSC, I&apos;ve sharpened my leadership, communication, and
      project management skills, organizing impactful events that contribute to
      our tech community&apos;s growth and development.
    </p>
    <p>
      I also dedicate my time as a Mentor at both GSSoC 2024 and SSoC 2024,
      where I guide individuals through coding projects. These mentoring roles
      allow me to contribute significantly to the tech community, advocating for
      diversity and inclusion within the field of technology.
    </p>
    <p>
      Professionally, I&apos;ve gained valuable hands-on experience through
      internships at LittleBox India and NIC, where I immersed myself in diverse
      tech environments and expanded my skill set.
    </p>
    <p>
      Feel free to connect with me on social media to discuss collaborations or
      opportunities within the tech and entrepreneurial spheres.
    </p>
  </div>
);
const aboutGyan = () => (
  <div className="flex w-3/5 text-justify gap-4 flex-col">
    <p>
      Hey, I&apos;m Gyan Jyoti Das, a final-year engineering student at NIT Silchar, majoring in Electronics and Communication Engineering, with a passion for full-stack web development. My journey into web development has equipped me with a robust skill set in modern technologies such as React, Node.js, Express, MongoDB, and Next.js.
    </p>
    <p>
    I am driven by a strong desire to create impactful, user-friendly web applications. My projects reflect my commitment to writing clean, efficient code and my enthusiasm for continuous learning and innovation in the field of web development. As I move forward in my career, I am excited to bring my technical expertise, collaborative spirit, and problem-solving abilities to new and challenging opportunities in software and full-stack web development.
    </p>
    <p>
    During my recent internship at Littlebox India, I had the opportunity to build several real-world projects that showcased my ability to apply theoretical knowledge in practical scenarios. One of the highlights of my internship was collaborating with a team to develop this full-featured ecommerce platform. This experience not only honed my technical skills but also underscored the importance of teamwork, effective communication, and meeting tight deadlines.
    </p>
    <p>
    For more information about my work and projects, please check out my developer portfolio website at
    <span className="m-2 text-blue-400">
    <a href="https://www.gyann.tech/">
       Gyan Jyoti Das
    </a>
    </span>
   and feel free to contact anytime.
    </p>
  </div>
);
const aboutRituraj = () => (
  <div className="flex w-3/5 text-justify gap-4 flex-col">
    <p>
      Hello, I’m Rituraj Gautam, a final-year Electronics and Communication
      Engineering student at NIT Silchar with a strong focus on full-stack web
      development and cybersecurity. Currently, I am enhancing my skills through
      various roles and projects. 
    </p>
      
    <p>
      As a Full Stack Web Development Intern at
      LittleBox India, I developed a comprehensive e-commerce platform,
      optimizing both frontend and backend operations to significantly improve
      performance and user satisfaction. 
      </p>
      
      <p>
      I’ve also led and contributed to several impactful projects,
      including the development of an Application Management System and a movie
      website, both utilizing modern technologies such as Next.js, React, and
      MongoDB. These projects highlight my commitment to delivering efficient,
      user-centric web applications and optimizing user experiences. 
      </p>

      <p>
      Beyond technical roles, I actively participate in leadership and design
      responsibilities at NIT Silchar. As the Collaboration and Outreach Head
      for E-Cell and the Design Head for the Finance Club, I’ve honed my skills
      in teamwork, communication, and project management. 
      </p>

      <p>
      Feel free to explore
      my portfolio at <span className="m-2 text-blue-400">
    <a href="https://riturajgautam.xyz/">
       Rituraj Gautam
    </a>
    </span> and connect with me on <span className="m-2 text-blue-400">
    <a href="https://www.linkedin.com/in/riturajgautam/">
       LinkedIn
    </a>
    </span> or
    <span className="m-2 text-blue-400">
    <a href="https://github.com/zayconik">
       GitHub
    </a>
    </span>. I’m always open to discussing new opportunities, collaborations,
      and innovations in technology.
      </p>
  </div>
);
