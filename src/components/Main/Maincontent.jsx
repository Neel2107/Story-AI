import { useState } from "react";
import axios from "axios";

const Maincontent = () => {
  const [storyPrompt, setStoryPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [upvoteValue, setUpvoteValue] = useState(false);
  const [storyId, setStoryId] = useState("");
  const [newUpvotes, setNewUpvotes] = useState(0)
  // const [generatedStory, setGeneratedStory] = useState("dummy story")

  const handleUpvote = (e) => {
    setUpvoteValue(!upvoteValue);
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/upvotes", { upvoteValue, storyId })
      .then((response) => {
        console.log(response.upvotes)
        setNewUpvotes(response.upvotes)
      })
      .catch((error) => {
        // Handle error
        console.log("error", error)
      });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const storyPrompt = document.querySelector("#storyPrompt").value;

    if (!storyPrompt) {
      return alert("Please enter a story prompt.");
    }

    setIsLoading(true);

    axios
      .post("http://localhost:5000/api/prompt", {
        body: {
          max_tokens: 512,
          model: "chat-sophos-1",
          n: 1,
          source_lang: "en",
          target_lang: "en",
          temperature: 0.7,
          text: storyPrompt,
          
        },
      })
      .then((res) => {
        console.log(res.data);
        setOutput(res.data);
        console.log(res.data.data.outputs[0].id);
        setStoryId(res.data.data.outputs[0].id);
        // Update the state with the response data
      })
      .catch((err) => console.log("error", err))
      .finally(() => {
        setIsLoading(false); // Set isLoading to false after the API call is completed
      });

    // Define your headers in an object
    const headers = {
      "Content-Type": "application/json", // Example: You can set other headers as needed
      Authorization:
        "Bearer gAAAAABlDxu6aqd35CpCYXX0B26qeBNswOP7JqMVh2sXE1eJm1iBKRTnGIxYhI-MmuV3KqjMUS14rW-D5zef_cSD5qQ316qMCyCKjXc1kfbz3zDvUZKyyWR5CfqUw2-Ivwt61Vts5P6u", // Example: Include an authorization token if required
    };

    // Create a request object with the headers

    // Make the fetch request with the requestOptions
    const requestOptions = {
      method: "POST",
      headers: headers,
    };
  };

  const downloadTextAsFile = () => {
    const generatedText = output?.data?.outputs[0].text;

    if (!generatedText) {
      return; // No text to download
    }

    const blob = new Blob([generatedText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "generated_text.txt";
    document.body.appendChild(a);

    a.click();

    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div className="mainContent">
      <div>
        <h1 className="text-center text-4xl font-bold  title">
          Write innovative stories with our AI for Free!
        </h1>

        {/* <div className=" tags text-center text-lg  mt-7">
          <span>Generate ideas with your imagination</span>
          <span>Stories within seconds</span>
        </div> */}

        <div className="flex justify-center mt-9">
          <div className="input-group">
            <input
              type="text"
              className="input"
              placeholder="Enter a story prompt... "
              id="storyPrompt"
              value={storyPrompt}
              onChange={(e) => setStoryPrompt(e.target.value)}
            />
            <input
              className="button--submit"
              defaultValue="Generate"
              type="submit"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
      <div className="outputBox mt-9 ">
        {isLoading ? ( // Display the skeleton if isLoading is true
          <div
            role="status"
            className="space-y-2.5 ml-[12%] animate-pulse max-w-lg"
          >
            <div className="flex items-center w-full space-x-2">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32" />
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
            </div>
            <div className="flex items-center w-full space-x-2 max-w-[480px]">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
            </div>
            <div className="flex items-center w-full space-x-2 max-w-[400px]">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80" />
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
            </div>
            <div className="flex items-center w-full space-x-2 max-w-[480px]">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
            </div>
            <div className="flex items-center w-full space-x-2 max-w-[440px]">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32" />
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
            </div>
            <div className="flex items-center w-full space-x-2 max-w-[360px]">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80" />
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <p id="output">{output?.data?.outputs[0].text}</p>
        )}
        {output && (
          <div className="bothButtons">
            <button
              onClick={downloadTextAsFile}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Save</span>
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              onClick={() => {
                setOutput("");
              }}
            >
              <img src="./send.png" className="shareIcon" alt="" />
              <span>Clear</span>
            </button>
            <button
              onClick={handleUpvote}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <img src="./upvote.svg" className="shareIcon" alt="" />
              <span>Upvote</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Maincontent;
