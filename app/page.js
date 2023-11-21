"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };

  const convert = () => {
    const outputVal = input.split("\n").filter((inp) => inp.match(/^[0-9]+$/));

    setOutput(outputVal.map((e) => `62${e}`));
  };

  const handleDownload = () => {
    if (output.length == 0) return;

    const blob = new Blob([output.join("\n")], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `formattedNumber-${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <h1 className="text-2xl font-medium">Number formatter</h1>
      <div className=" w-full h-full p-4 flex gap-12">
        <div className="flex-1 flex flex-col items-center gap-2 my-4">
          <label className="text-lg font-thin" htmlFor="input-num">
            Masukkan nomor disini `ex. 82200238932`
          </label>
          <textarea
            className="flex-1 w-full p-4 font-thin resize-none border-2 rounded-xl"
            name="input"
            id="input-num"
            onChange={onInputChange}
          ></textarea>
          <div className="flex gap-8 text-gray-500" id="meta">
            <p id="input-count">count: {input.split("\n").length}</p>
            <p id="input-invalid-count">
              invalid:{" "}
              {input.split("\n").filter((inp) => !inp.match(/^[0-9]+$/)).length}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <button
            id="conv-btn"
            onClick={convert}
            className="bg-blue-400 rounded-xl px-4 py-2 text-white"
          >
            {"convert >"}
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center gap-2 my-4">
          <label className="text-lg font-thin" htmlFor="output-num">
            Hasil convert
          </label>
          <textarea
            className="flex-1 w-full p-4 font-thin resize-none border-2 rounded-xl"
            name="output"
            id="output-num"
            value={output.join("\n")}
            readOnly
          ></textarea>
          <div className="flex text-gray-500" id="meta">
            <p id="output-count">count: {output.length}</p>
          </div>
        </div>
      </div>
      <button
        id="download-btn"
        onClick={handleDownload}
        className="bg-green-400 rounded-xl px-4 py-2 text-white"
      >
        Download .txt
      </button>
    </>
  );
}
