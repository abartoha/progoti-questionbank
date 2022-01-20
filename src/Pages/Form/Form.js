import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";

const App = () => {
  const { logOut, user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (
      window.confirm(
        "Do you want to submit this question? If it's not well made or you keep spamming bad/duplicate questions, your questions WILL be silent banned from entering the test papers, forever!"
      )
    ) {
      submitQuestion(data);
    }
  };

  const submitQuestion = (data) => {
    data.uid = user.uid;
    data.name = user.displayName;
    data.email = user.email;
    data.phoneNumber = user.phoneNumber;
    console.log(data);
    fetch("https://qbankp.herokuapp.com/addMockQuestions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => successPrompt(res))
      .catch((error) => failPrompt(error.message));
  };

  const successPrompt = (x) => {
    alert(
      "Submitting Question successful (যদি এই মেসেজটা আসতে ৫ সেকেন্ডের বেশি সময় লাগে তাহলে আরেকবার পাঠাতে হবে, পীড়া নাই)"
    );
    // console.log(x);
  };
  const failPrompt = (x) => {
    alert("Submitting question failed");
    // console.log(x);
  };

  // console.log(errors);

  return (
    <div>
      <header class="header">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid d-flex align-items-center justify-content-between">
            <div class="navbar-header">
              <a href="#" class="navbar-brand">
                <div class="brand-text brand-big visible text-uppercase">
                  <strong class="text-primary">Progoti</strong>
                  <strong>QBank</strong>
                </div>
                <div class="brand-text brand-sm">
                  <strong class="text-primary">P</strong>
                  <strong>Q</strong>
                </div>
              </a>

              <button class="sidebar-toggle">
                <i class="fa fa-long-arrow-left"></i>
              </button>
            </div>

            <div class="right-menu list-inline no-margin-bottom">
              <div class="list-inline-item logout">
                {" "}
                <button onClick={logOut} id="logout" class="nav-link">
                  Logout <i class="icon-logout"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div class="d-flex align-items-stretch">
        <nav id="sidebar">
          <div class="sidebar-header d-flex align-items-center">
            <div class="avatar">
              <img
                src="http://placehold.it/200"
                alt="N/A"
                class="img-fluid rounded-circle"
              />
            </div>
            <div class="title">
              <h1 class="h5">{user?.displayName || "User Name"}</h1>
              <p>{user?.email || "please refresh page"}</p>
            </div>
          </div>
          <ul class="list-unstyled">
            <li class="active">
              <a href="#">
                {" "}
                <i class="icon-home"></i>Home{" "}
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <i class="icon-grid"></i>Coming Soon{" "}
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <i class="fa fa-bar-chart"></i>Coming Soon{" "}
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <i class="icon-padnote"></i>Coming Soon{" "}
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <i class="icon-logout"></i>Coming Soon{" "}
              </a>
            </li>
          </ul>
          <span class="heading">Extras</span>
          <ul class="list-unstyled">
            <li>
              {" "}
              <a href="#">
                {" "}
                <i class="icon-settings"></i>Coming Soon{" "}
              </a>
            </li>
            <li>
              {" "}
              <a href="#">
                {" "}
                <i class="icon-writing-whiteboard"></i>Coming Soon{" "}
              </a>
            </li>
            <li>
              {" "}
              <a href="#">
                {" "}
                <i class="icon-chart"></i>Coming Soon{" "}
              </a>
            </li>
          </ul>
        </nav>
        <div class="page-content">
          <div class="page-header no-margin-bottom">
            <div class="container-fluid">
              <h2 class="h5 no-margin-bottom">Questions</h2>
            </div>
          </div>
          <div class="container-fluid">
            <ul class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item active">Questions </li>
            </ul>
          </div>
          <section class="no-padding-top">
            <div class="container-fluid">
              <form class="row" onSubmit={handleSubmit(onSubmit)}>
                {/* disclaimer  */}
                <div class="col-12 row my-2">
                  <div class="col-12 ml-auto">
                    <p>
                      ❗ নিচের ফর্মটির সকল ফাঁকা ঘর পূরণ করতে হবে, অন্যথায় জমা হবে না। <br />
                      👀 ফর্মটি কেবল মাত্র নৈর্ব্যক্তিক প্রশ্ন নির্মাণ কাজে ব্যবহারযোগ্য। <br />
                      💪 ভালো প্রশ্ন বানানো সুশিক্ষার লক্ষণ, ভালো শিক্ষার্থীরাই পারে। <br />
                    </p>
                  </div>
                </div>
                {/* name  */}
                <div class="col-12 row my-2">
                  <label class="col-3 col-sm-12 form-control-label">Name</label>
                  <div class="col-9 col-sm-12">
                    <input type="text" class="form-control" defaultValue={user?.displayName}/>
                  </div>
                </div>
                {/* question  */}
                <div class="col-12 row my-2">
                  <label class="col-3 col-sm-12 form-control-label">
                    Question Body
                  </label>
                  <div class="col-9 col-sm-12">
                    <textarea
                      className="form-control"
                      placeholder="এখানে মূল প্রশ্ন, উদ্দীপক এবং আনুসঙ্গিক সকল তথ্য লিখতে হবে"
                      {...register("Question", { required: true })}
                    />
                  </div>
                </div>
                {/* subject  */}
                <div class="col-12 row my-2">
                  <label class="col-sm-12 col-3 form-control-label">
                    Subject
                  </label>
                  <div class="col-sm-12 col-9">
                    <select
                      className="form-control mb-3"
                      {...register("Subject", { required: true })}
                    >
                      <option value="unchosen">কোন বিষয়ের প্রশ্ন?</option>
                      <option value="Admission (BUET)">বুয়েট ভর্তি পরীক্ষা</option>
                      <option value="Admission (Medical)">
                        মেডিকেল ভর্তি পরীক্ষা
                      </option>
                      <option value="Admission (Varsity)">
                        ভার্সিটি ভর্তি পরীক্ষা
                      </option>
                      <option value="Accountings">হিসাববিজ্ঞান</option>
                      <option value="Bangla">বাংলা/ বাংলা প্রথম পত্র</option>
                      <option value="Bangla2">বাংলা ব্যকরণ/ নির্মিতি/ বাংলা দ্বিতীয় পত্র</option>
                      <option value="Bangladesh and Global Studies">
                        বাংলাদেশ ও বিশ্বপরিচয়
                      </option>
                      <option value="Botany">উদ্ভিদবিজ্ঞান</option>
                      <option value="Chemistry">রসায়ন</option>
                      <option value="English">ইংরেজী</option>
                      <option value="Finance">ফিন্যান্স ও ব্যাংকিং</option>ন
                      <option value="History">ইতিহাস</option>
                      <option value="HMath">উচ্চতর গণিত</option>
                      <option value="Math">গণিত</option>
                      <option value="Physics">পদার্থবিজ্ঞান</option>
                      <option value="Science">বিজ্ঞান</option>
                      <option value="Zoology">প্রাণীবিজ্ঞান</option>
                    </select>
                  </div>
                </div>
                {/* phone number  */}
                <div class="col-12 row my-2">
                  <label class="col-3 col-sm-12 form-control-label">
                    Class
                  </label>
                  <div class="col-9 col-sm-12">
                    <input
                      className="form-control"
                      type="number"
                      placeholder="যেই ক্লাসের জন্য প্রশ্ন সেই ক্লাস"
                      {...register("Class", {
                        required: true,
                        max: 12,
                        min: 1,
                      })}
                    />
                  </div>
                </div>
                {/* right answer  */}
                <div class="col-12 row my-2">
                  <label class="col-3 col-sm-12 form-control-label">
                    Right Answer
                  </label>
                  <div class="col-9 col-sm-12">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="প্রশ্নটির সঠিক উত্তর"
                      {...register("RightAnswer", { required: true })}
                    />
                  </div>
                </div>
                <div class="col-12 row my-2">
                  <label class="col-3 col-sm-12 form-control-label">
                    Wrong Answer 1
                  </label>
                  <div class="col-9 col-sm-12">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="প্রশ্নটির একটি নমুনা ভুল উত্তর"
                      {...register("WrongAnswer1", { required: true })}
                    />
                  </div>
                </div>
                <div class="col-12 row my-2">
                  <label class="col-3 col-sm-12 form-control-label">
                    Wrong Answer 2
                  </label>
                  <div class="col-9 col-sm-12">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="প্রশ্নটির আরো একটি নমুনা ভুল উত্তর"
                      {...register("WrongAnswer2", { required: true })}
                    />
                  </div>
                </div>
                <div class="col-12 row my-2">
                  <label class="col-3 col-sm-12 form-control-label">
                    Wrong Answer 3
                  </label>
                  <div class="col-9 col-sm-12">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="প্রশ্নটির তৃতীয় নমুনা ভুল উত্তর"
                      {...register("WrongAnswer3", { required: true })}
                    />
                  </div>
                </div>
                <div class="col-12 row my-2">
                  <div class="col-12 ml-auto">
                    <p>
                    ❗ উপরের ফর্মটির সকল ফাঁকা ঘর পূরণ করতে হবে, অন্যথায় জমা হবে না। <br />
                    </p>
                  </div>
                </div>
                <div class="col-12 row my-2">
                  <div class="col-12 ml-auto">
                    <input
                      className="p-3 btn btn-primary"
                      value="প্রশ্ন জমা দিন"
                      type="submit"
                    />
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
