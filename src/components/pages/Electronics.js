import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Electronics() {
  return (
    <div>
      <h2>Electronics</h2>
      <Outlet />
    </div>
  )
}