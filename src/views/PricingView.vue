<script setup>
import Section from '../components/Section.vue';
import H1 from '../components/H1.vue';
import Tagline from '../components/Tagline.vue';
import Card from '../components/Card.vue';
import Button from '../components/Button.vue';

const pricingPlans = [
    {
        name: "Starter",
        price: "$0 / month",
        features: [
            "1 Project",
            "10,000 API Calls/mo",
            "Basic Analytics",
            "Community Support"
        ],
        buttonLabel: "Start for Free",
        mostPopular: false
    },
    {
        name: "Pro",
        price: "$49 / month",
        features: [
            "10 Projects",
            "1 Million API Calls/mo",
            "AI-Powered Analytics",
            "Advanced Security",
            "Email Support"
        ],
        buttonLabel: "Choose Pro",
        mostPopular: true
    },
    {
        name: "Enterprise",
        price: "Let's Talk",
        features: [
            "Unlimited Projects",
            "Custom API Call Volume",
            "On-Premise Deployment",
            "Security Audits",
            "Dedicated 24/7 Support"
        ],
        buttonLabel: "Contact Sales",
        mostPopular: false
    }
];
</script>

<template>
    <Section>
        <div class="text-center">
            <H1>Simple, Transparent Pricing for Teams of All Sizes</H1>
            <Tagline>Start for free and scale as you go. No hidden fees, ever</Tagline>
        </div>
        <ul class="mt-4 md:flex md:flex-wrap md:gap-4">
            <Card v-for="(pricingPlan, index) in pricingPlans" :key="index" class="relative -z-[1] flex flex-col max-w-80 mx-auto md:max-w-none">
                <svg v-if="pricingPlan.mostPopular" width="40px" height="40px" viewBox="0 0 24 24" class="absolute right-4 top-0 bg-neutral-200 rounded-b-lg shadow-lg">
                    <path d="M11.5245 4.46353C11.6741 4.00287 12.3259 4.00287 12.4755 4.46353L13.9084 8.87336C13.9753 9.07937 14.1673 9.21885 14.3839 9.21885H19.0207C19.505 9.21885 19.7064 9.83866 19.3146 10.1234L15.5633 12.8488C15.3881 12.9761 15.3148 13.2018 15.3817 13.4078L16.8145 17.8176C16.9642 18.2783 16.437 18.6613 16.0451 18.3766L12.2939 15.6512C12.1186 15.5239 11.8814 15.5239 11.7061 15.6512L7.95488 18.3766C7.56303 18.6613 7.03578 18.2783 7.18546 17.8176L8.6183 13.4078C8.68524 13.2018 8.61191 12.9761 8.43667 12.8488L4.68544 10.1234C4.29358 9.83866 4.49497 9.21885 4.97933 9.21885H9.6161C9.83272 9.21885 10.0247 9.07937 10.0916 8.87336L11.5245 4.46353Z" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h2 class="text-black font-bold text-lg">{{ pricingPlan.name }}</h2>
                <div class="text-3xl font-extrabold mb-2.75 text-black">{{ pricingPlan.price }}</div>
                <ul class="list-disc list-inside mb-4.25 marker:text-black">
                    <li v-for="(feature, index) in pricingPlan.features" :key="index">{{ feature }}</li>
                </ul>
                <Button as="router-link" to="/" custom-class="rounded-lg mt-auto">{{ pricingPlan.buttonLabel }}</Button>
            </Card>
        </ul>
    </Section>
</template>