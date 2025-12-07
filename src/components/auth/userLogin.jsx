import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import {useContext, useState} from "react";
import { AuthUserProviderContext } from "../../Provider/AuthProvider";

export default function Userlogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {userLogin, setUserLogin} = useContext(AuthUserProviderContext);

  // console.log("working: ", isUserVerified, userObj, setUserObj, loading, error);

  function loginUpUpdate(e){
    e.preventDefault();
    //here we gonna validate the inputs
    
    setUserLogin({email, password});
  }



  return (
    <div className="h-screen sm:flex sm:justify-center sm:items-center bg-gray-100">

      <Card className="sm:max-w-sm w-screen h-full">
        <form className="flex flex-col gap-4" onSubmit={loginUpUpdate}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1">Your email</Label>
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1">Your password</Label>
            </div>
            <TextInput id="password1" type="password" required onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>

          <Button type="submit">Submit</Button>
        </form>

        <p className="text-white">
          Don't Have a account?   
          <Link to="/signIn" className="text-blue-400 hover:underline">
             create account
          </Link>
        </p>

      </Card>

      {/* Optional side div */}
      <div className="bg-black w-screen h-screen"></div>

    </div>
  );
}
