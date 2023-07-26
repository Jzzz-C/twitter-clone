import { useState } from "react";

import Modal from "../Modal";
import Input from "../Input";

import useLoginModal from "@/Hooks/useLoginModal";
import useRegisterModal from "@/Hooks/useRegisterModal";

const RegisterModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const registerModal = useRegisterModal();

  const handleSubmit = async () => {
    try {
      setLoading(!loading);

      // To do login
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(!loading);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        label="Username"
        placeholder="Username"
        value={username}
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        disabled={loading}
      />
      <Input
        label="Name"
        placeholder="Name"
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
        disabled={loading}
      />
      <Input
        label="Email"
        placeholder="Email"
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
      />
      <Input
        label="Password"
        placeholder="Password"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
      />
    </div>
  );

  return (
    <Modal
      title="Register"
      actionLabel="Sign Up"
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      body={bodyContent}
      disabled={loading}
      handleSubmit={() => handleSubmit()}
    />
  );
};

export default RegisterModal;
