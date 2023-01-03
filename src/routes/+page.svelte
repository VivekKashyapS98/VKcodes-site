<script>
  import Skills from "../components/Skills.svelte";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Nunito:wght@500;600;700&display=swap"
    rel="stylesheet"
  />
  <title>VKcodes</title>
</svelte:head>

<div class="font-nunito">
  <div
    class="px-10 lg:px-24 min-h-screen text-white bg-gradient-to-b from-slate-900 to-slate-600"
  >
    <section class="py-10 flex justify-between">
      <h3 class="text-3xl">Vivek Kashyap</h3>
      <nav class="">
        <h4
          class="text-xl transition duration-300 hover:-translate-y-1 cursor-pointer hover:underline"
        >
          blog
        </h4>
      </nav>
    </section>
    <section class="pt-28">
      <h1 class="text-7xl">Fullstack Developer</h1>
    </section>
    <section
      class="pt-32 flex flex-col-reverse xl:flex-row items-center justify-end xl:justify-between"
    >
      <Skills />
      <img class=" h-60 w-60" src="/image/laptop_wave.png" alt="hi" />
    </section>
  </div>
</div>
