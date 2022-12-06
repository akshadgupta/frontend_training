import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Login from './Login/Login';

export default function Home() {
  return (
    <div className="container">
      <Login />
    </div>
  )
}
