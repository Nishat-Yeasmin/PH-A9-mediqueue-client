import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Banner = () => {

  return (
    <Swiper>

      <SwiperSlide>

        <div className="h-[500px] bg-blue-200 flex flex-col justify-center items-center text-center">

          <h1 className="text-5xl font-bold">
            Learn From Expert Tutors
          </h1>

          <p className="mt-4 text-lg">
            Book your online learning sessions easily
          </p>

          <button className="btn btn-primary mt-6">
            Browse Tutors
          </button>

        </div>

      </SwiperSlide>

      <SwiperSlide>

        <div className="h-[500px] bg-green-200 flex flex-col justify-center items-center text-center">

          <h1 className="text-5xl font-bold">
            Improve Your Skills Faster
          </h1>

          <p className="mt-4 text-lg">
            Connect with top tutors anytime
          </p>

        </div>

      </SwiperSlide>

      <SwiperSlide>

        <div className="h-[500px] bg-orange-200 flex flex-col justify-center items-center text-center">

          <h1 className="text-5xl font-bold">
            Find The Best Tutor For You
          </h1>

          <p className="mt-4 text-lg">
            Smart booking system for students
          </p>

        </div>

      </SwiperSlide>

    </Swiper>
  );
};

export default Banner;