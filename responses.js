function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    }
    else if (input == "paper") {
        return "scissors";
    }
    else if (input == "scissors") {
        return "rock";
    }

    // mode change
    if (input == "dark mode" || input == "dark" || input == "light mode" || input == "light" || input == "mode change" || input == "change mode") {
        lightMode();
        return "Mode Change";
    }

    if (input == "who created this website" || input == "who made this website" || input == "who designed this website" || input == "who developed this website") {
        return "Tarapada Garai";
    }


    // good mor
    if (input == "good morning" || input == "morning") {
        return "Good Morning";
    }
    else if (input == "good night") {
        return "Good Night";
    }
    else if (input == "good noon") {
        return "Good Noon";
    }
    else if (input == "good upter noon" || input == "upter noon") {
        return "Good Upter Noon"
    }
    else if (input == "good evening" || input == "evening") {
        return "Good Evening";
    }

    // Simple responses
    if (input == "hello" || input == "helo" || input == "hi" || input == "hii" || input == "hiii") {
        return "Hello there!";
    }
    else if (input == "how are you") {
        return "Fine";
    }
    else if (input == "what are you do" || input == "who are you" || input == "what do you do") {
        return "I'm a Front end Developer";
    }
    else if (input == "how much your work experiences" || input == "you are fresher" || input == "how much experiences do you have" || input == "tell me about your experiences" || input == "tell me about your work experiences" || input == "work experiences" || input == "experiences") {
        return "i am fresher <br> But I made website for 2 companies in our village";
    }
    else if (input == "goodbye" || input == "goodby" || input == "by") {
        return "Talk to you later!";
    }
    else if (input == "reload this website" || input == "reload website" || input == "please reload this website" || input == "reload" || input == "website reload") {
        location.reload();
        return "website reloaded"
    }
    else if (input == "good" || input == "op" || input == "nice" || input == "very good" || input == "nice website" || input == "thank you" || input == "thanks" || input == "all right") {
        return "thank you very much"
    }

    // pages
    if (input == "home page" || input == "home") {
        return '<a href="#home" title="click here to go home page">Home Page</a>';
    }
    else if (input == "about page") {
        return '<a href="#about" title="click here to go about page">About Page</a>';
    }
    else if (input == "skill page" || input == "skills page") {
        return '<a href="#skill" title="click here to go skills page">Skill Page</a>';
    }
    else if (input == "project page" || input == "projects page") {
        return '<a href="#project" title="click here to go projects page">Project Page</a>';
    }
    else if (input == "contact us page" || input == "contactus page" || input == "contactUs page" || input == "contact us") {
        return '<a href="#contact" title="click here to go contact us page">Contact Us Page</a>';
    }

    // links
    if (input == "email" || input == "what is your email" || input == "gmail") {
        return '<a href="mailto:tarapadagarai898@gmail.com" title="Gmail">my gmail is tarapadagarai898@gmail.com</a>';
    }
    else if (input == "number" || input == "what is your phone number" || input == "phone number" || input == "cv" || input == "CV") {
        return '<a href="pdf/cv.pdf" download="cv.pdf" title="click here to Download my CV">Download CV</a>';
    }
    else if (input == "facebook" || input == "what is your facebook link" || input == "facebook link") {
        return '<a href="https://www.facebook.com/tarapada.garai.35" title="click here to check my Facebook Profile" target="_blank">My Facebook Profile <i class="fa-brands fa-facebook"></i></a>';
    }
    else if (input == "twitter" || input == "what is your twitter link" || input == "twitter link") {
        return '<a href="https://twitter.com/RakeshGarai100" target="_blank" title="click here to check my Twitter Profile">My Twitter Profile <i class="fa-brands fa-twitter"></i></a>';
    }
    else if (input == "instagram" || input == "what is your instagram link" || input == "instagram link") {
        return '<a href="https://www.instagram.com/tarapada_9679/" target="_blank" title="click here to check my Instagram Profile">My Instagram Profile <i class="fa-brands fa-instagram"></i></a>';
    }
    else if (input == "github" || input == "what is your github link" || input == "github link") {
        return '<a href="https://github.com/codingWithRakesh" target="_blank" title="click here to check my GitHub Profile">My GitHub Profile <i class="fa-brands fa-github"></i></a>';
    }
    else if (input == "linkedin" || input == "what is your linkedin link" || input == "linkedin link") {
        return '<a href="https://www.linkedin.com/in/tarapada-garai-1a9a5a257/" target="_blank" title="click here to check my Linkedin Profile">My Linkedin Profile <i class="fa-brands fa-linkedin"></i></a>';
    }

    // projects
    if (input == "about youtube clone" || input == "about youtube project" || input == "youtube project" || input == "about youtube clone project" || input == "youtube clone project" || input == "youtube clone") {
        return '<b>YouTube Clone</b> <br> I made a YouTube clone. Where we can play videos, even shorts and plays, I have cloned four pages of YouTube <br> Skills Used : HTML, CSS, Javascript <br> <a href="project/youtube/home/index.html" target="_blank">Demo</a>';
    }
    else if (input == "about input clone" || input == "about instagram project" || input == "instagram project" || input == "about instagram clone project" || input == "instagram clone project" || input == "instagram clone") {
        return '<b>Instagram Clone</b> <br> I made a Instagram clone. Where we can play videos, even shorts and plays I have also created an Instagram message page. I have cloned all pages of Instagram . <br> Skills Used : HTML, CSS, Javascript <br> <a href="project/instagram/home/index.html" target="_blank">Demo</a>';
    }
    else if (input == "about netflix clone" || input == "about netflix project" || input == "netflix project" || input == "about netflix clone project" || input == "netflix clone project" || input == "netflix clone") {
        return '<b>Netflix Clone</b> <br> This is my first web clone project. I made it with HTML, CSS. <br> Skills Used : HTML, CSS <br> <a href="project/netflix/index.html" target="_blank">Demo</a>';
    }
    else if (input == "about ecommerce website" || input == "about ecommerce website project" || input == "ecommerce website project" || input == "ecommerce website") {
        return '<b>Ecommerce Website</b> <br> I made this e-commerce website. And I have put many kinds of features <br> Skills Used : HTML, CSS, Javascript <br> <a href="project/EcommerceWebsite/index.html" target="_blank">Demo</a>';
    }
    else if (input == "about computer coaching website" || input == "about computer coaching website project" || input == "computer coaching website project" || input == "computer coaching website") {
        return '<b>Computer Coaching Website</b> <br> I made this website for a coaching center. I added all the features they told me <br> Skills Used : HTML, CSS, Javascript <br> <a href="project/Computer_Center/index.html" target="_blank">Demo</a>';
    }
    else if (input == "about blogging website" || input == "about blogging website project" || input == "blogging website project" || input == "blogging website") {
        return '<b>Blogging Website</b> <br> This is a blogging website. I made this to test my bootstrap skills. This is my first bootstrap website <br> Skills Used : Bootstra <br> <a href="project/bloging webside/index.html" target="_blank">Demo</a>';
    }
    else if (input == "about shopping website" || input == "about shopping website project" || input == "shopping website project" || input == "shopping website") {
        return '<b>Shopping Website</b> <br> It is an eCommerce website built with Bootstrap. In this I tried to do it in the backend with javascript <br> Skills Used : Bootstra, Javascript <br> <a href="project/shopping_Webside/index.html" target="_blank">Demo</a>';
    }
    else if (input == "about calculator" || input == "about calculator project" || input == "calculator project" || input == "calculator") {
        return '<b>Calculator</b> <br> I made this calculator. If I calculate it, I can see its history <br> Skills Used : HTML, CSS, Javascript <br> <a href="project/Calculator/index.html" target="_blank">Demo</a>';
    }
    else if (input == "about currency converter" || input == "about currency converter project" || input == "currency converter project" || input == "currency converter") {
        return '<b>Currency Converter</b> <br> This website is a currency converter website that I made using javascript fetch api <br> Skills Used : HTML, CSS, Javascript <br> <a href="project/CurrencyConverter/index.html" target="_blank">Demo</a>';
    }
    else if (input == "about stone paper scissors" || input == "about stone paper scissors project" || input == "stone paper scissors project" || input == "stone paper scissors") {
        return '<b>Stone Paper Scissors</b> <br> This website is where we can play the Stone Paper Scissors game <br> Skills Used : HTML, CSS, Javascript <br> <a href="project/Stone Paper Scissors/index.html" target="_blank">Demo</a>';
    }
    else if (input == "about tic tac toe" || input == "about tic tac toe project" || input == "tic tac toe project" || input == "tic tac toe") {
        return '<b>Tic Tac Toe</b> <br> This website is where we can play the Tic Tac Toe game <br> Skills Used : HTML, CSS, Javascript <br> <a href="project/TicTacToe/index.html" target="_blank">Demo</a>';
    }
    else if (input == "about online exam" || input == "about online exam project" || input == "online exam project" || input == "online exam") {
        return '<b>Online Exam</b> <br> I made this an exam taking website. Where there is a lot of security. At the end of the exam, the number is counted and the number is shown <br> Skills Used : HTML, CSS, Javascript <br> <a href="project/online exam/index.html" target="_blank">Demo</a>';
    }

    // about
    if (input == "name" || input == "what is your name") {
        return "My name is Tarapada Garai";
    }
    if (input == "location" || input == "where are you form") {
        return "West Bengali, India";
    }
    else if (input == "age" || input == "what is your age" || input == "your age") {
        return "i am 20 years old";
    }
    else if (input == "i love code palace!" || input == "ok") {
        return "Thank You";
    }
    else if (input == "hobbies" || input == "what is your hobbies" || input == "tell me about your hobbes") {
        return "<b>My Hobbies are </b> Coding, Painting, Photography, Learning, Cycling, Video Game ";
    }
    else if (input == "skills" || input == "how much skills you know" || input == "what is your skills" || input == "your skills" ||  input == "tell me about skills") {
        return "<b>My skills are </b> HTML, CSS, Javascript, Bootstrap, Tailwind CSS, jQuery, React, Git & GitHub, Figma, C";
    }
    else if (input == "languages" || input == "how much languages do you speak" || input == "how much languages you know") {
        return "I know languages are Bengali Hindi English";
    }
    else if (input == "education" || input == "what is your educational qualification" || input == "what is your education" ||  input == "tell me about education") {
        return "my education is that I passed Matriculation from Bon Birsingh Barada Sundari High School in year 2018. I passed High Secondary from Bon Birsingh Barada Sundari High School in 2018-21. I will graduate from Swami Dhananjaya Das Kathiyababa Mahavidyalaya in 2024";
    }
    else if (input == "tell me about projects" || input == "all projects" || input == "projects" || input == "project" || input == "about your all projects" || input == "your all projects" || input == "how much projects you maked" || input == "how much project did you maked") {
        return "<b>My all projects are </b> YouTube Clone, Instagram Clone, Netflix Clone, Ecommerce Website, Computer Coaching Website, Blogging Website, Shopping Website, Calculator, Currency Converter, Stone Paper Scissors Game, Tic Tac Toe Game, Online Exam";
    }
    else if (input == "about" || input == "about yourself" || input == "about your self" || input == "tell me about yourself" || input == "tell me about your self") {
        return "My Name is Tarapada Garai Experienced front-end developer proficient in HTML, CSS, and JavaScript, crafting intuitive user interfaces. Collaborates closely with design teams to translate concepts into functional code and ensures seamless cross-browser compatibility. Skilled in responsive design, optimizing user experiences across various devices. Proficient in leveraging frameworks like React to create dynamic and interactive web applications. Committed to staying updated with emerging technologies for innovative and user-centric designs. And my education is that I passed Matriculation from Bon Birsingh Barada Sundari High School in year 2018. I passed High Secondary from Bon Birsingh Barada Sundari High School in 2018-21. I will graduate from Swami Dhananjaya Das Kathiyababa Mahavidyalaya in 2024. I know languages Bengali Hindi English. My Hobbies are Coding, Painting, Photography, Learning, Cycling, Video Game";
    }
    else {
        return "Ask my work related and my website related questions";
    }
}
