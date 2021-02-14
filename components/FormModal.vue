<template>
  <div class="form-modal" @click.self="$emit('close-modal')">
    <div class="modal">
      <input v-model="date" type="date" />
      <input v-model="text" type="text" />
      {{ date }}
      {{ text }}
      <button>貯める</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      text: '',
    }
  },
}
</script>

<style scoped lang="postcss">
.form-modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.64);

  & .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 36px 30px;
    border: 5px solid #c4d700;
    background-color: #fff;

    & > * + * {
      margin-top: 20px;
    }
  }

  & button {
    width: fit-content;
    padding: 8px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: #c4d700;
  }
}
</style>
