<template>
    <div>
        <Navbar ></Navbar>
        <div class="flex justify-center">
            <div class="w-10/12">
                <header class="flex justify-content">
                    <h1>Subscription</h1>
                </header>
                <hr>

                <div v-if="isLoading" class="flex flex-col justify-center items-center ">
                    <NuxtImg src="/img/Spinner.gif"></NuxtImg>
                    <h3>Loading files...</h3>
                </div>



                <li class="flex " v-for="file in files" :key="file">
            <img class="mr-2 w-3" src="public/img/file.svg" >
            <a :href="`/img/subscription/${file}`" download>{{ file }}</a>
          </li>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      files: [],
      isLoading: false, 
    };
  },
  async created() {
    this.isLoading = true;  
    try {
      const response = await fetch('/img/subscription/files.json');
      this.files = await response.json();
    } catch (error) {
      console.error('Error fetching files:', error);
    } finally {
      this.isLoading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.line{
    color: #444444;
}
h1{
    margin-top: 10px;
    margin-bottom: 7px;
    font-size: 20px;
    color: #445566;
    font-weight: bold;
}
h2{
    margin-bottom: 20px;
    font-size: 20px;
    color: #445566;
    font-weight: 400;
}
p{
    font-family: 'Arial', sans-serif;
    margin: 20px 0;
    font-size: 15px;
    color: #444444;
}
a {
    color: #444444; /* Initial Color */
    transition: color 0.2s ease-in-out, font-size 0.2s ease-in-out; /* Smooth transition for color and font-size */
}

a:hover {
    color: #0056b3; /* Darker shade of blue on hover */
    
}
</style>