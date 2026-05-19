import Banner from "../../components/Banner";

const HomePage = () => {
    return (
        <div>
            <Banner />

      {/* available tutors section */}

      <div className="max-w-7xl mx-auto py-16">

        <h1 className="text-4xl font-bold text-center">
          Available Tutors
        </h1>

        <p className="text-center mt-4">
          Find skilled tutors for your learning journey
        </p>

      </div>

      {/* extra section 1 */}

      <div className="bg-base-200 py-16">

        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-4xl font-bold">
            Why Choose MediQueue?
          </h1>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="card bg-base-100 shadow-xl p-6">
              <h2 className="text-2xl font-bold">
                Expert Tutors
              </h2>

              <p className="mt-3">
                Learn from experienced and verified tutors.
              </p>
            </div>

            <div className="card bg-base-100 shadow-xl p-6">
              <h2 className="text-2xl font-bold">
                Flexible Schedule
              </h2>

              <p className="mt-3">
                Book sessions at your preferred time.
              </p>
            </div>

            <div className="card bg-base-100 shadow-xl p-6">
              <h2 className="text-2xl font-bold">
                Online Learning
              </h2>

              <p className="mt-3">
                Learn from anywhere with online sessions.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* extra section 2 */}

      <div className="py-16">

        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl font-bold text-center">
            Student Reviews
          </h1>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="card bg-base-100 shadow-xl p-6">
              <p>
                “Amazing platform for finding tutors.”
              </p>

              <h3 className="font-bold mt-4">
                - Sarah
              </h3>
            </div>

            <div className="card bg-base-100 shadow-xl p-6">
              <p>
                “Very easy booking system.”
              </p>

              <h3 className="font-bold mt-4">
                - David
              </h3>
            </div>

            <div className="card bg-base-100 shadow-xl p-6">
              <p>
                “Helped me improve my grades.”
              </p>

              <h3 className="font-bold mt-4">
                - Alex
              </h3>
            </div>

          </div>

        </div>

      </div>

        </div>
    );
};

export default HomePage;