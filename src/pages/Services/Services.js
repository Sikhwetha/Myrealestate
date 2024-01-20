import React from 'react'
import "./Services.css"
const Services = () => {
  return (
    <div>
      <div>
      <header>
        <h1>TrendHomes</h1>
        <p>Your Premier Online Destination for Stylish Living Spaces</p>
      </header>

      <section className="why-choose">
        <h2 className='primaryText'>Why Choose TrendHomes?</h2>
        <p>
          At TrendHomes, we pride ourselves on offering a distinguished real estate experience. Our commitment to excellence is evident in every aspect of our service:
        </p>
        <ul>
          <li><strong className='secondaryText'>Stunning Listings:</strong> Explore meticulously curated listings that embody modern aesthetics.</li>
          <li><strong className='secondaryText'>Easy Navigation:</strong> Seamlessly navigate our user-friendly website for an intuitive experience.</li>
          <li><strong  className='secondaryText'>Responsive Design:</strong> Access TrendHomes effortlessly from any device for a consistent and enjoyable browsing experience.</li>
        </ul>
        <img src="./p2.jpg" alt="Stunning Listings" />
      </section>

      <section className="for-buyers">
        <h2 className='primaryText'>For Buyers: Find Your Dream Home</h2>
        <p>
          Discover a personalized home-buying journey tailored to your preferences and lifestyle:
        </p>
        <ul>
          <li><strong className='orangeText'>Customized Searches:</strong> Tailor your search based on location, size, and architectural style.</li>
          <li><strong className='secondaryText'>Virtual Tours:</strong> Immerse yourself in our listings with high-quality virtual tours.</li>
          <li><strong className='secondaryText'>Expert Guidance:</strong> Connect with our experienced real estate experts for personalized advice throughout your buying journey.</li>
        </ul>
        <img src="./p1.jpg" alt="For Buyers" />
      </section>

      <section className="for-sellers">
        <h2 className='primaryText'>For Sellers: List Your Property with Confidence</h2>
        <p>
          When selling your property with TrendHomes, you can expect a comprehensive and effective approach:
        </p>
        <ul>
          <li><strong className='orangeText'>Professional Photography:</strong> Showcase your property in the best light with our professional photography services.</li>
          <li><strong className='secondaryText'>Effective Marketing:</strong> Benefit from our targeted marketing strategies to ensure maximum visibility for your listing.</li>
          <li><strong className='secondaryText'>Negotiation Support:</strong> Let our skilled negotiators handle the details, ensuring you get the best value for your property.</li>
        </ul>
        <img src="./p4.jpg" alt="For Sellers" />
      </section>

      <section className="secure-transactions">
        <h2 className='primaryText'>Secure and Transparent Transactions</h2>
        <p>
          Your peace of mind is our priority. TrendHomes ensures secure and transparent transactions for every real estate deal.
        </p>
        <img src="./p3.jpg" alt="Secure Transactions" />
      </section>

      
    </div>
    </div>
  )
}

export default Services