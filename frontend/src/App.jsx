import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom'

import { useEffect } from 'react'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// =========================================================
// MAIN PAGES
// =========================================================

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'

// =========================================================
// EXISTING PHOTOGRAPHY PAGES
// =========================================================

import PreWedding from './pages/Photography/PreWedding/PreWedding'
import Wedding from './pages/Photography/Wedding/Wedding'

// =========================================================
// STUDIO PAGES
// =========================================================

import Kids from './pages/Photography/Kids/Kids'
import Maternity from './pages/Photography/Maternity/Maternity'
import Newborn from './pages/Photography/Newborn/Newborn'
import Family from './pages/Photography/Family/Family'
import Fashion from './pages/Photography/Fashion/Fashion'

// =========================================================
// STories PAGES
// =========================================================
import Bridal from './pages/Photography/Bridal/Bridal'
import Candid from './pages/Photography/Candid/Candid'
import Groom from './pages/Photography/Groom/Groom'

// =========================================================
// SCROLL TO TOP
// =========================================================

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}


// =========================================================
// WEBSITE LAYOUT
// Navbar + Footer
// =========================================================

function WebsiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-charcoal text-sand">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar />


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <main className="flex-grow">

        <Routes>

          {/* =================================================
              HOME
          ================================================= */}

          <Route
            path="/home"
            element={<Home />}
          />


          {/* =================================================
              ABOUT
          ================================================= */}

          <Route
            path="/about"
            element={<About />}
          />


          {/* =================================================
              EXISTING PHOTOGRAPHY
          ================================================= */}

          {/* Pre-Wedding */}

          <Route
            path="/photography/pre-wedding"
            element={<PreWedding />}
          />


          {/* Wedding */}

          <Route
            path="/photography/wedding"
            element={<Wedding />}
          />


          {/* =================================================
              STUDIO
          ================================================= */}

          {/* Kids */}

          <Route
            path="/studio/kids"
            element={<Kids />}
          />


          {/* Maternity */}

          <Route
            path="/studio/maternity"
            element={<Maternity />}
          />


          {/* Newborn */}

          <Route
            path="/studio/newborn"
            element={<Newborn />}
          />


          {/* Family */}

          <Route
            path="/studio/family"
            element={<Family />}
          />


          {/* Fashion */}

          <Route
            path="/studio/fashion"
            element={<Fashion />}
          />

           {/* =================================================
              STUDIO
          ================================================= */}

<Route
  path="/stories/bridal"
  element={<Bridal />}
/>

<Route
  path="/stories/candid"
  element={<Candid />}
/>

<Route
  path="/stories/getting-ready"
  element={<Groom />}
/>

          {/* =================================================
              CONTACT
          ================================================= */}

          <Route
            path="/contact"
            element={<Contact />}
          />


          {/* =================================================
              UNKNOWN URL
              Agar URL match nahi karega,
              to Home par redirect hoga.
          ================================================= */}

          <Route
            path="*"
            element={
              <Navigate
                to="/home"
                replace
              />
            }
          />

        </Routes>

      </main>


      {/* =================================================
          FOOTER
      ================================================= */}

      <Footer />

    </div>
  )
}


// =========================================================
// APP
// =========================================================

function App() {
  return (
    <BrowserRouter>

      {/* Scroll page to top whenever route changes */}

      <ScrollToTop />


      <Routes>

        {/* =================================================
            MAIN WEBSITE
        ================================================= */}

        <Route
          path="/*"
          element={<WebsiteLayout />}
        />

      </Routes>

    </BrowserRouter>
  )
}


export default App