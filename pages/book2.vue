<template>
  <div class="w-screen h-screen bg-gray-800">
    <Navbar></Navbar>
    <div class="flex justify-center bg-gray-800">
      <div class="w-10/12 ">
        <header class="flex justify-content ">
          <h1
            class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug  mb-2 normal-case text-white">
            Book 2</h1>
        </header>
        <hr>
        <div v-if="isLoading == true" class="w-full flex justify-center p-24 items-center bg-gray-800">
          <div class=" bg-gray-800  flex  items-center justify-center duration-300 transition-opacity"
            style="z-index: 6000">
            <div class="flex flex-col items-center justify-center">
              <svg aria-hidden="true" class="w-32 h-32 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor" />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill" />
              </svg>
              <div class="mt-3 text-gray-200 font-mono text-xl">Loading...</div>
            </div>
          </div>
        </div>


        <ul class=" grid grid-cols-5 gap-4 bg-gray-800">
          <li class="flex flex-col items-center border-2 border-white" v-for="file in files" :key="file">
            <div class="grid grid-cols-2 w-full">
              <div class="flex justify-center align-center   h-[100px] ">
                <img v-if="file.split('.')[1] == 'pdf'" class=" text-white p-8" src="public/img/pdf.svg" width="120px">
                <img v-else-if="file.split('.')[1] == 'htm' || file.split('.')[1] == 'html'" class=" text-white"
                  src="public/img/html.svg" width="45px">
                <img v-else-if="file.includes('mat') || file.split('.')[1] == 'm'" class=" text-white"
                  src="public/img/matlab.svg" width="55px">
                <img v-else-if="file.includes('php')" class=" text-white" src="public/img/php.svg" width="85px">
                <img v-else-if="file.includes('txt')" class=" text-white" src="public/img/txt.svg" width="25px">
                <img v-else class=" text-white" src="public/img/file.svg" width="35px">
              </div>

              <div class="p-2 break-words text-sm flex items-center justify-center h-full">
                <a :href="`/img/subscription/${file}`" download
                  class="text-white block w-full overflow-hidden overflow-ellipsis text-center">
                  {{ file }}
                </a>
              </div>


            </div>


          </li>
        </ul>
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
      const response = await fetch('/img/book2/files.json');
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
.line {
  color: #444444;
}






a:hover {
  color: #0056b3;
  /* Darker shade of blue on hover */

}
</style>