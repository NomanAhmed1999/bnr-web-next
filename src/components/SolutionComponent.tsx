import Image from 'next/image'
import Link from 'next/link'

export default function SolutionPage() {
  return (
    <div className="flex flex-col min-h-screen">


      <main className="flex-grow">
        <section className="wrap-banner gradient-bg to-purple-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-8 md:mb-0">
                <h2 className="text-4xl font-bold mb-4">BnR360 Solutions: Your Growth Partner</h2>
                <p className="mb-6">
                  At BnR360, we believe in making business growth simple. Whether you're just starting out or ready to scale, 
                  we've got the right tools and expertise to get you there. From managing bids and recruitment to providing 
                  strategic support, we ensure you stay ahead of the competition. Our easy-to-use AI-powered solutions 
                  streamline your operations, allowing you to focus on growth.
                </p>
                <Link href="/pricing" className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300">
                  Check Pricing
                </Link>
              </div>
              <div className="md:w-1/2">
                <Image src="/images/Mobile.webp" alt="BnR360 Service Image" width={400} height={300} className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-8">Launch Your Agency with <span className="text-blue-600">Confidence</span></h1>
            <p className="text-center mb-12 max-w-2xl mx-auto">Starting a new agency? We've got everything you need to hit the ground running—minus the headaches.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">⚙️</div>
                <h2 className="text-xl font-semibold mb-2">Complete Setup</h2>
                <p>We'll build your recruitment and bidding processes from scratch, so you don't have to.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">📋</div>
                <h2 className="text-xl font-semibold mb-2">Hands-On Training</h2>
                <p>We train your team to navigate daily operations smoothly—whether it's finding top talent or submitting winning bids.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🧑‍💼</div>
                <h2 className="text-xl font-semibold mb-2">We've Got Your Back</h2>
                <p>Full-time recruiters, expert bid writers, and admin support are at your service. Let us handle the backend while you focus on building relationships and closing deals.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🌟</div>
                <h2 className="text-xl font-semibold mb-2">Why Choose This Package?</h2>
                <p>Because starting strong is half the battle. We help you get the foundation right so you can focus on what matters—growing your business.</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link href="/contact" className="inline-block gradient-bg text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
                Let's Get Started →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-4">Ready to Scale? Let's <span className="text-blue-600">Grow Together!</span></h1>
            <p className="text-center mb-12 max-w-2xl mx-auto">
              Is your talent acquisition and RFP management agency bursting at the seams? That's a good problem to have! 
              With our Expansion & Growth Package, you'll be able to handle more business without sacrificing quality or burning out your team.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4">Smarter Processes</h2>
                <p className="mb-4">We optimize what you're already doing, making your workflows faster and smoother.</p>

                <h2 className="text-2xl font-semibold mb-4">Build Your Dream Team</h2>
                <p className="mb-4">With additional recruiters and bid writers, you'll have the resources to take on bigger, more complex projects.</p>

                <h2 className="text-2xl font-semibold mb-4">Strategic Support</h2>
                <p className="mb-4">Monthly check-ins with our experts ensure you're always moving in the right direction.</p>

                <h2 className="text-2xl font-semibold mb-4">Why Choose This Package?</h2>
                <p className="mb-4">You've put in the hard work, now it's time to scale. We help you grow strategically, so you don't lose control or quality.</p>

                <Link href="/contact" className="inline-block gradient-bg text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
                  Let's Talk Growth →
                </Link>
              </div>

              <div className="md:w-1/2">
                <Image src="/images/smartprocess.jpg" alt="Growth Image" width={500} height={300} className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-8"><span className="text-blue-600">Government</span> Contracts Made Easy</h1>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span><strong>Compliance, Handled:</strong> We set up your systems to meet strict government requirements, so you don't have to worry about missing any details.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span><strong>Specialized Support:</strong> Our dedicated government bid writer and recruiter know exactly what it takes to win those contracts.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span><strong>We'll Manage the Paperwork:</strong> From documentation to compliance management, we've got it covered.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span><strong>Why Choose This Package?</strong> Government contracts are tricky, but they're worth it. We make sure your agency is perfectly positioned to compete and win.</span>
                  </li>
                </ul>

                <Link href="/contact" className="inline-block gradient-bg text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 mt-8">
                  See How We Can Help →
                </Link>
              </div>

              <div className="md:w-1/2">
                <Image src="/images/contract.jpg" alt="Government Contracts Image" width={500} height={300} className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-200  text-black">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Customize Your Success</h1>
            <p className="mb-8 max-w-2xl mx-auto">
              We know one size doesn't fit all. That's why we offer custom solutions for agencies that need a little bit more—or less. 
              Whether you need an extra recruiter, more administrative support, or expert bid writers, we'll build a package that's right for you.
            </p>
            <Link href="/contact" className="inline-block gradient-bg text-blue-600 px-6 py-3 rounded-md hover:bg-gray-100 transition duration-300">
              Start Building Your Custom Plan →
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

