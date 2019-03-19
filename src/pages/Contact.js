export default function Contact(){
    return `
            <ul>
                <a href="https://github.com/SBoyd2005">GitHub</a>
                <i class="fab fa-github"></i>

                <a href="https://www.linkedin.com/in/stephen-boyd-02b02170/">Linkedin</a>
                <i class="fab fa-linkedin"></i>
            </ul>

            <form action="https://formspree.io/Stephen.Boyd48@gmail.com" method="POST">
                <label for="First Name">First Name</label>
                <input type="text" id="fname" placeholder="Please Enter Your First Name" required>
                <br>
                <label for="Last Name">Last Name</label>
                <input type="text" id="lname" placeholder="Please Enter YourLast Name" required>
                <br>
                <label for="email">Email</label>
                <input type="email" name="" id="email" placeholder="Please Enter Your E-mail">
                <br>
                <label for="Phone">Phone</label>
                <input type="tel" name="Phone" placeholder="(---)--- ----" id="Phone">
                <br>
                <br>
                <input type="submit" value="Submit">
                <input type="reset" value="Clear">
            </form>
        </div>
    </div>
    `;
}