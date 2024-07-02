import React from 'react'

const About = () => {
  return (
    <div>
      <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        About Task Manager
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">
        <strong>Task Manager App</strong> helps to create task and also mark them based on their status of completion.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Technologies Used
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
      <div class="accordion-body">
        This is a simple Web app made using mern stack and reusable components,
        technologies used are <code>MongoDB,Express.js,React.js,Node.js</code> and for designing  <code>bootstrap and css.</code>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        More about<strong className='ms-2'>MERN</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
      <div class="accordion-body">
        <strong>MongoDB : </strong>  Used for storing a data, it is a non relational Database<br />
        <strong>Express.js :</strong> Backend Language used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.<br />
        <strong>React.js :</strong> JavaScript library for building user interfaces based on components,React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.<br />
        <strong>Node.js :</strong> Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.<br />
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About
