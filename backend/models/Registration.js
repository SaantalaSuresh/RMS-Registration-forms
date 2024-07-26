// import mongoose from 'mongoose';

// const registrationSchema = mongoose.Schema({
//     personalInformation: {
//         firstName: { type: String, required: true },
//         middleName: { type: String },
//         lastName: { type: String, required: true },
//         email: { type: String, required: true },
//         phoneNumberMobile: { type: String, required: true },
//         phoneNumberHome: { type: String },
//         homeAddress: { type: String, required: true },
//         dateOfBirth: { type: Date, required: true },
//         gender: { type: String, required: true },
//         nationality: { type: String, required: true },
//         maritalStatus: { type: String, required: true },
//         linkedInProfile: { type: String },
//         personalWebsite: { type: String },
//         emergencyContact: {
//             name: { type: String },
//             relationship: { type: String },
//             phoneNumber: { type: String }
//         }
//     },
//     jobPreferences: {
//         positionAppliedFor: { type: String },
//         desiredSalary: { type: String },
//         preferredJobType: { type: String },
//         preferredWorkLocation: { type: String },
//         availabilityToStart: { type: Date },
//         willingnessToRelocate: { type: Boolean },
//         willingnessToTravel: { type: Boolean }
//     },
//     education: {
//         highestDegreeObtained: { type: String },
//         degreeType: { type: String },
//         fieldOfStudy: { type: String },
//         institutionName: { type: String },
//         institutionLocation: { type: String },
//         graduationDate: { type: Date },
//         percentageGrade: { type: String },
//         tenthDetails: {
//             institutionName: { type: String },
//             board: { type: String },
//             yearOfPassing: { type: String },
//             marksPercentage: { type: String }
//         },
//         twelfthDetails: {
//             institutionName: { type: String },
//             board: { type: String },
//             yearOfPassing: { type: String },
//             marksPercentage: { type: String }
//         },
//         undergraduateDetails: {
//             institutionName: { type: String },
//             yearOfPassing: { type: String },
//             marksPercentage: { type: String }
//         },
//         postgraduateDetails: {
//             institutionName: { type: String },
//             yearOfPassing: { type: String },
//             marksPercentage: { type: String }
//         }
//     },
//     skillsAndCertifications: [{
//         skillName: { type: String },
//         proficiencyLevel: { type: String },
//         certificationName: { type: String },
//         issuingOrganization: { type: String },
//         issueDate: { type: Date },
//         expiryDate: { type: Date }
//     }],
//     trainingWorkshops: [{
//         type: { type: String },
//         organizationName: { type: String },
//         startDate: { type: Date },
//         endDate: { type: Date },
//         responsibilities: { type: String }
//     }],
//     workExperience: [{
//         companyName: { type: String },
//         jobTitle: { type: String },
//         employmentDates: { type: String },
//         responsibilitiesAchievements: { type: String },
//         reasonForLeaving: { type: String },
//         previousSalary: { type: String }
//     }],
//     languagesKnown: [{ type: String }],
//     resumeCV: { type: String },
//     workSamples: [{ type: String }],
//     professionalAffiliations: [{ type: String }],
//     awardsHonors: [{ type: String }],
//     publications: [{ type: String }],
//     volunteerExperience: [{ type: String }],
//     hobbiesInterests: [{ type: String }]
// }, {
//     timestamps: true
// });

// const Registration = mongoose.model('Registration', registrationSchema);

// export default Registration;

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const registrationSchema = mongoose.Schema({
  personalInformation: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumberMobile: { type: String, required: true },
    phoneNumberHome: { type: String },
    homeAddress: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true },
    nationality: { type: String, required: true },
    maritalStatus: { type: String, required: true },
    linkedInProfile: { type: String },
    personalWebsite: { type: String },
    emergencyContact: {
      name: { type: String },
      relationship: { type: String },
      phoneNumber: { type: String }
    }
  },
  jobPreferences: {
    positionAppliedFor: { type: String },
    desiredSalary: { type: String },
    preferredJobType: { type: String },
    preferredWorkLocation: { type: String },
    availabilityToStart: { type: Date },
    willingnessToRelocate: { type: Boolean },
    willingnessToTravel: { type: Boolean }
  },
  education: {
    highestDegreeObtained: { type: String },
    degreeType: { type: String },
    fieldOfStudy: { type: String },
    institutionName: { type: String },
    institutionLocation: { type: String },
    graduationDate: { type: Date },
    percentageGrade: { type: String },
    tenthDetails: {
      institutionName: { type: String },
      board: { type: String },
      yearOfPassing: { type: String },
      marksPercentage: { type: String }
    },
    twelfthDetails: {
      institutionName: { type: String },
      board: { type: String },
      yearOfPassing: { type: String },
      marksPercentage: { type: String }
    },
    undergraduateDetails: {
      institutionName: { type: String },
      yearOfPassing: { type: String },
      marksPercentage: { type: String }
    },
    postgraduateDetails: {
      institutionName: { type: String },
      yearOfPassing: { type: String },
      marksPercentage: { type: String }
    }
  },
  skillsAndCertifications: [{
    skillName: { type: String },
    proficiencyLevel: { type: String },
    certificationName: { type: String },
    issuingOrganization: { type: String },
    issueDate: { type: Date },
    expiryDate: { type: Date }
  }],
  trainingWorkshops: [{
    type: { type: String },
    organizationName: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    responsibilities: { type: String }
  }],
  workExperience: [{
    companyName: { type: String },
    jobTitle: { type: String },
    employmentDates: { type: String },
    responsibilitiesAchievements: { type: String },
    reasonForLeaving: { type: String },
    previousSalary: { type: String }
  }],
  languagesKnown: [{ type: String }],
  resumeCV: { type: String },
  workSamples: [{ type: String }],
  professionalAffiliations: [{ type: String }],
  awardsHonors: [{ type: String }],
  publications: [{ type: String }],
  volunteerExperience: [{ type: String }],
  hobbiesInterests: [{ type: String }],
  password: { type: String, required: true }
}, { timestamps: true });

registrationSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

registrationSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Registration = mongoose.model('Registration', registrationSchema);

export default Registration;
