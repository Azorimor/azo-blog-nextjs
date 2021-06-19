import GlobalNavbar from '../globalNavbar';

const SiteLayout = ({ children }) => {
  return (
    <>
      <GlobalNavbar />
      { children }
    </>
  )
};

export default SiteLayout;
