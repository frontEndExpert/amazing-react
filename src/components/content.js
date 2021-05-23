import { useMediaQuery } from 'react-responsive';



const Content = () => {

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    
    return(

<main className="content" >
    <div className="story">
        <div className="mypic">
            <img src="../images/aylon.jpg" width="180px" alt="Aylon" />
        </div>
        <div className="mystory">
            <p>Hi, I’m Aylon. For years I had 2 different passions: 
one was internet marketing and automation and 
the other is personal development and coaching.</p>
            <p>
I was so happy when I found this business opportunity 
because it is a combination of both.
Moreover, it has high ticket offers which means that it can lead you faster to financial success.</p>
            <p>
The business is newbie friendly with lots of support and therefore it is duplicable.</p>
            <p>
You too can duplicate the business and build your own success.</p>
            <p>
To get more information, please fill the form above so I can call you back
to answer your questions and see if it is the right fit.  </p>
            
        </div>
        <h2 className="s-header">To create an Amazing Life filled with choices.  </h2>
    </div>
    <div className="pics">
        <figure>
            <img src="../images/family1.jpg" height="auto" width="350px" alt="mountain trip" />
            <figcaption>This shot was also taken on the mountains.</figcaption>
        </figure>
        <figure>
            <img src="../images/family2.jpg" height="220px" width="350" alt="amazing life - Disney trip." />
            <figcaption>Here we are on a trip to Disney Land.</figcaption>
        </figure>
        <figure>
            <img src="../images/family3.jpg" height="370px" width="auto" alt="Amazing Life - My Little Ella" />
            <figcaption>My little one Ella. She's now 5 years old and all that we doing is for her present and future</figcaption>
        </figure>
        <figure>
            <img src="../images/family4.jpg" height="370px" width="auto" alt="Amazing life solutions - trip in the mountains in Thailand" />
            <figcaption>Fun times in the mountains of northern Thailand.</figcaption>
        </figure>         
    </div>
    <div className="stats">
        <div>
            <h2>Over 127,000 lives impacted </h2>
            <span>Our products have directly impacted well over 100,000 customers in 132 countries around the world and counting!</span>
        </div>
        <div>
            <h2>A proven track record </h2>
            <span>This business system was developed over 10 years ago & embodies a global community of like minded men and women who are passionate about assisting individuals with the teachings of our proven business system and Personal Growth principles.</span>
        </div>
    </div>
    <div className="testimonials">
        { isMobile &&
        <div> 
            <figure> 
                <img src="../images/taniastapp.jpg" width="160px" height="160px" alt="Tania Stapp" />
                <figcaption>Tania Stapp</figcaption>
            </figure> 
            <blockquote>
                “I made a strategic choice to start this business because ‘everything was probable’ - the lifestyle, time and financial freedom, my dreams and passions, a structure and system set up for success, and where people understood and were ‘speaking the same language’ about the mind, personal development, and psychology. When I applied this learning, I consciously created a ‘new normal’ across key areas of my life including earning in a month what I had previously earned in a year. I am proud of the businesswoman I am becoming, It’s exciting having the vehicle to be all of me, and this is just the start...”
            </blockquote>
        </div>}
        { !isMobile &&
        <div> 
            <blockquote>
                “I made a strategic choice to start this business because ‘everything was probable’ - the lifestyle, time and financial freedom, my dreams and passions, a structure and system set up for success, and where people understood and were ‘speaking the same language’ about the mind, personal development, and psychology. When I applied this learning, I consciously created a ‘new normal’ across key areas of my life including earning in a month what I had previously earned in a year. I am proud of the businesswoman I am becoming, It’s exciting having the vehicle to be all of me, and this is just the start...”
            </blockquote>
            <figure> 
                <img src="../images/taniastapp.jpg" width="160px" height="160px" alt="Tania Stapp" />
                <figcaption>Tania Stapp</figcaption>
            </figure> 
        </div>}


        <div>
            <figure> 
                <img src="../images/howardhughes.jpg" width="160px" height="160px" alt="Howard Hughes"  />
                <figcaption>Howard Hughes</figcaption>
            </figure>             
            <blockquote>
                "It was the opportunity to run a business and make big money that attracted me initially and wasn’t expecting what came next. Packing up my 3hr per day round trip and after the birth of our first child my new adventure had just begun. I am a stronger, better version of myself for my wife and kids who share this adventure with me.”
            </blockquote>
        </div>
    </div>
</main>

);

} 
export default Content;