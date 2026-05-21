import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const LoginPage = () => {
    const { loginUser, googleLogin } = useAuth();

  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state || "/";

  // ------------------------------
  
  const handleLogin = async (e) => {

    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    try {

      await loginUser(email, password);


      toast.success("Login Successful");

      navigate(from,{replace:true});

    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {

    try {

      await googleLogin();


      toast.success("Google Login Successful");

      navigate(from);

    } catch (error) {
      toast.error(error.message);
    }
  };

    return (

            <div className="min-h-screen flex justify-center items-center">

      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">

        <div className="card-body">

          <h1 className="text-3xl font-bold text-center">
            Login
          </h1>

          <form onSubmit={handleLogin}>

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full mt-3"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full mt-3"
              required
            />

            <button className="btn btn-primary w-full mt-4">
              Login
            </button>

          </form>

          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full mt-4"
          >
            Login with Google
          </button>

          <p className="text-center mt-4">

            Don't have an account?

            <Link
              to="/register"
              className="text-blue-500 ml-1"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>

        
    );
};

export default LoginPage;