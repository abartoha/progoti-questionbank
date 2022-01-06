import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    if (window.confirm("Do you want to submit this question? If it's not well made or you keep spamming bad/duplicate questions, your questions WILL be silent banned from entering the test papers, forever!")) {
      submitQuestion(data);
      // checkConsole(data);
      // successPrompt(data);
    }
  };

  const submitQuestion = (data) => {
    // fetch('http://localhost:5000/addMockQuestions', {
    fetch('https://qbankp.herokuapp.com/addMockQuestions', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((res) => successPrompt(res))
        .catch(error => failPrompt(error.message))
}

  const checkConsole = (x) => {
    alert("Check the console for response");
    console.log(x);
  }
  const successPrompt = (x) => {
    alert("Submitting question successful (যদি এই মেসেজটা আসতে ৫ সেকেন্ডের বেশি সময় লাগে তাহলে আরেকবার পাঠাতে হবে, পীড়া নাই)");
    console.log(x);
  }
  const failPrompt = (x) => {
    alert("Submitting question failed");
    console.log(x);
  }

  console.log(errors);
  
  return (
    <div className="align-center my:px-10 lg:px-20 py-5 lg:py-20 md:py-10">

      <div className="text-center">
        <p>Go to <Link to={"/"}>Home</Link></p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="items-center flex flex-col">
        
        <div className="p-3 w-full h-auto">
          <textarea className="p-3 w-full h-full border-2"placeholder="Question" {...register("Question", {required: true})} />
        </div>
        
        <div className="p-3 w-full h-auto">
          <select className="p-3 w-full h-auto" {...register("Subject", { required: true })}>
            <option value="unchosen">Subject</option>
            <option value="Admission (BUET)">Admission (BUET)</option>
            <option value="Admission (Medical)">Admission (Medical)</option>
            <option value="Admission (Varsity)">Admission (Varsity)</option>
            <option value="Accountings">Accountings</option>
            <option value="Bangla">Bangla</option>
            <option value="Bangladesh and Global Studies">Bangladesh and Global Studies</option>
            <option value="Botany">Botany</option>
            <option value="Buddhism">Buddhism</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Christianity">Christianity</option>
            <option value="English">English</option>
            <option value="Finance">Finance</option>
            <option value="Hinduism">Hinduism</option>
            <option value="History">History</option>
            <option value="Islam">Islam</option>
            <option value="Islamic History">Islamic History</option>
            <option value="Math">Math</option>
            <option value="Physics">Physics</option>
            <option value="Science">Science</option>
            <option value="Zoology">Zoology</option>
          </select>
        </div>
        
        <div className="p-3 w-full h-auto">
          
          <input className="p-3 w-full h-auto border-2" type="number" placeholder="Class" {...register("Class", {required: true, max: 12, min: 1})} />
        </div>
        <div className="p-3 w-full h-auto">
          
          <input className="p-3 w-full h-auto border-2" type="number" placeholder="Your Contact Number (optional)" {...register("PhoneNumber", {required: false})} />
        </div>
        <div className="p-3 w-full h-auto">
          
          <input className="p-3 w-full h-auto border-2" type="text" placeholder="Right Answer" {...register("RightAnswer", {required: true})} />
        </div>
        <div className="p-3 w-full h-auto">
          
          <input className="p-3 w-full h-auto border-2" type="text" placeholder="Wrong Answer 1" {...register("WrongAnswer1", {required: true})} />
        </div>
        <div className="p-3 w-full h-auto">
          
          <input className="p-3 w-full h-auto border-2" type="text" placeholder="Wrong Answer 2" {...register("WrongAnswer2", {required: true})} />
        </div>
        <div className="p-3 w-full h-auto">
          
          <input className="p-3 w-full h-auto border-2" type="text" placeholder="Wrong Answer 3" {...register("WrongAnswer3", {required: true})} />
        </div>
        <div className="p-3 w-full h-auto">
          
          <input className="p-3 w-full h-auto border-4 bg-orange-600 text-white cursor-pointer" name="Submit Question" type="submit"/>
        </div>
      </form>
    </div>
  );
}