import { FormEvent, useState } from "react";

interface Props {
  name?: string;
  email: string;
  password: string;
}
export default function useAuth(defaultValue: Props) {
  const [fields, setFields] = useState(defaultValue);
  const [visiblePassword, setVisiblePassword] = useState(false);

  const handleChange = (e) => {
    setFields((fields) => ({ ...fields, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      console.log(fields);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePasswordVisibility = () => {
    setVisiblePassword((visiblePassword) => !visiblePassword);
  };

  return {
    fields,
    handleChange,
    handleLogin,
    visiblePassword,
    handlePasswordVisibility,
  };
}
