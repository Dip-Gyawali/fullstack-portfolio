import React from "react";
import parse from "html-react-parser";

export default function Resume() {
  let education =
    '<h4>Bachelor in Information Technology</h4> <h5>2021 - present (Expected 2025)</h5> <p><em>KIST College &amp; SS , Kathmandu , Nepal</em></p> <p><span class="OYPEnA font-feature-liga-off font-feature-clig-off font-feature-calt-off text-decoration-none text-strikethrough-none">-Relevant Courses</span><span class="OYPEnA font-feature-liga-off font-feature-clig-off font-feature-calt-off text-decoration-none text-strikethrough-none">: Data Structures, AI, Applied Statistics, Advanced Web Development</span></p>';
  let experience = `
  <p><strong><span class="OYPEnA font-feature-liga-off font-feature-clig-off font-feature-calt-off text-decoration-none text-strikethrough-none">FullStack Developer - <a href="https://goinfosys.com.np/" target="_blank" rel="noopener noreferrer">Go Infosys</a></span></strong></p>
  <p class="cvGsUA direction-ltr align-start para-style-body"><span class="OYPEnA font-feature-liga-off font-feature-clig-off font-feature-calt-off text-decoration-none text-strikethrough-none">Dec 2024 - Present</span></p>
  <ul>
    <li><span class="OYPEnA font-feature-liga-off font-feature-clig-off font-feature-calt-off text-decoration-none text-strikethrough-none">Developed and deployed 7+ full-stack applications for clients, reducing page load time by 40% via backend optimization and caching.</span></li>
    <li><span class="OYPEnA font-feature-liga-off font-feature-clig-off font-feature-calt-off text-decoration-none text-strikethrough-none">Managed deployment via cPanel &amp; FileZilla, reducing production errors by 30%.</span></li>
    <li><span class="OYPEnA font-feature-liga-off font-feature-clig-off font-feature-calt-off text-decoration-none text-strikethrough-none">Played a key role in enhancing project functionality by implementing new features and resolving issues to improve overall system reliability and user experience.</span></li>
    <li><span class="OYPEnA font-feature-liga-off font-feature-clig-off font-feature-calt-off text-decoration-none text-strikethrough-none">Enhanced camera test features, increasing UI interaction time by 25%.</span></li>
    <li><span class="OYPEnA font-feature-liga-off font-feature-clig-off font-feature-calt-off text-decoration-none text-strikethrough-none">Actively contributed to troubleshooting, performance optimization, and ensuring smooth functionality for end-users.</span></li>
  </ul>
  <p><strong><span class="OYPEnA font-feature-liga-off font-feature-clig-off font-feature-calt-off text-decoration-none text-strikethrough-none">FrontEnd Intern - <a href="https://quarkinfotech.com/" target="_blank" rel="noopener noreferrer">Quark Infotech</a></span></strong></p>
  <p class="cvGsUA direction-ltr align-start para-style-body"><span class="OYPEnA font-feature-liga-off font-feature-clig-off font-feature-calt-off text-decoration-none text-strikethrough-none">Sep 2024 - Dec 2024</span></p>
  <ul>
    <li><span class="OYPEnA font-feature-liga-off font-feature-clig-off font-feature-calt-off text-decoration-none text-strikethrough-none">Enhanced the frontend of tech news site, focusing on blind camera test features, polls functionality, News Section, Price List and many more.</span></li>
    <li><span class="OYPEnA font-feature-liga-off font-feature-clig-off font-feature-calt-off text-decoration-none text-strikethrough-none">Designed and implemented many features, including both admin and frontend user sections, with dynamic UI and interactive functionalities.</span></li>
    <li><span class="OYPEnA font-feature-liga-off font-feature-clig-off font-feature-calt-off text-decoration-none text-strikethrough-none">Implemented React.js core hooks along with shadcn for UI</span></li>
  </ul>
  `;
  let cv = "/cv/Dip Kumar Gyawali CV.pdf";

  const handleDownloadCV = async () => {
    if (!cv) return;

    try {
      const response = await fetch(cv);
      if (!response.ok) throw new Error("File not found");

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", "Dip_Kumar_Gyawali_CV.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <div>
      {/* Resume Section */}
      <section id="resume" className="resume section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
          <p>
            Full-stack developer with almost a year of experience specializing
            in backend optimization and scalable web applications. Proven track
            record of reducing page load times by 48% and leading
            cross-functional teams. Passionate about open-source contributions
            and solving complex problems with clean, efficient code.
          </p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <h4>Dip Kumar Gyawali</h4>
                <p>
                  <em>
                    Results-driven Full-Stack Developer with a proven track
                    record of building and deploying scalable web applications.
                    Skilled in both frontend and backend development, database
                    design, and API integration. Seeking a challenging role to
                    apply technical expertise and deliver impactful digital
                    solutions.
                  </em>
                </p>
                <ul>
                  <li>Kathmandu, Nepal</li>
                  <li>9804444601</li>
                  <li>dipgyawali2060@gmail.com</li>
                </ul>
              </div>
              {/* Edn Resume Item */}
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <p>
                  <em>{education && parse(education)}</em>
                </p>
              </div>
              {/* Edn Resume Item */}
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <p>
                  <em>{experience && parse(experience)}</em>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center mt-4">
          <button
            className="btn btn-primary"
            onClick={handleDownloadCV}
            disabled={!cv}
          >
            {cv ? "Download CV" : "CV Not Available"}
          </button>
        </div>
      </section>
      {/* /Resume Section */}
    </div>
  );
}
