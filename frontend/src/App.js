// // // // // // App.js
// // // // // import React, { useState } from 'react';
// // // // // import Sidebar from './components/Sidebar';
// // // // // import PersonalDetails from './components/PersonalDetails';
// // // // // import PasswordCreation from './components/PasswordCreation';
// // // // // import AdditionalDetails from './components/AdditionalDetails';
// // // // // import Declaration from './components/Declaration';
// // // // // import './App.css';

// // // // // const App = () => {
// // // // //   const [currentStep, setCurrentStep] = useState(0);
// // // // //   const steps = ['Personal Information', 'Job Preferences', 'Education', 'Work Experience',"Additional Information"];

// // // // //   const nextStep = () => {
// // // // //     if (currentStep < steps.length - 1) {
// // // // //       setCurrentStep(currentStep + 1);
// // // // //     }
// // // // //   };

// // // // //   const prevStep = () => {
// // // // //     if (currentStep > 0) {
// // // // //       setCurrentStep(currentStep - 1);
// // // // //     }
// // // // //   };

// // // // //   const renderComponent = () => {
// // // // //     switch (currentStep) {
// // // // //       case 0:
// // // // //         return <PersonalDetails />;
// // // // //       case 1:
// // // // //         return <PasswordCreation />;
// // // // //       case 2:
// // // // //         return <AdditionalDetails />;
// // // // //       case 3:
// // // // //         return <Declaration />;
// // // // //       default:
// // // // //         return <PersonalDetails />;
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="app">
// // // // //       <Sidebar steps={steps} currentStep={currentStep} />
// // // // //       <div className="main-content">
// // // // //         <div className="breadcrumb">
// // // // //           <span>Homepage</span> &gt; <span>One Time Registration</span>
// // // // //         </div>
// // // // //         <h1>One Time Registration</h1>
// // // // //         <h2>{steps[currentStep]}</h2>
// // // // //         {renderComponent()}
// // // // //         <div className="navigation-buttons">
// // // // //           {currentStep > 0 && (
// // // // //             <button onClick={prevStep} className="prev-button">
// // // // //               Previous
// // // // //             </button>
// // // // //           )}
// // // // //           {currentStep < steps.length - 1 && (
// // // // //             <button onClick={nextStep} className="next-button">
// // // // //               Next
// // // // //             </button>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default App;


// // // // // App.js
// // // // import React from 'react';
// // // // import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
// // // // import Sidebar from './components/Sidebar';
// // // // import PersonalDetails from './components/Personal Information/PersonalInformation';
// // // // import JobPreferences from './components/Job Preferences/JobPreferences';
// // // // import Education from './components/Education/Education';
// // // // import WorkExperience from './components/Work Experience/WorkExperience';
// // // // import AdditionalInformation from './components/Additional Information/AdditionalInformation';
// // // // import './App.css';

// // // // const App = () => {
// // // //   const steps = [
// // // //     { path: '/personal-information', name: 'Personal Information', component: PersonalDetails },
// // // //     { path: '/job-preferences', name: 'Job Preferences', component: JobPreferences },
// // // //     { path: '/education', name: 'Education', component: Education },
// // // //     { path: '/work-experience', name: 'Work Experience', component: WorkExperience },
// // // //     { path: '/additional-information', name: 'Additional Information', component: AdditionalInformation },
// // // //   ];

// // // //   const StepComponent = ({ component: Component }) => {
// // // //     const navigate = useNavigate();
// // // //     const currentIndex = steps.findIndex(step => step.path === window.location.pathname);

// // // //     const nextStep = () => {
// // // //       if (currentIndex < steps.length - 1) {
// // // //         navigate(steps[currentIndex + 1].path);
// // // //       }
// // // //     };

// // // //     const prevStep = () => {
// // // //       if (currentIndex > 0) {
// // // //         navigate(steps[currentIndex - 1].path);
// // // //       }
// // // //     };

// // // //     return (
// // // //       <>
// // // //         <Component />
// // // //         <div className="navigation-buttons">
// // // //           {currentIndex > 0 && (
// // // //             <button onClick={prevStep} className="prev-button">
// // // //               Previous
// // // //             </button>
// // // //           )}
// // // //           {currentIndex < steps.length - 1 && (
// // // //             <button onClick={nextStep} className="next-button">
// // // //               Next
// // // //             </button>
// // // //           )}
// // // //         </div>
// // // //       </>
// // // //     );
// // // //   };

// // // //   return (
// // // //     <Router>
// // // //       <div className="app">
// // // //         <Sidebar steps={steps} />
// // // //         <div className="main-content">
// // // //           <div className="breadcrumb">
// // // //             <span>Homepage</span> &gt; <span>One Time Registration</span>
// // // //           </div>
// // // //           <h1>One Time Registration</h1>
// // // //           <Routes>
// // // //             <Route path="/" element={<Navigate to="/personal-information" replace />} />
// // // //             {steps.map((step, index) => (
// // // //               <Route 
// // // //                 key={index} 
// // // //                 path={step.path} 
// // // //                 element={
// // // //                   <>
// // // //                     <h2>{step.name}</h2>
// // // //                     <StepComponent component={step.component} />
// // // //                   </>
// // // //                 } 
// // // //               />
// // // //             ))}
// // // //           </Routes>
// // // //         </div>
// // // //       </div>
// // // //     </Router>
// // // //   );
// // // // };

// // // // export default App;


// // // import React, { useState } from 'react';
// // // import './App.css';
// // // import Sidebar from './components/Sidebar';
// // // import Main from './components/Main';
// // // import { IonIcon } from '@ionic/react';
// // // import { menuOutline } from 'ionicons/icons';

// // // function App() {
// // //   const [sidebarActive, setSidebarActive] = useState(false);

// // //   const toggleSidebar = () => {
// // //     setSidebarActive(!sidebarActive);
// // //   };

// // //   return (
// // //     <div className={`container ${sidebarActive ? 'active' : ''}`}>
// // //       <Sidebar toggleSidebar={toggleSidebar} />
// // //       <Main />
// // //       <div className="topbar">
// // //         <div className="toggle" onClick={toggleSidebar}>
// // //           <IonIcon icon={menuOutline} />
// // //         </div>
// // //         <div className="search">
// // //           <label>
// // //             <input type="text" placeholder="Search here" />
// // //             <IonIcon icon={menuOutline} />
// // //           </label>
// // //         </div>
// // //         <div className="user">
// // //           <img src="assets/imgs/customer01.jpg" alt="User" />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default App;


// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Sidebar from './components/Sidebar';
// // import PersonalInformation from './components/PersonalInformation';
// // import AdditionalInformation from './components/AdditionalInformation';
// // import Education from './components/Education';
// // import JobPreferences from './components/JobPreferences';
// // import WorkExperience from './components/WorkExperience';
// // import './App.css';

// // const steps = [
// //   { name: 'Personal Information', path: '/' },
// //   { name: 'Additional Information', path: '/additional-information' },
// //   { name: 'Education', path: '/education' },
// //   { name: 'Job Preferences', path: '/job-preferences' },
// //   { name: 'Work Experience', path: '/work-experience' }
// // ];

// // const App = () => {
// //   return (
// //     <Router>
// //       <div className="app-container">
// //         <Sidebar steps={steps} />
// //         <div className="content">
// //           <Routes>
// //             <Route path="/" element={<PersonalInformation />} />
// //             <Route path="/additional-information" element={<AdditionalInformation />} />
// //             <Route path="/education" element={<Education />} />
// //             <Route path="/job-preferences" element={<JobPreferences />} />
// //             <Route path="/work-experience" element={<WorkExperience />} />
// //           </Routes>
// //         </div>
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import PersonalInformation from './components/PersonalInformation';
// import AdditionalInformation from './components/AdditionalInformation';
// import Education from './components/Education';
// import JobPreferences from './components/JobPreferences';
// import WorkExperience from './components/WorkExperience';
// import './App.css';

// const steps = [
//   { name: 'Personal Information', path: '/' },
//   { name: 'Additional Information', path: '/additional' },
//   { name: 'Education', path: '/education' },
//   { name: 'Job Preferences', path: '/preferences' },
//   { name: 'Work Experience', path: '/work' },
// ];

// const App = () => {
//   return (
//     <Router>
//       <div className="app">
//         <Sidebar steps={steps} />
//         <div className="main-content">
//           <Routes>
//             <Route path="/" element={<PersonalInformation />} />
//             <Route path="/additional" element={<AdditionalInformation />} />
//             <Route path="/education" element={<Education />} />
//             <Route path="/preferences" element={<JobPreferences />} />
//             <Route path="/work" element={<WorkExperience />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import PersonalInformation from './components/PersonalInformation';
import AdditionalInformation from './components/AdditionalInformation';
import Education from './components/Education';
import JobPreferences from './components/JobPreferences';
import WorkExperience from './components/WorkExperience';
import './App.css';

const steps = [
  { name: 'Personal Information', path: '/' },
  
  { name: 'Education', path: '/education' },
  { name: 'Job Preferences', path: '/preferences' },
  { name: 'Work Experience', path: '/work' },
  { name: 'Additional Information', path: '/additional' },
];

const StepComponent = ({ Component }) => {
  const navigate = useNavigate();
  const currentIndex = steps.findIndex(step => step.path === window.location.pathname);

  const nextStep = () => {
    if (currentIndex < steps.length - 1) {
      navigate(steps[currentIndex + 1].path);
    }
  };

  const prevStep = () => {
    if (currentIndex > 0) {
      navigate(steps[currentIndex - 1].path);
    }
  };

  return (
    <>
      <Component />
      <div className="navigation-buttons">
        {currentIndex > 0 && (
          <button onClick={prevStep} className="prev-button">
            Previous
          </button>
        )}
        {currentIndex < steps.length - 1 && (
          <button onClick={nextStep} className="next-button">
            Next
          </button>
        )}
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar steps={steps} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<StepComponent Component={PersonalInformation} />} />
            <Route path="/additional" element={<StepComponent Component={AdditionalInformation} />} />
            <Route path="/education" element={<StepComponent Component={Education} />} />
            <Route path="/preferences" element={<StepComponent Component={JobPreferences} />} />
            <Route path="/work" element={<StepComponent Component={WorkExperience} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
