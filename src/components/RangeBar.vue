<template>
  <div>
    <h1>{{ inputValue }}%</h1>
    <div class="slide-container">
      <div class="slider" ref="slider">
        <div
          @mousedown="startDrag($event)"
          :style="{ marginLeft: `${inputValue}%` }"
          class="slider-thumb"
        ></div>
      </div>
      <div class="buttons-container">
        <button @click="inputValue = 25" class="btn">25%</button>
        <button @click="inputValue = 50" class="btn">50%</button>
        <button @click="inputValue = 75" class="btn">75%</button>
        <button @click="inputValue = 100" class="btn">100%</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
    },
  },
  data() {
    return {
      localValue: 0,
      internalValue: this.value,
      isDragging: false,
    };
  },
  computed: {
    inputValue: {
      get() {
        return this.isValuePropSet() ? this.value : this.localValue;
      },
      set(value) {
        this.$emit("input", value);
        this.localValue = value;
      },
    },
  },
  mounted() {
    window.addEventListener("mousemove", this.drag);
    window.addEventListener("mouseup", this.endDrag);
  },
  methods: {
    startDrag() {
      this.isDragging = true;
    },
    drag(e) {
      if (this.isDragging) {
        const rect = this.$refs.slider.getBoundingClientRect();
        let value = ((e.clientX - rect.x) / rect.width) * 100;
        if (value < 0) {
          value = 0;
        } else if (value > 100) {
          value = 100;
        }

        this.inputValue = Math.floor(value * 10) / 10;
      }
    },
    endDrag() {
      this.isDragging = false;
    },
    isValuePropSet() {
      return this.$options.propsData.value !== undefined;
    },
  },
};
</script>

<style scoped>
.slide-container {
  margin: 0 auto;
  width: 100%;
}
.slider {
  padding: 5px 35px 5px 5px;

  height: 40px;
  background: linear-gradient(
    90deg,
    rgba(52, 255, 198, 1) 0%,
    rgba(164, 255, 223, 1) 61%,
    rgba(255, 254, 135, 1) 80%,
    rgba(255, 166, 85, 1) 90%,
    rgba(255, 121, 121, 1) 100%
  );
  transition: opacity 0.2s;
  border-radius: 20px;
}

.slider-thumb {
  width: 30px;
  height: 30px;
  background: white;
  cursor: pointer;
  border-radius: 50%;
}
.buttons-container {
  margin-top: 25px;
}
.btn {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  font-size: 20px;
  padding: 5px 15px;
  color: white;
  background-color: #54618b;
  border: 0;
  border-radius: 50px;
  margin: 0 7px;
  cursor: pointer;
}
</style>
