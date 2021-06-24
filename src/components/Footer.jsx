import React, { Component } from "react";
import { CoffeeLogo } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="flex flex-row p-32 space-x-2 bg-gray-100">
          <div className="space-x-2 space-y-8 flex-1">
            <div className="flex space-x-2">
              <img src={CoffeeLogo} alt="logo" />
              <span className="mt-1 font-bold text-lg">Cerita Kopi</span>
            </div>
            <div className="w-72">
              <p>Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
            </div>
            <div className="flex flex-row space-x-4">
              <div className="bg-yellow-400 w-14 h-14 rounded-full shadow-lg">
                <FontAwesomeIcon icon={faFacebookF} size="lg" className="my-4 mx-5" />
              </div>
              <div className="bg-yellow-400 w-14 h-14 rounded-full shadow-lg">
                <FontAwesomeIcon icon={faTwitter} size="lg" className="my-4 mx-5" />
              </div>
              <div className="bg-yellow-400 w-14 h-14 rounded-full shadow-lg">
                <FontAwesomeIcon icon={faInstagram} size="lg" className="my-4 mx-5" />
              </div>
            </div>
            <div><p className="text-gray-400">&copy;2020CoffeeStore</p></div>
          </div>
          <div className="flex space-x-24">
            <div className="space-y-5 text-gray-500">
              <span className="font-bold text-black">Products</span>
              <p>Download</p>
              <p>Pricing</p>
              <p>Locations</p>
              <p>Countries</p>
              <p>Blog</p>
            </div>
            <div className="space-y-5 text-gray-500">
              <span className="font-bold text-black">Engage</span>
              <p>Coffee Shp ?</p>
              <p>FAQ</p>
              <p>About Us</p>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
