// import React from 'react';
import { useParams } from "react-router-dom";
const TutorDetailsPage = () => {
      const { id } = useParams();
    return (
        <div className="text-center py-20">

      <h1 className="text-4xl font-bold">
        Tutor Details Page
      </h1>

      <p className="mt-4">
        Tutor ID: {id}
      </p>

    </div>

    );
};

export default TutorDetailsPage;