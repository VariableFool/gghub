<template>
  <video
    ref="videoPlayer"
    autoplay
    muted
    loop
    playsinline
    class="absolute top-0 left-0 w-dvw h-dvh object-cover"
  >
    <source src="/videos/background.mp4" type="video/mp4" />
  </video>

  <div class="mx-auto px-4 py-20 text-center z-10">
    <p
      class="text-4xl md:text-8xl font-extrabold font-[Comfortaa] max-w-3xl bg-gradient-to-b from-blue-500 via-white to-yellow-500 bg-clip-text text-transparent pb-3"
    >
      Full-stack разработка <br />и 1С решения
    </p>
  </div>
</template>
