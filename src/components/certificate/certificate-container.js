import React from 'react';
import CertificateComponent from './CertificateComponent';
import freeCodeCampCert from './freecodecamp.png';
import mongo from './mongo.png';
import mongoBasic from './MongoBasic.png';

const mongoDescription =
  'Course Completion Confirmation M101JS:MongoDB For Nodejs Developers';
const mongoBasicsDescription =
  'Course Completion Confirmation M001JS:MongoDB Basics';
const freelancerDescription = `Successfully completed the freeCodeCamp.org  Front End Developer Certification, representing approximately 400 hours of coursework`;
export default function CertificateContainer() {
  return (
    <div className="certification-root">
      <h1>CERTIFICATES</h1>

      <div className='certification-container'>
        <CertificateComponent
          img={freeCodeCampCert}
          href='https://www.freecodecamp.org/certification/serdartkm/legacy-front-end'
          description={freelancerDescription}
          title='Front End Developer'
        />
        <CertificateComponent
          img={mongo}
          href='https://university.mongodb.com/course_completion/b1ff6663-8c16-410b-8deb-aed20fbe/printable'
          description={mongoDescription}
          title='MongoDB for Nodejs Developers'
        />
        <CertificateComponent
          img={mongoBasic}
          href='https://university.mongodb.com/course_completion/b7e390a6-1591-4c54-b4bd-f6a92e7b/printable'
          description={mongoBasicsDescription}
          title='MongoDB Basics'
        />
      </div>
    </div>
  );
}
