<script setup>
import Section from '../components/Section.vue';
import H1 from '../components/H1.vue';
import Button from '../components/Button.vue';
</script>

<template>
    <Section>
        <div class="text-center">
            <div class="text-xl font-bold text-black mb-4 -mt-1.75">Get In Touch</div>
            <H1>Have a technical question, a sales inquiry, or just want to chat? We'd love to hear from you.</H1>
        </div>
        <div class="md:flex md:gap-4 xl:justify-center">
            <form class="bg-neutral-100 p-4 rounded-2xl text-black max-w-md mt-14.75 flex-1">
                <input type="text" name="full-name" placeholder="Full name" class="block w-full bg-neutral-200 rounded-lg border border-neutral-300 py-2.5 px-3.5 mb-4">
                <input type="email" name="email" placeholder="Work email" class="block w-full bg-neutral-200 rounded-lg border border-neutral-300 py-2.5 px-3.5 mb-4">
                <input type="text" name="company-name" placeholder="Company name" class="block w-full bg-neutral-200 rounded-lg border border-neutral-300 py-2.5 px-3.5 mb-4">
                <textarea name="message" placeholder="Message (Optional)" class="block w-full h-42.5 bg-neutral-200 rounded-lg border border-neutral-300 py-2.5 px-3.5 resize-none mb-4"></textarea>
                <Button type="submit" custom-class="rounded-lg w-full">Send Message</Button>
            </form>
            <address class="bg-neutral-100 p-4 rounded-2xl mt-8 not-italic md:mt-16 md:w-[17rem]">
                <div class="border-b border-b-neutral-300">
                    <div class="text-black font-bold text-xl -mt-1.75 mb-1">Our Office</div>
                    <div class="mb-2.25">
                        123 Tech Avenue,<br />
                        Innovation City,<br />
                        Connectiville 45678
                    </div>
                </div>
                <div class="border-b border-b-neutral-300">
                    <div class="text-black font-bold text-xl mt-2.25">Email</div>
                    <a href="mailto:hello@aipro.com" class="block mb-2.25">hello@aipro.com</a>
                </div>
                <div>
                    <div class="text-black font-bold text-xl mt-2.25">Call Us</div>
                    <a href="tel:+15551234567" class="block -mb-2.25">+1 (555) 123-4567</a>
                </div>
            </address>
        </div>
    </Section>
</template>