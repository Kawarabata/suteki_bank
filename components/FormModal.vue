<template>
  <form
    class="form-modal"
    @click.self="$emit('close-modal')"
    @submit.prevent="$emit('submit')"
  >
    <div class="modal">
      <label>
        <input type="date" @input="$emit('update-date', $event.target.value)" />
      </label>
      <label>
        <input
          type="text"
          placeholder="良いこと"
          @input="$emit('update-text', $event.target.value)"
        />
      </label>
      <label>
        <input
          type="number"
          placeholder="金額"
          min="1"
          @input="$emit('update-price', $event.target.value)"
        />
      </label>
      <button type="submit" :class="{ submittable: isSubmittable }">
        貯める
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    isSubmittable: {
      type: Boolean,
      required: true,
    },
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
    width: 90%;
    padding: 36px 30px;
    border: 5px solid #c4d700;
    background-color: #fff;

    & > * + * {
      margin-top: 20px;
    }
  }

  & label {
    width: 100%;
  }

  & input {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #d2d2d2;
    border-radius: 8px;
  }

  & button {
    width: fit-content;
    padding: 8px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: #eee;

    &.submittable {
      background-color: #c4d700;
    }
  }
}
</style>
