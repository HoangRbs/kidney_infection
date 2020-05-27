<template>
  <ul>
    <li class="text-info">{{ symtomName }}</li>
    <li>
      <div class="select">
        <!-- <input type="text" placeholder required /> -->
        <select id="sltc" required @change="handleOnChange">
          <option value="0" selected>No</option>
          <option value="0.25">low</option>
          <option value="0.5">May be</option>
          <option value="0.75">high</option>
          <option value="1">extra high</option>
        </select>
      </div>
    </li>
    <div class="clear"></div>
  </ul>
</template>

<script>
export default {
  props: {
    symtomName: {
      type: String
    }
  },
  methods: {
    handleOnChange(event) {
      // dispatch with a payload
      this.$store.dispatch("changeSymtomsLevel", {
        symtomName: this.symtomName,
        symtomLevel: parseFloat(event.target.value)
      });

      this.$emit("SYMTOM_BOX_CHANGED");
    }
  }
};
</script>

<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: #2c3e50;
  background-image: none;
}
/* Remove IE arrow */
select::-ms-expand {
  display: none;
}
/* Custom Select */
.select {
  position: relative;
  display: flex;
  width: 20em;
  height: 3em;
  line-height: 3;
  background: #2c3e50;
  overflow: hidden;
  border-radius: 0.25em;
}
select {
  flex: 1;
  padding: 0 0.5em;
  color: #fff;
  cursor: pointer;
}
/* Arrow */
.select::after {
  content: "\25BC";
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 1em;
  background: #34495e;
  cursor: pointer;
  pointer-events: none;
  -webkit-transition: 0.25s all ease;
  -o-transition: 0.25s all ease;
  transition: 0.25s all ease;
}
/* Transition */
.select:hover::after {
  color: #f39c12;
}
.text-info {
  text-align: center;
}
</style>