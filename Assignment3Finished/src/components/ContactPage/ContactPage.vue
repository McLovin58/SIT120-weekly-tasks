<script setup>
    //This alert is just the placeholder to alert the user the message has been sent, however I dont have a database to send them to.
function showAlert()

                {
                    alert("Your message has been submitted! Redirecting you to the Game.")
                    window.location.href = "/"
                }

                 
</script>

<template>
    <div class="container">
                    <div class="title" style="font-family: Arial; font-size: 30px;">Contact Us</div> 

                    <div class = contactform>
                        <!--This form uses v-model to take user input and the button below it is used to "send" the users data as a form and then redirect towards the main menu-->
                        <span>Please input your message to us below and we will respond as soon as we can, this can be used to either recomend new features, <br> inform us of potentially broken aspects or buggy parts of the game, and to simply tell us what we did well!<br></span>
                        <textarea class = "textbox" style="resize:none" v-model="message" placeholder="Please input your message and we will respond asap!"></textarea>
                        <div class = "button1">
                            <!--could use submit instead of button, but button looks cleaner for purpose of demonstration-->
                            <button style="background-color: grey; color: white; border-radius: 26p; float:center; margin: auto" id="btn" v-on:click="showAlert() ">Submit message</button>
                        </div>
                    </div>  
        </div>
</template>