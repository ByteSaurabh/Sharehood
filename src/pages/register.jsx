import React, { useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Icon from "../components/AppIcon";
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      setLoading(false);
      navigate('/login');
    } catch (err) {
      setError(err.message || "Registration failed");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="bg-card rounded-lg p-8 shadow-warm border border-border w-full max-w-md">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="UserPlus" size={24} color="var(--color-primary)" />
          <h2 className="text-2xl font-bold text-foreground">Register for ShareHood</h2>
        </div>
        <form className="space-y-6" onSubmit={handleRegister}>
          {error && (
            <div className="bg-destructive/10 border border-destructive/30 text-destructive rounded-lg p-3 text-sm mb-2">
              {error}
            </div>
          )}
          <Input
            label="Name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </Button>
        </form>
        <p className="mt-4 text-sm text-muted-foreground text-center">
          Already have an account? <a href="/login" className="text-primary font-medium">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
