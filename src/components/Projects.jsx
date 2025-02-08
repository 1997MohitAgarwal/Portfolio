import React from "react";

export default function Projects() {
  return (
    <div id="projects" className="pb-5 pt-3">
      <h3>
        My Projects
        <hr />
      </h3>
      <p>Here are some of my projects, you may like.</p>
      <div class="work-box">
        <div class="work">
          <div class="card">
            <img
              width="170"
              height="170"
              class="work-img"
              src="/assets/images/dashboard.gif"
            />
            <p class="work-content">
              Dashboard Application. Email: user@example.com Password:
              password123
            </p>
            <a
              href="https://dashboard-analytics-x8x4.vercel.app/"
              target="_blank"
            >
              <button className="float1">Link</button>
            </a>
          </div>
          <div class="card">
            <img
              width="170"
              height="170"
              class="work-img"
              src="/assets/images/weath.gif"
            />
            <p class="work-content">
              An application that fetches weather details of a city and forecast 5 days weather.
            </p>
            <a href="https://weather-app-seven-pi-82.vercel.app/" target="_blank">
              <button className="float1">Link</button>
            </a>
          </div>
          <div class="card">
            <img
              width="170"
              height="170"
              class="work-img"
              src="/assets/images/crypto.gif"
            />
            <p class="work-content">
              A cryptocurrency Application that fetches different crypto data.
            </p>
            <a
              href="https://fintechcrypto.vercel.app/"
              target="_blank"
            >
              <button className="float1">Link</button>
            </a>
          </div>
          <div class="card">
            <img
              width="170"
              height="170"
              class="work-img"
              src="/assets/images/food.gif"
            />
            <p class="work-content">
              An Application that helps you with food recipes with any
              ingredient.
            </p>
            <a href="https://food-app-7hj.vercel.app" target="_blank">
              <button className="float1">Link</button>
            </a>
          </div>
          <div class="card">
            <img
              width="170"
              height="170"
              class="work-img"
              src="/assets/images/textutility.gif"
            />
            <p class="work-content">
              Text Utility App that helps you to change your text styles,case
              etc..
            </p>
            <a href="https://text-utility-pi.vercel.app" target="_blank">
              <button className="float1">Link</button>
            </a>
          </div>
          <div class="card">
            <img
              width="170"
              height="170"
              class="work-img"
              src="/assets/images/Chatbot.gif"
            />
            <p class="work-content">
              A smart chatbot that assists you with the query you provide to it.
            </p>
            <a href="https://chat-ai-nu-flame.vercel.app" target="_blank">
              <button className="float1">Link</button>
            </a>
          </div>
          <div class="card">
            <img
              width="170"
              height="170"
              class="work-img"
              src="/assets/images/news.gif"
            />
            <p class="work-content">
              News app that fetches news based on different categories.
            </p>
            <a href="https://india-fission-news.vercel.app" target="_blank">
              <button className="float1">Link</button>
            </a>
          </div>
          <div class="card">
            <img
              width="170"
              height="170"
              class="work-img"
              src="/assets/images/dashboard.gif"
            />
            <p class="work-content">
              Dashboard Application with Charts and beautiful User Interface
            </p>
            <a href="https://dashboard-chi-sable.vercel.app" target="_blank">
              <button className="float1">Link</button>
            </a>
          </div>
          <div class="card">
            <img
              width="170"
              height="170"
              class="work-img"
              src="/assets/images/UI.gif"
            />
            <p class="work-content">
              A complex UI design and maintaining its responsiveness
            </p>
            <a href="https://ui-design-page-one.vercel.app" target="_blank">
              <button className="float1">Link</button>
            </a>
          </div>
          <div class="card">
            <img
              width="170"
              height="170"
              class="work-img"
              src="/assets/images/stocks.gif"
            />
            <p class="work-content">
              A Stock app which stores stocks data and NSE top news with
              discussions
            </p>
            <a href="https://stocksdata.vercel.app" target="_blank">
              <button className="float1">Link</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
