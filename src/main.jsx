import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Toaster } from 'react-hot-toast';
import {
  RouterProvider,
} from "react-router-dom";

import { router } from './routes/router';

import AuthProvider from './providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <Toaster/>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)