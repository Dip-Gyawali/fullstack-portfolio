import React from "react";
import parse from "html-react-parser";

export default function Resume({ basicInfo }) {
  const handleDownloadCV = async () => {
    try {
      if (!basicInfo?.[0]?.cv) {
        alert("No CV available for download");
        return;
      }

      const response = await fetch(`/api/admin/basicInfo/cv/${basicInfo[0].cv}`);
      if (!response.ok) throw new Error('CV not found');
      
      // Get the blob from the response
      const blob = await response.blob();
      
      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `CV_${basicInfo[0].name}.pdf`; // Name the file with the person's name
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    } catch (error) {
      console.error('Error downloading CV:', error);
      alert('Error downloading CV. Please try again later.');
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
                <h4>{basicInfo?.[0]?.name}</h4>
                <p>
                  <em>
                    {basicInfo?.[0]?.summary && parse(basicInfo[0].summary)}
                  </em>
                </p>
                <ul>
                  <li>{basicInfo?.[0]?.location}</li>
                  <li>{basicInfo?.[0]?.phone_no}</li>
                  <li>{basicInfo?.[0]?.email}</li>
                </ul>
              </div>
              {/* Edn Resume Item */}
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <p>
                  <em>
                    {basicInfo?.[0]?.education && parse(basicInfo[0].education)}
                  </em>
                </p>
              </div>
              {/* Edn Resume Item */}
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <p>
                  <em>
                    {basicInfo?.[0]?.job_experience &&
                      parse(basicInfo[0].job_experience)}
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center mt-4">
          <button 
            className="btn btn-primary" 
            onClick={handleDownloadCV}
            disabled={!basicInfo?.[0]?.cv}
          >
            {basicInfo?.[0]?.cv ? 'Download CV' : 'CV Not Available'}
          </button>
        </div>
      </section>
      {/* /Resume Section */}
    </div>
  );
} 