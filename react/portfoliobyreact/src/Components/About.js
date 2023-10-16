import React from "react";
import pic from "../Images/HRITIK UPADHYAY.png";

const About = () => {
  return (
    <div className="about">
      <h1> About Me </h1>

      {/* online way to add images.
      <img
        src="data:image/jpeg;base64,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"
        alt=""
      /> */}

      <img src={pic} alt="" />

      <p>
        {" "}
        I am HRITIK UPADHYAY, a B.Tech Computer Science Engineering student.
        Through this website, I invite you to explore my work, skills, and
        experiences. Passionate about the world of technology and
        problem-solving, I strive to create innovative solutions that address
        the unique challenges of our digital era. Recently Completed my B.Tech
        degree in Computer Science Engineering, I am equipped with a strong
        foundation in programming, algorithms, and data structures, enabling me
        to approach problems with a logical and analytical mindset. Throughout
        my academic journey, I have actively sought opportunities to apply my
        knowledge and skills. From participating in coding competitions to
        working on collaborative projects, I have honed my technical abilities
        and gained practical experience in areas such as Java, OOPS, DSA,
        SpringBoot, Html, CSS, JavaScript and many more. In my portfolio, you
        will find examples of my projects and assignments, showcasing my ability
        to develop software solutions, design user-friendly interfaces, and
        analyze complex data. From building a web application to implementing
        algorithms, each project demonstrates my dedication to learning and
        pushing the boundaries of my capabilities. I am eager to continue
        learning and expanding my skill set, which is why I am excited about
        potential collaborations and internships. If you have any questions or
        would like to discuss a project, feel free to reach out. I am always
        open to new opportunities that allow me to apply my knowledge and
        contribute to real-world solutions. Thank you for visiting my portfolio,
        and I look forward to connecting with you! HRITIK UPADHYAY
      </p>
    </div>
  );
};

export default About;
