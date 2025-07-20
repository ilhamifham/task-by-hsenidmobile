<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';

const isSideBar = ref(false);

function handleSideBar() {
    isSideBar.value = !isSideBar.value;
}

function handleBodyScroll() {
    if (isSideBar.value && window.innerWidth < 1280) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.removeAttribute("style");
    }
}

watch(isSideBar, () => {
    handleBodyScroll();
});

onMounted(() => {
    window.addEventListener("resize", handleBodyScroll);
});

onUnmounted(() => {
    window.removeEventListener("resize", handleBodyScroll);
    document.body.removeAttribute("style");
});
</script>

<template>
    <section class="px-4 pb-12 xl:py-28">
        <div class="max-w-md mx-auto md:max-w-[46rem] xl:max-w-[65.75rem] xl:flex">
            <div class="sticky top-19 border-b border-b-neutral-300 bg-white flex pt-4.25 pb-4 mb-4 xl:hidden">
                <button @click="handleSideBar" class="bg-neutral-200 rounded-lg border border-neutral-300">
                    <svg viewBox="0 0 24 24" fill="none" class="w-10 h-10">
                        <circle cx="9.5" cy="6" r="0.5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
                        <circle cx="9.5" cy="10" r="0.5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
                        <circle cx="9.5" cy="14" r="0.5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
                        <circle cx="9.5" cy="18" r="0.5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
                        <circle cx="14.5" cy="6" r="0.5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
                        <circle cx="14.5" cy="10" r="0.5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
                        <circle cx="14.5" cy="14" r="0.5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
                        <circle cx="14.5" cy="18" r="0.5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
            <aside :class="!isSideBar && 'invisible -translate-x-full'" class="fixed left-0 right-0 top-37.75 bottom-0 bg-white p-4 transition-transform duration-300 xl:duration-0 xl:visible xl:translate-0 xl:sticky xl:top-47 xl:border-r xl:border-r-neutral-300 xl:h-full xl:p-0 xl:w-55.75">
                <div class="max-w-md mx-auto md:max-w-[46rem] xl:max-w-none">
                    <h1 class="text-xl font-bold text-black -mt-1.75 mb-5">Api Pro Developer Documentation</h1>
                    <h2 class="uppercase font-[600] mb-1">Getting Started</h2>
                    <ul>
                        <li>
                            <a href="" class="block">Authentication</a>
                        </li>
                    </ul>
                    <h2 class="uppercase font-[600] mb-1 mt-5">Core Resources</h2>
                    <ul>
                        <li>
                            <a href="" class="block mb-1 bg-neutral-200 pl-1 rounded-sm xl:rounded-r-none font-medium">GET /users</a>
                        </li>
                        <li>
                            <a href="" class="block mb-1">POST /users</a>
                        </li>
                        <li>
                            <a href="" class="block mb-1">GET /analytics</a>
                        </li>
                        <li>
                            <a href="" class="block">GET /logs</a>
                        </li>
                    </ul>
                </div>
            </aside>
            <div class="xl:flex-1 xl:pl-8">
                <h3 class="text-4xl font-bold -mt-1.75 text-black">GET/v1/users</h3>
                <p class="mt-1 mb-4.5">Retrieves a list of all users associated with your project.</p>
                <h4 class="text-xl font-bold mb-2.25 text-black">Example Request</h4>
                <div class="bg-neutral-100 p-4 overflow-x-auto rounded-2xl mb-6.25">
                    <code>
                                <pre>fetch('https://api.apipro.com/v1/users', {</pre>
                                    <pre>   method: GET,</pre>
                                    <pre>   headers: {</pre>
                                        <pre>       'Authorization': 'Bearer YOUR_API_KEY'</pre>
                                    <pre>   }</pre>
                                <pre>})</pre>
                                <pre>.then(response => response.json())</pre>
                                <pre>.then(data => console.log(data));</pre>
                            </code>
                </div>
                <h4 class="text-xl font-bold mb-2.25 text-black">Example Response (200 OK)</h4>
                <div class="bg-neutral-100 p-4 overflow-x-auto rounded-2xl">
                    <code>
                                <pre>{</pre>
                                    <pre>   "data": [</pre>
                                        <pre>       {</pre>
                                                <pre>           "id": "user_2",</pre>
                                                <pre>           "name": "Ifham Sakaf",</pre>
                                                <pre>           "email": "ifham@gmail.com",</pre>
                                                <pre>           "created_at": "2025-07-16T12:00:00Z"</pre>
                                        <pre>       }</pre>
                                    <pre>   ]          </pre>
                                <pre>},</pre>
                                <pre>{</pre>
                                    <pre>   "data": [</pre>
                                        <pre>       {</pre>
                                                <pre>           "id": "user_1",</pre>
                                                <pre>           "name": "Ilham Ifham",</pre>
                                                <pre>           "email": "ilham@gmail.com",</pre>
                                                <pre>           "created_at": "2025-07-16T12:00:00Z"</pre>
                                        <pre>       }</pre>
                                    <pre>   ]          </pre>
                                <pre>}</pre>
                            </code>
                </div>
            </div>
        </div>
    </section>
</template>