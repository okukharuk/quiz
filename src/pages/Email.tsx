import React, { FC } from "react";
import Header from "../components/Header";
import Label from "../components/Label";
import TextInput from "../components/TextInput";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Loading from "../components/Loading";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { options } from "../consts";
import { getStorage, setStorage } from "../services/storage/storage";

const Email = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [isEmail, setIsEmail] = React.useState(false);
  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleLoaded = () => {
    setIsLoaded(true);
  };
  const handleNext = () => {
    setStorage("email", email);
    navigate(`/thank`);
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setEmail(input);
    setIsEmail(emailRegex.test(input));
  };

  React.useEffect(() => {
    const storage = getStorage("storage", true);
    const storageLength = Object.keys(storage).length;
    if (storageLength !== options.length) {
      navigate(`/quiz/${storageLength || 1}`);
    }
  }, []);

  return isLoaded ? (
    <div className="flex flex-col h-full w-full max-w-[350px] items-center m-auto py-[55px] appear">
      <Header text="email" />
      <Label text="enter_email" />
      <TextInput handleInput={handleInput} />
      <PrivacyPolicy />
      <Button text="next" handleClick={handleNext} isActive={isEmail} />
    </div>
  ) : (
    <Loading handleLoaded={handleLoaded} />
  );
};

export default Email;
