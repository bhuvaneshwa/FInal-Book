/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import about from "../assets/books/about.png";
export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-gray-600 text-lg text-justify">
              Welcome to Doodle Dreams, an online bookstore dedicated to
              spreading the joy of creativity among children. We specialize in
              offering a wide selection of preloved and new art supplies, with a
              collection of over 10,000 items, carefully curated to ignite
              imaginations and inspire young minds.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 font-medium"
                onClick={() => setShowMore(!showMore)}
              >
                Learn more about us{" "}
                <span
                  className={`ml-2 ${showMore ? "transform rotate-90" : ""}`}
                >
                  &#8594;
                </span>
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src={about}
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      {showMore && (
        <article className="container mx-auto py-16 px-4 sm:px-6 lg:px-0">
          <header className="page-masthead"></header>
          <div className="page-content rte text-gray-600 text-lg">
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div className="max-w-lg">
                  <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Doodle Dreams
                  </h2>
                  <p className="mt-4 text-gray-600 text-lg text-justify">
                    Our journey began ten years ago with a quest to provide our
                    children access to a variety of age-appropriate art
                    supplies. As we went along, we realized that it was not all
                    that easy getting it all in one place. The idea of “Doodle
                    Dreams” was born and here we are, to provide a curated
                    collection of art supplies for children & young teens.
                    Doodle Dreams was born out of a passion for creativity and a
                    desire to make art joyful & accessible to every child. As
                    avid artists ourselves, we understood the transformative
                    power of art and the impact it can have on a child's
                    development.
                  </p>
                </div>
                <div className="mt-12 md:mt-0">
                  <img
                    src="https://www.haranandbooks.com/blog/wp-content/uploads/2015/12/reading-and-childeren-books.jpg"
                    alt="About Us Image"
                    className="object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="mb-8 text-justify mx-7 space-y-5">
              <p>
                <strong>
                  <em>Accessibility:</em>
                </strong>{" "}
                We believe that art should be accessible to every child. By
                offering preloved supplies, we make creativity affordable,
                ensuring that more families can provide their children with the
                gift of artistic expression.
              </p>
              <p>
                <strong>
                  <em>Quality:</em>
                </strong>{" "}
                We are committed to providing original, high-quality art
                supplies. Each item in our collection undergoes a careful
                selection process to ensure that it meets our standards for
                content, condition, and educational value.
              </p>
              <p>
                <strong>
                  <em>Curation:</em>
                </strong>{" "}
                Our team of passionate art enthusiasts meticulously curates our
                collection, handpicking items that engage, educate, and
                entertain. We take pride in offering a diverse range of supplies
                that reflect different styles, techniques, and experiences.
              </p>
              <p>
                <strong>
                  <em>Transparency:</em>
                </strong>{" "}
                We believe in building trust with our customers. Transparency is
                at the core of our operations, and we strive to provide clear
                and accurate information about our products, pricing, and
                policies. We want you to feel confident and informed when making
                your selections.
              </p>
              <p>
                <strong>
                  <em>Sustainability:</em>
                </strong>{" "}
                By selling preloved supplies, we not only make creativity
                affordable but also promote sustainable practices. Giving these
                supplies a new home reduces waste and encourages the idea of
                sharing tools and fostering a sense of community.
              </p>
              <p>
                <strong>
                  <em>Philanthropy:</em>
                </strong>{" "}
                ‘
                <strong>
                  <em>An Art Kit in every hand’,</em>
                </strong>{" "}
                We are dedicated to making a positive impact on children's
                creativity beyond sales. Through our philanthropic initiatives,
                we actively support causes that promote artistic expression,
                education, and the love of creativity. From donating supplies to
                underprivileged children to supporting local art programs, we
                are committed to fostering a lifelong love for creativity in
                every child.
              </p>
            </div>
            <p className="mb-8 mx-7">
              <strong>Our Unique Offerings:</strong>
            </p>
            <div className="mb-8 mx-7 space-y-4">
              <p>
                <strong>
                  <em>Dreambox:</em>
                </strong>{" "}
                Immerse your child in the magic of surprise with our Dreambox.
                Each Dreambox is carefully curated to deliver a delightful
                selection of art supplies tailored to your child's interests. It
                is a box of dreams that opens doors to new worlds of creativity
                and inspiration.
              </p>
              <p>
                <strong>
                  <em>Doodlepack:</em>
                </strong>{" "}
                Our Doodlepacks are theme-based art kits specially designed to
                make creativity even more exciting for kids. We have varied
                themes that cater to varied interests of children to enhance the
                creative experience and spark imagination.
              </p>
            </div>
            <p className="mb-8 mx-7 space-y-4">
              <strong>Community Engagement: </strong>At Doodle Dreams, we
              believe in the power of community and the positive impact it can
              have on children's creative experiences. We are committed to
              fostering a sense of belonging and creating opportunities for
              connection among young artists, parents, educators, and art
              enthusiasts by creating virtual art clubs, workshops, partnering
              with schools and libraries, and community outreach.
            </p>
            <p className="mb-8  mx-7 space-y-4">
              <strong>Brand Proposition: </strong>At Doodle Dreams, we strive to
              be more than just an online art store. We are on a mission to
              ignite imaginations, inspire learning, and foster a lifelong love
              for creativity in children. Through our extensive collection,
              affordable prices, and unique offerings like Dreambox and
              Doodlepack, we aim to create a creative experience that is joyful,
              accessible, and enriching.
            </p>
            <p className="mb-8  mx-7 space-y-4">
              Whether you are searching for classic supplies, contemporary
              mediums, or an educational resource, we invite you to explore the
              wonders that lie within the pages of our art kits. Let Doodle
              Dreams be your trusted companion in nurturing a love for
              creativity and unlocking the boundless potential of your child's
              imagination.
            </p>
            <p className="mb-8  mx-7 space-y-4">
              <strong>Customer Focus:</strong> At Doodle Dreams, our customers
              are at the center of our focus. We prioritize your needs and
              strive to provide the best experience possible. We ensure the
              security of our website with industry-standard encryption,
              safeguarding your personal information and payment details. Our
              team is dedicated to delivering top-level service, assisting you
              with any inquiries and offering personalized recommendations. We
              partner with trusted shipping providers to ensure your orders are
              handled with care and arrive promptly.
            </p>
            <p className="mb-8  mx-7 space-y-4">
              If you are not happy with your purchases, we offer a 100% refund
              guarantee, no questions asked. Additionally, we have an easy
              Exchange and Return policy to accommodate your preferences. Stay
              connected with us through updates on WhatsApp, where you will
              receive order updates, exclusive offers, and personalized
              recommendations.
            </p>
            <p className="mb-8  mx-7 space-y-4">
              We take pride in our 4.8/5 rating on Google Reviews, a testament
              to our commitment to exceptional service and customer
              satisfaction. At Doodle Dreams, we strive to exceed your
              expectations, providing a secure, convenient, and enjoyable
              shopping experience. Your trust and satisfaction are our top
              priorities, and we continuously improve our services to better
              serve you.
            </p>
            <div className="mb-8  mx-7 space-y-4">
              <p>Thank you!</p>
              <p>Regards,</p>
            <p>
              <strong>Suhas Mahaveer</strong>
            </p>
            <p>
              <strong>Founder, Doodle Dreams</strong>
            </p></div>
           
            {/* <div className="follow-us">
              <p>Follow us</p>
              <ul className="flex space-x-4">
                <li><a href="#">Email DoodleDreams.com</a></li>
                <li><a href="#">Find us on Facebook</a></li>
                <li><a href="#">Find us on Instagram</a></li>
                <li><a href="#">Find us on LinkedIn</a></li>
                <li><a href="#">Find us on Pinterest</a></li>
                <li><a href="#">Find us on YouTube</a></li>
              </ul>
            </div> */}
          </div>
        </article>
      )}
    </section>
  );
}
