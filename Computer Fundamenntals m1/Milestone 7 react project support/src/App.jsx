import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';

const fetchIssues = async () => {
  const result = await fetch("/data.json");
  return result.json();
};

const App = () => {
    const fetchPromise = fetchIssues();
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<Loading />}>
        <IssuesManagement fetchPromise={fetchPromise} />
      </Suspense>

      <Footer></Footer>
    </>
  );
};

export default App;
