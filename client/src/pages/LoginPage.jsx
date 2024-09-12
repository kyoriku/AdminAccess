import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import "../styles/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center login-background">
      <div className="text-center col-md-4 card p-3 mb-0 login-card">
        {/* <h2 className="login-header">Login</h2>
        <hr /> */}
        <LoginForm />
        {/* <SignupForm /> */}
      </div>
    </div>
  );
}

export default LoginPage;
