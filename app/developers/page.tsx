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
        {/* <DeveloperCard /> */}
      </div>
    </div>
  );
};

export default page;

const aboutJacinth = () => (
  <div className="flex w-3/5 text-justify gap-4 flex-col">
    <p>
      I'm Jacinth Mahanta, a final-year Electronics and Communication
      Engineering student at NIT Silchar, deeply passionate about technology,
      innovation, and community engagement.{" "}
    </p>
    <p>
      Currently, I serve as the Outreach Head at GDSC NIT Silchar, where I lead
      initiatives focused on fostering a culture of learning and collaboration.
      Through GDSC, I've sharpened my leadership, communication, and project
      management skills, organizing impactful events that contribute to our tech
      community's growth and development.{" "}
    </p>
    <p>
      I also dedicate my time as a Mentor at both GSSoC'24 and SSoC'24, where I
      guide individuals through coding projects. These mentoring roles allow me
      to contribute significantly to the tech community, advocating for
      diversity and inclusion within the field of technology.
    </p>
    <p>
      Professionally, I've gained valuable hands-on experience through
      internships at LittleBox India and NIC, where I immersed myself in diverse
      tech environments and expanded my skill set.
    </p>
    <p>
      Feel free to connect with me on social media to discuss collaborations or
      opportunities within the tech and entrepreneurial spheres.
    </p>
  </div>
);
