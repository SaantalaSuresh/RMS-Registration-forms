// import React from 'react';

// const AdditionalInformation = () => {
//   return (
//     <div className="additional-information">
//       <h3>Additional Information</h3>
//       <form>
//         <div className="form-group">
//           <label htmlFor="skills">Skills</label>
//           <textarea id="skills" name="skills" rows="4" required></textarea>
//         </div>
//         <div className="form-group">
//           <label htmlFor="certifications">Certifications</label>
//           <textarea id="certifications" name="certifications" rows="4"></textarea>
//         </div>
//         <div className="form-group">
//           <label htmlFor="additionalComments">Additional Comments</label>
//           <textarea id="additionalComments" name="additionalComments" rows="4"></textarea>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AdditionalInformation;


import React, { useState } from 'react';
import {  FaTimes, FaPlus } from 'react-icons/fa';
import Select from 'react-select';
import "./index.css"
// FaCheck, FaStar,
const AdditionalInformation = () => {
  const [formData, setFormData] = useState({
    trainingWorkshops: [],
    workExperience: [],
    languagesKnown: '',
    resumeCV: null,
    workSamples: [],
    professionalAffiliations: [],
    awardsHonors: [],
    publications: [],
    volunteerExperience: [],
    hobbiesInterests: '',
    skills: [],
    certifications: [],
    languages: [],
    hobbies: []
  });

  const [newTrainingWorkshop, setNewTrainingWorkshop] = useState({ 
    title: '', 
    type: '',
    customType: '',
    date: '', 
    description: '' 
  });
  const [newWorkExperience, setNewWorkExperience] = useState({ 
    company: '', 
    position: '', 
    startDate: '', 
    endDate: '', 
    responsibilities: '',
    achievements: '',
    location: '',
    employmentType: '',
    yearsOfExperience: ''
  });
  const [newAffiliation, setNewAffiliation] = useState('');
  const [newVolunteerExperience, setNewVolunteerExperience] = useState('');

  const workshopTypes = [
    'Conference',
    'Seminar',
    'Webinar',
    'Workshop',
    'Training',
    'Course',
    'Other'
  ];

  const skillOptions = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'csharp', label: 'C#' },
    { value: 'cpp', label: 'C++' },
    { value: 'php', label: 'PHP' },
    { value: 'ruby', label: 'Ruby' },
    { value: 'swift', label: 'Swift' },
    { value: 'go', label: 'Go' },
    { value: 'rust', label: 'Rust' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'kotlin', label: 'Kotlin' },
    { value: 'scala', label: 'Scala' },
    { value: 'r', label: 'R' },
    { value: 'matlab', label: 'MATLAB' },
    { value: 'sql', label: 'SQL' },
    { value: 'nosql', label: 'NoSQL' },
    { value: 'mongodb', label: 'MongoDB' },
    { value: 'postgresql', label: 'PostgreSQL' },
    { value: 'mysql', label: 'MySQL' },
    { value: 'oracle', label: 'Oracle' },
    { value: 'react', label: 'React' },
    { value: 'angular', label: 'Angular' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'nodejs', label: 'Node.js' },
    { value: 'express', label: 'Express.js' },
    { value: 'django', label: 'Django' },
    { value: 'flask', label: 'Flask' },
    { value: 'spring', label: 'Spring' },
    { value: 'aspnet', label: 'ASP.NET' },
    { value: 'laravel', label: 'Laravel' },
    { value: 'ruby_on_rails', label: 'Ruby on Rails' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'sass', label: 'Sass' },
    { value: 'less', label: 'Less' },
    { value: 'bootstrap', label: 'Bootstrap' },
    { value: 'tailwind', label: 'Tailwind CSS' },
    { value: 'jquery', label: 'jQuery' },
    { value: 'webpack', label: 'Webpack' },
    { value: 'babel', label: 'Babel' },
    { value: 'gulp', label: 'Gulp' },
    { value: 'grunt', label: 'Grunt' },
    { value: 'git', label: 'Git' },
    { value: 'svn', label: 'SVN' },
    { value: 'docker', label: 'Docker' },
    { value: 'kubernetes', label: 'Kubernetes' },
    { value: 'jenkins', label: 'Jenkins' },
    { value: 'circleci', label: 'CircleCI' },
    { value: 'travis', label: 'Travis CI' },
    { value: 'aws', label: 'AWS' },
    { value: 'azure', label: 'Azure' },
    { value: 'gcp', label: 'Google Cloud Platform' },
    { value: 'heroku', label: 'Heroku' },
    { value: 'digitalocean', label: 'DigitalOcean' },
    { value: 'linux', label: 'Linux' },
    { value: 'unix', label: 'Unix' },
    { value: 'windows', label: 'Windows' },
    { value: 'macos', label: 'macOS' },
    { value: 'android', label: 'Android' },
    { value: 'ios', label: 'iOS' },
    { value: 'react_native', label: 'React Native' },
    { value: 'flutter', label: 'Flutter' },
    { value: 'xamarin', label: 'Xamarin' },
    { value: 'unity', label: 'Unity' },
    { value: 'unreal_engine', label: 'Unreal Engine' },
    { value: 'tensorflow', label: 'TensorFlow' },
    { value: 'pytorch', label: 'PyTorch' },
    { value: 'keras', label: 'Keras' },
    { value: 'scikit_learn', label: 'scikit-learn' },
    { value: 'pandas', label: 'pandas' },
    { value: 'numpy', label: 'NumPy' },
    { value: 'matplotlib', label: 'Matplotlib' },
    { value: 'opencv', label: 'OpenCV' },
    { value: 'hadoop', label: 'Hadoop' },
    { value: 'spark', label: 'Apache Spark' },
    { value: 'kafka', label: 'Apache Kafka' },
    { value: 'elasticsearch', label: 'Elasticsearch' },
    { value: 'logstash', label: 'Logstash' },
    { value: 'kibana', label: 'Kibana' },
    { value: 'grafana', label: 'Grafana' },
    { value: 'prometheus', label: 'Prometheus' },
    { value: 'tableau', label: 'Tableau' },
    { value: 'power_bi', label: 'Power BI' },
    { value: 'qlikview', label: 'QlikView' },
    { value: 'sas', label: 'SAS' },
    { value: 'spss', label: 'SPSS' },
    { value: 'photoshop', label: 'Adobe Photoshop' },
    { value: 'illustrator', label: 'Adobe Illustrator' },
    { value: 'indesign', label: 'Adobe InDesign' },
    { value: 'premiere_pro', label: 'Adobe Premiere Pro' },
    { value: 'after_effects', label: 'Adobe After Effects' },
    { value: 'figma', label: 'Figma' },
    { value: 'sketch', label: 'Sketch' },
    { value: 'invision', label: 'InVision' },
    { value: 'zeplin', label: 'Zeplin' },
    { value: 'jira', label: 'Jira' },
    { value: 'trello', label: 'Trello' },
    { value: 'asana', label: 'Asana' },
    { value: 'slack', label: 'Slack' },
  ];

  const jobTitles = [
    "Full Stack Developer", "Front End Developer", "Backend Developer", "Mobile App Developer (iOS/Android)",
    "DevOps Engineer", "Cloud Computing Specialist", "Cybersecurity Analyst", "Database Administrator",
    "UI/UX Designer", "Game Developer", "Blockchain Developer", "AR/VR Developer", "Data Scientist",
    "Machine Learning Engineer", "Business Intelligence Analyst", "Big Data Engineer", "Statistician",
    "Quantitative Analyst", "Mechanical Engineer", "Electrical Engineer", "Civil Engineer", "Chemical Engineer",
    "Aerospace Engineer", "Biomedical Engineer", "Environmental Engineer", "Robotics Engineer",
    "Materials Scientist", "Financial Analyst", "Investment Banker", "Management Consultant", "Project Manager",
    "Business Development Manager", "Human Resources Manager", "Supply Chain Manager", "Operations Manager",
    "Risk Analyst", "Chartered Accountant", "Digital Marketing Specialist", "Content Strategist",
    "Social Media Manager", "Brand Manager", "Public Relations Specialist", "SEO Specialist", "Copywriter",
    "Marketing Analytics Manager", "Graphic Designer", "Industrial Designer", "Fashion Designer",
    "Interior Designer", "3D Modeler", "Motion Graphics Designer", "UX Researcher", "Physician",
    "Nurse Practitioner", "Pharmacist", "Biotechnologist", "Clinical Research Associate",
    "Nutritionist/Dietitian", "Bioinformatics Specialist", "Corporate Lawyer", "Patent Attorney",
    "Compliance Officer", "Legal Researcher", "Paralegal", "University Professor", "Research Scientist",
    "Data Analyst", "Curriculum Developer", "Instructional Designer", "Education Technology Specialist",
    "Film Director", "Video Editor", "Sound Engineer", "Animator", "Journalist", "Game Designer", "Podcaster",
    "Environmental Scientist", "Sustainability Consultant", "Renewable Energy Engineer",
    "Conservation Biologist", "Urban Planner", "Hotel Manager", "Event Planner", "Travel Consultant", "Chef",
    "Restaurant Manager", "Sales Manager", "Account Executive", "Customer Success Manager",
    "Technical Support Specialist", "Product Manager", "Quality Assurance Engineer", "Systems Administrator",
    "Network Engineer", "Information Security Analyst", "Business Analyst", "Data Engineer", "UX/UI Developer",
    "Technical Writer", "Scrum Master"
  ];

  const handleFileUpload = (key, files) => {
    setFormData({...formData, [key]: files });
  };

  const handleSkillChange = (selectedOptions) => {
    setFormData({
      ...formData,
      skills: selectedOptions.map(option => option.label)
    });
  };

  const addLanguage = () => {
    if (formData.languagesKnown) {
      setFormData({
        ...formData,
        languages: [...formData.languages, { name: formData.languagesKnown, speak: '', read: '', write: '' }],
        languagesKnown: ''
      });
    }
  };

  const handleLanguageChange = (index, field, value) => {
    const updatedLanguages = [...formData.languages];
    updatedLanguages[index][field] = value;
    setFormData({...formData, languages: updatedLanguages });
  };

  const removeLanguage = (index) => {
    setFormData({
      ...formData,
      languages: formData.languages.filter((_, i) => i !== index)
    });
  };

  const addHobby = () => {
    if (formData.hobbiesInterests) {
      setFormData({
        ...formData,
        hobbies: [...formData.hobbies, formData.hobbiesInterests],
        hobbiesInterests: ''
      });
    }
  };

  const removeHobby = (hobby) => {
    setFormData({
      ...formData,
      hobbies: formData.hobbies.filter((h) => h !== hobby)
    });
  };

  const handleTrainingWorkshopAdd = () => {
    if (newTrainingWorkshop.title && newTrainingWorkshop.date) {
      const workshopToAdd = {
        ...newTrainingWorkshop,
        type: newTrainingWorkshop.type === 'Other' ? newTrainingWorkshop.customType : newTrainingWorkshop.type
      };
      setFormData({
        ...formData,
        trainingWorkshops: [...formData.trainingWorkshops, workshopToAdd]
      });
      setNewTrainingWorkshop({ title: '', type: '', customType: '', date: '', description: '' });
    }
  };

  const removeTrainingWorkshop = (index) => {
    setFormData({
      ...formData,
      trainingWorkshops: formData.trainingWorkshops.filter((_, i) => i !== index)
    });
  };

  const calculateYearsOfExperience = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const yearsDiff = end.getFullYear() - start.getFullYear();
    const monthsDiff = end.getMonth() - start.getMonth();
    const totalMonths = yearsDiff * 12 + monthsDiff;
    return (totalMonths / 12).toFixed(1);
  };

  const handleWorkExperienceAdd = () => {
    if (newWorkExperience.company && newWorkExperience.position && newWorkExperience.startDate) {
      const yearsOfExperience = calculateYearsOfExperience(newWorkExperience.startDate, newWorkExperience.endDate);
      const workExperienceToAdd = {
        ...newWorkExperience,
        yearsOfExperience
      };
      setFormData({
        ...formData,
        workExperience: [...formData.workExperience, workExperienceToAdd]
      });
      setNewWorkExperience({ 
        company: '', 
        position: '', 
        startDate: '', 
        endDate: '', 
        responsibilities: '',
        achievements: '',
        location: '',
        employmentType: '',
        yearsOfExperience: ''
      });
    }
  };

  const removeWorkExperience = (index) => {
    setFormData({
      ...formData,
      workExperience: formData.workExperience.filter((_, i) => i !== index)
    });
  };

  const addAffiliation = () => {
    if (newAffiliation) {
      setFormData({
        ...formData,
        professionalAffiliations: [...formData.professionalAffiliations, newAffiliation]
      });
      setNewAffiliation('');
    }
  };


  const removeSkill = (skillToRemove) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  const removeAffiliation = (index) => {
    setFormData({
      ...formData,
      professionalAffiliations: formData.professionalAffiliations.filter((_, i) => i !== index)
    });
  };

  const addVolunteerExperience = () => {
    if (newVolunteerExperience) {
      setFormData({
        ...formData,
        volunteerExperience: [...formData.volunteerExperience, newVolunteerExperience]
      });
      setNewVolunteerExperience('');
    }
  };

  const removeVolunteerExperience = (index) => {
    setFormData({
      ...formData,
      volunteerExperience: formData.volunteerExperience.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="form-section">
      <h2>Additional Information</h2>

      <div className="form-group">
        <label>Skills and Certifications</label>
        <Select
          isMulti
          options={skillOptions}
          value={formData.skills.map(skill => ({ value: skill, label: skill }))}
          onChange={handleSkillChange}
          placeholder="Select skills..."
        />
      </div>

      <div className="form-group">
        <label>Training and Workshops</label>
        <div className="input-group">
          <input
            type="text"
            placeholder="Title"
            value={newTrainingWorkshop.title}
            onChange={(e) => setNewTrainingWorkshop({...newTrainingWorkshop, title: e.target.value})}
          />
          <select
            value={newTrainingWorkshop.type}
            onChange={(e) => setNewTrainingWorkshop({...newTrainingWorkshop, type: e.target.value})}
          >
            <option value="">Select Type</option>
            {workshopTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
          {newTrainingWorkshop.type === 'Other' && (
            <input
              type="text"
              placeholder="Custom Type"
              value={newTrainingWorkshop.customType}
              onChange={(e) => setNewTrainingWorkshop({...newTrainingWorkshop, customType: e.target.value})}
            />
          )}
          <input
            type="date"
            value={newTrainingWorkshop.date}
            onChange={(e) => setNewTrainingWorkshop({...newTrainingWorkshop, date: e.target.value})}
          />
          <textarea
            placeholder="Description"
            value={newTrainingWorkshop.description}
            onChange={(e) => setNewTrainingWorkshop({...newTrainingWorkshop, description: e.target.value})}
          />
          <button className="add-button" onClick={handleTrainingWorkshopAdd}>
            <FaPlus /> Add
          </button>
        </div>
        {formData.trainingWorkshops.map((item, index) => (
          <div key={index} className="list-item">
            <strong>{item.title}</strong> - {item.type} - {item.date}
            <p>{item.description}</p>
            <button className="remove-button" onClick={() => removeTrainingWorkshop(index)}>
              <FaTimes />
            </button>
          </div>
        ))}
      </div>

      <div className="form-group">
        <label>Work Experience</label>
        <div className="input-group">
          <label>Company:
            <input
              type="text"
              placeholder="Company"
              value={newWorkExperience.company}
              onChange={(e) => setNewWorkExperience({...newWorkExperience, company: e.target.value})}
            />
          </label>
          <label>Position:
            <Select
              options={jobTitles.map(title => ({ value: title, label: title }))}
              value={{ value: newWorkExperience.position, label: newWorkExperience.position }}
              onChange={(selectedOption) => setNewWorkExperience({...newWorkExperience, position: selectedOption.value})}
              placeholder="Select position..."
            />
          </label>
          <label>Location:
            <input
              type="text"
              placeholder="Location"
              value={newWorkExperience.location}
              onChange={(e) => setNewWorkExperience({...newWorkExperience, location: e.target.value})}
            />
          </label>
          <label>Employment Type:
            <select
              value={newWorkExperience.employmentType}
              onChange={(e) => setNewWorkExperience({...newWorkExperience, employmentType: e.target.value})}
            >
              <option value="">Select Employment Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </label>
          <label>Start Date:
            <input
              type="date"
              placeholder="Start Date"
              value={newWorkExperience.startDate}
              onChange={(e) => setNewWorkExperience({...newWorkExperience, startDate: e.target.value})}
            />
          </label>
          <label>End Date:
            <input
              type="date"
              placeholder="End Date"
              value={newWorkExperience.endDate}
              onChange={(e) => setNewWorkExperience({...newWorkExperience, endDate: e.target.value})}
            />
          </label>
          <label>Years of Experience:
            <input
              type="text"
              placeholder="Years of Experience"
              value={calculateYearsOfExperience(newWorkExperience.startDate, newWorkExperience.endDate)}
              readOnly
            />
          </label>
          <label>Responsibilities:
            <textarea
              placeholder="Responsibilities"
              value={newWorkExperience.responsibilities}
              onChange={(e) => setNewWorkExperience({...newWorkExperience, responsibilities: e.target.value})}
            />
          </label>
          <label>Achievements:
            <textarea
              placeholder="Achievements"
              value={newWorkExperience.achievements}
              onChange={(e) => setNewWorkExperience({...newWorkExperience, achievements: e.target.value})}
            />
          </label>
          <button className="add-button" onClick={handleWorkExperienceAdd}>
            <FaPlus /> Add
          </button>
        </div>
        {formData.workExperience.map((item, index) => (
          <div key={index} className="list-item work-experience-item">
            <div className="work-experience-header">
              <strong>{item.company}</strong> - {item.position}
              <button className="remove-button" onClick={() => removeWorkExperience(index)}>
                <FaTimes />
              </button>
            </div>
            <p>{item.location} | {item.employmentType}</p>
            <p>{item.startDate} to {item.endDate} ({item.yearsOfExperience} years)</p>
            <p><strong>Responsibilities:</strong> {item.responsibilities}</p>
            <p><strong>Achievements:</strong> {item.achievements}</p>
          </div>
        ))}
      </div>

      <div className="form-group">
        <label>Languages Known</label>
        <div className="input-group">
          <input
            type="text"
            value={formData.languagesKnown}
            onChange={(e) => setFormData({...formData, languagesKnown: e.target.value})}
          />
          <button className="add-button" onClick={addLanguage}>Add Language</button>
        </div>
        {formData.languages.map((language, index) => (
          <div key={index} className="language-group">
            <label>{language.name}</label>
            <div className="select-group">
              <div>
                <label>Speak</label>
                <select
                  value={language.speak}
                  onChange={(e) => handleLanguageChange(index, 'speak', e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Fluent">Fluent</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Basic">Basic</option>
                  <option value="Not Applicable">Not Applicable</option>
                </select>
              </div>
              <div>
                <label>Read</label>
                <select
                  value={language.read}
                  onChange={(e) => handleLanguageChange(index, 'read', e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Fluent">Fluent</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Basic">Basic</option>
                  <option value="Not Applicable">Not Applicable</option>
                </select>
              </div>
              <div>
                <label>Write</label>
                <select
                  value={language.write}
                  onChange={(e) => handleLanguageChange(index, 'write', e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Fluent">Fluent</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Basic">Basic</option>
                  <option value="Not Applicable">Not Applicable</option>
                </select>
              </div>
              <button className="remove-button" onClick={() => removeLanguage(index)}>
                <FaTimes />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="form-group">
        <label>Resume/CV</label>
        <input
          type="file"
          onChange={(e) => handleFileUpload('resumeCV', e.target.files[0])}
        />
      </div>

      <div className="form-group">
        <label>Work Samples</label>
        <input
          type="file"
          multiple
          onChange={(e) => handleFileUpload('workSamples', Array.from(e.target.files))}
        />
      </div>

      <div className="form-group">
        <label>Professional Affiliations</label>
        <div className="input-group">
          <input
            type="text"
            value={newAffiliation}
            onChange={(e) => setNewAffiliation(e.target.value)}
            placeholder="Add affiliation"
          />
          <button className="add-button" onClick={addAffiliation}>
            <FaPlus /> Add
          </button>
        </div>
        {formData.professionalAffiliations.map((affiliation, index) => (
          <div key={index} className="list-item">
            {affiliation}
            <button className="remove-button" onClick={() => removeAffiliation(index)}>
              <FaTimes />
            </button>
          </div>
        ))}
      </div>

      <div className="form-group">
        <label>Awards and Honors</label>
        <div className="list-group">
          <input
            type="text"
            placeholder="Add award"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setFormData({...formData, awardsHonors: [...formData.awardsHonors, e.target.value]});
                e.target.value = '';
              }
            }}
          />
          {formData.awardsHonors.map((award, index) => (
            <div key={index} className="list-item">
              {award}
              <button className="remove-button" onClick={() => setFormData({...formData, awardsHonors: formData.awardsHonors.filter((_, i) => i !== index)})}>
                <FaTimes />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Publications</label>
        <div className="list-group">
          <input
            type="text"
            placeholder="Add publication"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setFormData({...formData, publications: [...formData.publications, e.target.value]});
                e.target.value = '';
              }
            }}
          />
          {formData.publications.map((publication, index) => (
            <div key={index} className="list-item">
              {publication}
              <button className="remove-button" onClick={() => setFormData({...formData, publications: formData.publications.filter((_, i) => i !== index)})}>
                <FaTimes />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Volunteer Experience</label>
        <div className="input-group">
          <input
            type="text"
            value={newVolunteerExperience}
            onChange={(e) => setNewVolunteerExperience(e.target.value)}
            placeholder="Add volunteer experience"
          />
          <button className="add-button" onClick={addVolunteerExperience}>
            <FaPlus /> Add
          </button>
        </div>
        {formData.volunteerExperience.map((experience, index) => (
          <div key={index} className="list-item">
            {experience}
            <button className="remove-button" onClick={() => removeVolunteerExperience(index)}>
              <FaTimes />
            </button>
          </div>
        ))}
      </div>

      <div className="form-group">
        <label>Hobbies and Interests</label>
        <div className="input-group">
          <input
            type="text"
            value={formData.hobbiesInterests}
            onChange={(e) => setFormData({...formData, hobbiesInterests: e.target.value})}
          />
          <button className="add-button" onClick={addHobby}>Add Hobby</button>
        </div>
        <div className="hobbies-list">
          {formData.hobbies.map((hobby, index) => (
            <span key={index} className="hobby-tag">
              {hobby}
              <button className="remove-button" onClick={() => removeHobby(hobby)}>
                <FaTimes />
              </button>
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .form-section {
          width: 100%;
          max-width: 800px;
          margin: auto;
          padding: 20px;
          background: #fff;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          border-radius: 8px;
        }

        .form-section h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }

        .input-group {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 10px;
        }

        .input-group input,
        .input-group textarea,
        .input-group select {
          flex: 1;
          min-width: 0;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 14px;
        }
          .input-group textarea {
          min-height: 100px;
          resize: vertical;
        }

        .add-button {
          padding: 8px 16px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .add-button:hover {
          background-color: #0056b3;
        }

        .list-item {
          background-color: #f8f9fa;
          padding: 10px;
          border-radius: 4px;
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          animation: fadeIn 0.5s ease;
        }

        .work-experience-item {
          flex-direction: column;
          align-items: flex-start;
        }

        .work-experience-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .remove-button {
          background: none;
          border: none;
          color: #dc3545;
          cursor: pointer;
          font-size: 18px;
          transition: color 0.3s ease;
        }

        .remove-button:hover {
          color: #c82333;
        }

        .skills-list,
        .hobbies-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 10px;
        }

        .skill-tag,
        .hobby-tag {
          background-color: #e9ecef;
          padding: 5px 10px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 14px;
        }

        .language-group {
          margin-top: 10px;
          padding: 10px;
          background-color: #f8f9fa;
          border-radius: 4px;
        }

        .select-group {
          display: flex;
          gap: 10px;
          margin-top: 5px;
        }

        .select-group > div {
          flex: 1;
        }

        .select-group label {
          font-size: 12px;
          margin-bottom: 2px;
        }

        .select-group select {
          width: 100%;
          padding: 5px;
          border-radius: 4px;
          border: 1px solid #ccc;
        }

        @media (max-width: 768px) {
          .form-section {
            padding: 15px;
          }

          .input-group {
            flex-direction: column;
          }

          .input-group input,
          .input-group textarea,
          .input-group select {
            width: 100%;
          }

          .select-group {
            flex-direction: column;
          }

          .select-group > div {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default AdditionalInformation;