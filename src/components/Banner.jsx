import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';

const Banner = () => {

  return (
    <Swiper>

      <SwiperSlide>

        <div
    className="h-[500px] flex flex-col justify-center items-center text-center text-white"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >

    <div className=" bg-black/50 p-6 rounded-xl w-full h-full flex flex-col items-center text-center justify-center">
    

          <h1 className="text-5xl text-amber-100 font-bold">
            Learn From Expert Tutors
          </h1>

          <p className="mt-4 text-lg">
            Book your online learning sessions easily
          </p>

          <Link to="/tutors" className="btn btn-primary mt-6">
  Browse Tutors
</Link>

        </div>
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