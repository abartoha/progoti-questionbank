import React from "react";
// import { Link } from "react-router-dom";
import "./Home.css";
// import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

const Home = () => {
  const {fbAuth} = useAuth();
  return (
    <div class="login-page">
      <div class="container d-flex align-items-center">
        <div class="form-holder has-shadow">
          <div class="row">
            <div class="col-lg-6">
              <div class="info d-flex align-items-center">
                <div class="content">
                  <div class="logo">
                    <h1 className="my-2 py-2">প্রগতি</h1>
                  </div>
                  <p>
                    এখানে আপনার বানানো প্রশ্ন ডাটাবেইজে রাখা হবে, যাতে পরে সেটা
                    দিয়ে পরীক্ষার প্রশ্ন বানানো যায়। আপনার মতো হাজার হাজার
                    শিক্ষার্থীর প্রশ্ন দিয়ে ডাটাবেইজ গঠনের পর সেটা থেকে পরীক্ষা
                    নেয়া হবে, অবশ্যি প্রশ্নের মান আগে যাচাই করা হবে। এই ওয়েবসাইট
                    ও এর প্রচেষ্টা আপাতত একটি বদ্ধ সোর্স তবে বিনামূল্য প্রজেক্ট।{" "}
                    <br />
                    প্রগতি-এর উদ্দেশ্য হলো বাংলাদেশী শিক্ষাক্রমের ভিত্তিতে দক্ষ
                    শিক্ষার্থীদের সাহায্যে প্রশ্ন ভান্ডার তৈরি করা ও বিনামূল্যে
                    অনলাইনে পরীক্ষার আয়োজন করা। এখানে যেকোনো ক্লাসের যেকোনো
                    বিষয়ের উপর প্রশ্ন সংগ্রহ করা হবে এবং তা দ্বারা পরীক্ষা গ্রহণ
                    করা হবে (ভবিষ্যতে যখন প্রশ্ন ভান্ডার গড়ে উঠবে)। শিক্ষা যেমন
                    মুক্ত হওয়া উচিৎ, তেমনই উচ্চ মানের পরীক্ষা দেওয়া, প্রশ্ন তৈরি
                    ও প্রশ্ন যাচাই করার একটি মুক্ত প্লাটফর্ম গড়ে তোলা উচিৎ। আজ
                    হয়তো কেবল বাংলাদেশের শিক্ষার্থীদের নিয়ে কাজ করতে হচ্ছে।
                    যেকোনো প্রশ্ন বা তার উত্তর জানতে {" "}
                    <a
                      href="https://www.fb.com/abartoha"
                      className="bg-black text-white" 
                    >
                    প্রতিষ্ঠাতার
                    </a>{" "}
                    ফেসবুক আইডিতে যোগাযোগ করতে পারেন।
                  </p>
                  <p>
                    বিঃদ্রঃ শিক্ষার্থী/শিক্ষকগণের বর্তমানে এখানে একমাত্র কাজ
                    হলো নৈর্ব্যক্তিক প্রশ্ন ও তার উত্তর সরবরাহ করা। এক একটি করে
                    প্রশ্ন ফর্মে ফিল আপ করে সাবমিট করতে হবে, ব্যস! <br /> <br />
                    আপাতত কেবলমাত্র প্রশ্ন তৈরি করা ছাড়া আর অন্য কোনো সেবা গঠনের
                    কাজ সম্পন্ন করা হয়নি। কিন্তু শীঘ্রই আরো অনেক সেবা ও সুবিধা
                    সহকারে একটি পূর্ণাঙ্গ প্লাটফর্ম গড়ে তোলা হবে ইনশাল্লাহ।
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 bg-white">
              <div class="form d-flex align-items-center">
                <div class="content">
                  <p>
                    নিজের তৈরি প্রশ্ন জমা দিতে নিজের ফেসবুক একাউন্ট দিয়ে সাইন ইন
                    করুন
                  </p>
                  <div class="p-3 d-flex align-items-center justify-content-center">
                    <button onClick={fbAuth}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 14222 14222"
                      >
                        <g>
                          <circle
                            cx="7111"
                            cy="7112"
                            r="7111"
                            fill="#1977f3"
                          ></circle>
                          <path
                            d="M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z"
                            fill="#fff"
                          ></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyrights text-center">
        <p>
          2021 Made by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/abartoha"
          >
            AlRazi
          </a>
          ; Our <Link to="/pp">Privacy Policy</Link>
          {/* ; Our <a href="https://www.privacypolicies.com/live/4aee9d8b-656c-4b2f-9809-5ac7ac63f055">Privacy Policy</a> */}
          , <a href="https://www.privacypolicies.com/live/a95a7e19-a79a-4ece-9aba-718b26033745">Disclaimer</a>
          , <a href="https://www.termsandconditionsgenerator.com/live.php?token=xp6AHbBoDI2MuIRJkEunk8oUHKTQbitN">Terms and Conditions</a>
          , <a href="https://www.eulatemplate.com/live.php?token=41tToWSGQqLO4NJhII8cV314gRW97zsK">EULA</a>
        </p>
      </div>
    </div>
  );
};
export default Home;
