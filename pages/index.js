import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Images from "../components/Images";

import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div>
  
      <body>
        <Navbar />
        <div class="jumbotron text-center">
          <h1>Create a website you are proud of</h1>
          <p>
            Discover the platform that gives you the freedom to create, design,
            manage and develop your web presence exactly the way you want.
          </p>
        </div>
        <div class="col-md-12 text-center">
          <button type="button" class="btn btn-primary">
            Get Started
          </button>
          <p>Try WiX.No credit card required.</p>
        </div>
        <div>
          <img
            src="https://static.wixstatic.com/media/311dce_3876c1e036654b3f9c5448862d427861~mv2.png/v1/fill/w_1271,h_547,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/desktop.png"
            class="img-fluid"
            alt="..."
          ></img>
        </div>
        <div class="p-3 mb-2 bg-primary text-white -center">
          <h1>The Freedom to Create the Websites You Want</h1>
          <p>
            Design and build your own high-quality websites. Whether you’re
            promoting your business, showcasing your work, opening your store or
            starting a blog—you can do it all with the Wix website builder.
          </p>
        </div>

        <div>
        <div class="jumbotron text-center">
          <h1>Professionally Designed Website Templates</h1>
          <p>
          Choose from 500+ customizable website templates that are built to meet your business needs.
          </p>
          <a href="#" class="link-primary">See all Website Templates</a>
        </div>
          
          <Images></Images>
        </div>
        <div>
          <Footer/>
        </div>
      </body>
    </div>
  );
}
