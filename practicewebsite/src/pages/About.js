import React from 'react'
import Navbar from './navbar'

const About = () => {
    return(
        <>
        <Navbar/>
          <div className='container2'>
            <div className="content">
                <h1>ABOUT US</h1>
                <p>Chatgpt provides us with answers to our queries,
                    not 100% accurate, but still it’s helpful when we don’t have time to search for information for our projects,
                    research or any work related things.<br/><br/>
                    By using the Chat interface of chatgpt in our application we can make it easier for users to interact and
                    get the results they are looking for.<br/><br/>
                    Knowing the latest trend of colour analysis
                    which costs a lot for people, we can create a colour analysis website using Chatgpt.<br/><br/>
                    We can take our picture and the system identifies our skin colour in RGB format and inputs it into 
                    our Chat interface which in return provides us with details of what colour suit us, and gives us list of 
                    colours.<br/><br/>
                     Color Analysis, also called "Skin Tone Color Matching" or "Color Seasons",
                     is the process of determining the colors that best suit an individuals natural coloring.
                      There are several ways of analyzing personal coloring.<br/><br/>
                      Some color analysis systems classify an individual's personal 
                      combination of hair color, eye color and skin tone using labels that refer to a color's 
                      "temperature" (cool blue vs. warm yellow) and the degree to which the hair, 
                      skin and eye colors contrast. Cosmetic colors are often determined by hair 
                      or eye color alone.</p>
            </div>
          </div>
        </>
    );
}

export default About;