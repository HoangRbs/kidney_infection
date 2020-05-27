<template>
  <tr
    class="form-matrix-tr form-matrix-value-tr"
    role="group"
    aria-labelledby="label_27 label_27_row_0"
  >
    <th scope="row" class="form-matrix-headers form-matrix-row-headers">
      <label id="label_27_row_0">{{symtomName}}</label>
    </th>
    <td class="form-matrix-values">
      <input
        type="radio"
        id="input_27_0_0"
        class="form-radio"
        :name="td_input_name"
        value="0"
        aria-labelledby="label_27_col_0"
        @click="handleOnClick"
      />
      <label for="input_27_0_0" class="matrix-choice-label matrix-radio-label"></label>
    </td>
    <td class="form-matrix-values">
      <input
        type="radio"
        id="input_27_0_1"
        class="form-radio"
        :name="td_input_name"
        value="0.25"
        aria-labelledby="label_27_col_1"
        @click="handleOnClick"
      />
      <label for="input_27_0_1" class="matrix-choice-label matrix-radio-label"></label>
    </td>
    <td class="form-matrix-values">
      <input
        type="radio"
        id="input_27_0_2"
        class="form-radio"
        :name="td_input_name"
        value="0.5"
        aria-labelledby="label_27_col_2"
        @click="handleOnClick"
      />
      <label for="input_27_0_2" class="matrix-choice-label matrix-radio-label"></label>
    </td>
    <td class="form-matrix-values">
      <input
        type="radio"
        id="input_27_0_3"
        class="form-radio"
        :name="td_input_name"
        value="0.75"
        aria-labelledby="label_27_col_3"
        @click="handleOnClick"
      />
      <label for="input_27_0_3" class="matrix-choice-label matrix-radio-label"></label>
    </td>
    <td class="form-matrix-values">
      <input
        type="radio"
        id="input_27_0_4"
        class="form-radio"
        :name="td_input_name"
        value="1"
        aria-labelledby="label_27_col_4"
        @click="handleOnClick"
      />
      <label for="input_27_0_4" class="matrix-choice-label matrix-radio-label"></label>
    </td>
  </tr>
</template>

<script>
export default {
  data() {
    return {
      td_input_name: "q27_symtomsLevel[" + this.randomNumber + "]"
    };
  },
  props: {
    symtomName: {
      type: String
    },
    randomNumber: {
      type: String
    }
  },
  methods: {
    handleOnClick(e) {
      // dispatch with a payload
      this.$store.dispatch("changeSymtomsLevel", {
        symtomName: this.symtomName,
        symtomLevel: parseFloat(e.target.value)
      });

      //this.$emit("SYMTOM_TABLE_ROW_CHANGED");
    }
  }
};
</script>

<style>
</style>