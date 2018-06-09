<template>
  <div class="overlay">
    <div class="overlay__inner">
      <a
        class="overlay__close"
        href="#"
        aria-label="close"
        @click.prevent="$router.back()"
      >
        X
      </a>
      <h1>Overlay</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: `Overlay`,
};
</script>

<style lang="scss">
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: scroll;
  background: #fff;

  &__inner {
    position: relative;
    max-width: 42em;
    margin-right: auto;
    margin-left: auto;
    padding: 1em;
  }

  &__close {
    position: absolute;
    top: 1em;
    right: 1em;
    text-decoration: none;
    font-size: 1.25em;
    color: #333;
    transition: color 0.2s;

    &:hover,
    &:focus {
      color: #999;
    }
  }
}
</style>

