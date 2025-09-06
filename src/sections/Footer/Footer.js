import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>Copyright © 2036 <Link to="/">Cyborg Gaming</Link> Company. All rights reserved.

                <br />Design: <a href="https://templatemo.com" target="_blank" rel="noreferrer" title="free CSS templates">TemplateMo</a></p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
