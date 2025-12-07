import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import {useContext, useState} from "react";
import { AuthUserProviderContext } from "../../Provider/AuthProvider";

export default function UserSignIn() {

  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const {signUp, setUserSignUp} = useContext(AuthUserProviderContext);

  function signUpUpdate(e){
    e.preventDefault();
    //here we gonna validate the inputs
    
    setUserSignUp({email, password1, password2});
  }



  return (
    <div className="h-screen sm:flex sm:justify-center sm:items-center bg-gray-100">

      <Card className="sm:max-w-sm w-screen h-full">
        <form className="flex flex-col gap-4" onSubmit={signUpUpdate}>

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
            <TextInput id="password1" type="password" required onChange={(e) => setPassword1(e.target.value)} />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2">Your password</Label>
            </div>
            <TextInput id="password2" type="password" required onChange={(e) => setPassword2(e.target.value)} />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>

          <Button type="submit">Submit</Button>
        </form>

        <p className="text-white">
          Have already an account?
          <Link to="/login" className="text-blue-400 hover:underline">
           
            login here...
          </Link>
        </p>

      </Card>

      {/* Optional side div */}
      <div className="bg-black w-screen h-screen"></div>

    </div>
  );
}
