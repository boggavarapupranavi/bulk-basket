import React from 'react';
import './LoginPage.css'; 
import CombinedLoginForm from '../components/CombinedLoginForm';

function LoginPage() {
  return (
    <div className='con'>
      <h1>Welcome too BulkBasket</h1>
      <CombinedLoginForm />
    </div>
  );
}

export default LoginPage;