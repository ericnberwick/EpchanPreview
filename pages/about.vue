<template>
    <div class="">
      <Navbar page="about"/>
  
      <div class="w-full flex justify-center">
        <h1 class="mt-6 text-4xl font-bold text-center mb-8">About</h1>
      </div>
      <hr class="w-full border-2 border-black">
      <div v-for="profile in profiles" :key="profile.sys.id">
        <AboutCard :about="profile"></AboutCard>
      </div>
      
  
  
    </div>
    
  </template>
  
  
  
  <script setup>
  import { ref, onMounted } from "vue";

  const profile1 = { 
    name : "Ernie P Chanie",
    description : "Suuuuu"
  }
  
  const config = useRuntimeConfig();
  const profiles = ref([]);
  const spaceName = config.public.CONTENTFUL_SPACE_ID;
  const accessTokenName = config.public.CONTENTFUL_ACCESS_KEY;
  
  let client;
  
  async function fetchEntries() {
    const contentful = await import("contentful");
    client = contentful.createClient({
      space: spaceName,
      accessToken: accessTokenName,
    });
  
    const res = await client.getEntries({
      content_type: "aboutProfile", // Ensure this matches the actual ID in Contentful
    });
    profiles.value = res.items;
    console.log("res: ", res);
  }
  
  //Fetch data on component mount
  onMounted(() => {
    fetchEntries();
  });
  </script>
  