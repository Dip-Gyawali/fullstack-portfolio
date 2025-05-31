import React, { useEffect, useState } from "react";

export default function Skills() {
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    setSkills([
      {name: 'ReactJs/NextJs', rating: 90},
      {name: 'Laravel', rating: 90},
      {name: 'NodeJs/Express', rating: 85},
      {name: 'MongoDB/MySQL', rating: 85},
      {name: 'Css/Tailwind', rating: 90},
      {name: 'Html', rating: 90},
    ]);
  },[]);
  return (
    <div>
      {/* Skills Section */}
      <section id="skills" className="skills section light-background">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
          <p>Here are Some Technical Skills I am Experienced in</p>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row skills-content skills-animation">
            {skills?.length > 0 && (
              <>
                <div className="col-lg-6">
                  {skills
                    .slice(0, Math.ceil(skills.length / 2))
                    .map((skill) => (
                      <div className="progress" key={skill._id}>
                        <span className="skill">
                          <span>{skill.name}</span>{" "}
                          <i className="val">{skill.rating}%</i>
                        </span>
                        <div className="progress-bar-wrap">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${skill.rating}%` }}
                            aria-valuenow={skill.rating}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    ))}
                </div>

                <div className="col-lg-6">
                  {skills.slice(Math.ceil(skills.length / 2)).map((skill) => (
                    <div className="progress" key={skill._id}>
                      <span className="skill">
                        <span>{skill.name}</span>{" "}
                        <i className="val">{skill.rating}%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${skill.rating}%` }}
                          aria-valuenow={skill.rating}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      {/* /Skills Section */}
    </div>
  );
}
