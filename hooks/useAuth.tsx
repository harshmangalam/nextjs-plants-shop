import { FormEvent, useState } from "react";

export default function useAuth(defaultValue = {}) {
  const [fields, setFields] = useAuth(defaultValue);

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

  return { fields, handleChange, handleLogin };
}
