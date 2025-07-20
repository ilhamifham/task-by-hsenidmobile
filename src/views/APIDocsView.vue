<template>
    <section class="px-4 py-12">
        <div class="max-w-md mx-auto md:max-w-[46rem] xl:max-w-[65.75rem]">
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
    </section>
</template>