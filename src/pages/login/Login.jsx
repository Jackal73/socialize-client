import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>get S͛OͦCͨIͥAͣLiͥzeͤd</h1>
          <p>
            Lorem ipsum dolor sit amen consectetur adipisicing elit. Architect solution sun nam port ea accusation
            magnitude dolores aqua stadium.
          </p>
          <span>Don't have an account?</span>
          <Link to="/register">
            <button>REGISTER</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button className="">LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
