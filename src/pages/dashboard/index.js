import React from 'react';

import Layout from '../../Components/layout'

import Logo from '../../Components/Logo';
import SearchBox from '../../Components/SearchBox'
import SideMenu from '../../Components/MainUserMenu'
import MainMenu from '../../Components/MusicMenu'
import Player  from '../../Components/MusicPlayer'

export default () => {
  return (
    <Layout>
      <Logo/>
      <SearchBox/>
      <SideMenu/>
      <MainMenu/>
      <Player/>
    </Layout>
  );
}


