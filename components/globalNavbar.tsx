import React from "react";
import { Menubar } from 'primereact/menubar';
import { useRouter } from "next/router";
// import { InputText } from 'primereact/inputtext';

const GlobalNavbar = () => {
  const router = useRouter();

  // TODO fetch menu for localisation reasons depending on current locale.
  const menuItems = [
    {
      label: 'Startseite',
      command: () => {router.push('/')}
    }, 
    {
      label: 'Artikel',
      command: () => {router.push('/articles')}
    },
    {
      label: 'Kategorien',
      command: () => {router.push('/categories')}
    }
  ]

  const start = <h2>NavLogo</h2>;
  //  const end = <InputText placeholder="Search" type="text" />;

  return (
    <>
      <Menubar model={menuItems} start={start}/>
    </>
  )
}

export default GlobalNavbar;