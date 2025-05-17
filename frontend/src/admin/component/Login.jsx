import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import bcrypt from 'bcryptjs'; 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${import.meta.env.VITE_API}/admin/user`);
      const user = res.data.find((u) => u.email === email);
      console.log(user);

      if (user) {
        const isMatch = await bcrypt.compare(password, user.password); 
        if (isMatch) {
          login(user);
          navigate('/admin/user');
          return;
        }
      }

      alert('Invalid credentials');
    } catch (err) {
      console.error(err);
      alert('Login error');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}