import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>S͛OͦCͨIͥAͣLiͥzeͤ</h1>
          <p>
            Lorem ipsum dolor sit amen consectetur adipisicing elit. Architect solution sun nam port ea accusation
            magnitude dolores aqua stadium.
          </p>
          <span>Already have an account?</span>
          <Link to="/login">
            <button>LOGIN</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="name" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button className="">REGISTER</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
