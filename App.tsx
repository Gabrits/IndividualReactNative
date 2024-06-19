import { StatusBar } from 'expo-status-bar';
import { Login } from './src/Pages/Login';
import { Home } from './src/Pages/Home';
import { Routes } from './src/Routes';

export default function App() {
  return (
    <>
    <StatusBar style='auto'/>
      <Routes/>
    </>
  );
}