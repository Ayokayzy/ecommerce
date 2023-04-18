import { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { GlobalContext } from "../../context/global-context";
import { loginUser } from "../../utils/apiUtils";

const formData = {
  username: "",
  password: "",
};

const Login = () => {
  const [inputValues, setInputValues] = useState(formData);
  const { auth, handleAuth } = useContext(GlobalContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    const { username, password } = inputValues;
    e.preventDefault();
    if (!username || !password) {
      alert("All input field required");
    }
    try {
      const res = await loginUser(inputValues);
      const token = res.data.token;
      handleAuth(token);
      const origin = location.state?.from?.pathname || "/";
      console.log(origin);
      navigate(origin, { replace: true });
    } catch (error) {
      console.log(error);
    }
    console.log(auth);
  };

  return (
    <div className="max-w-md mt-24 mx-auto">
      <form
        action=""
        className="flex flex-col gap-y-8 max-w-md"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="border border-gray-400 h-10 rounded w-80 px-4 w-full"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          type="password"
          className="border border-gray-400 h-10 rounded w-80 px-4 w-full"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <Button children={"login"} />
      </form>
    </div>
  );
};

export default Login;
