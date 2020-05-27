<template>
  <div class="login-form section-wrapper">
    <!-- new form section -->
    <ul class="form-section page-section">
      <li id="cid_19" class="form-input-wide" data-type="control_head">
        <div class="form-header-group header-default">
          <div class="header-text httal htvam">
            <h2 id="header_19" class="form-header" data-component="header">Patients Personal details</h2>
          </div>
        </div>
      </li>
      <li class="form-line jf-required" data-type="control_textbox" id="id_4">
        <label class="form-label form-label-top form-label-auto" id="label_4" for="input_4">
          Full Name
          <span class="form-required">*</span>
        </label>
        <div id="cid_4" class="form-input-wide jf-required">
          <input
            type="text"
            id="input_4"
            name="q4_fullName4"
            data-type="input-textbox"
            class="form-textbox validate[required]"
            size="30"
            value
            placeholder=" "
            data-component="textbox"
            aria-labelledby="label_4"
            required
            @input="handleNameInput"
          />
        </div>
      </li>
      <li class="form-line jf-required" data-type="control_textbox" id="id_26">
        <label class="form-label form-label-top form-label-auto" id="label_26" for="input_26">
          Age
          <span class="form-required">*</span>
        </label>
        <div id="cid_26" class="form-input-wide jf-required">
          <input
            type="number"
            id="input_26"
            name="q26_age"
            data-type="input-textbox"
            class="form-textbox validate[required]"
            size="30"
            value
            placeholder=" "
            data-component="textbox"
            aria-labelledby="label_26"
            required
            @input="handleAgeInput"
          />
        </div>
      </li>
      <li class="form-line" data-type="control_matrix" id="id_27">
        <label
          class="form-label form-label-top form-label-auto"
          id="label_27"
          for="input_27"
        >Symtoms Level</label>
        <div id="cid_27" class="form-input-wide">
          <table
            summary
            role="presentation"
            cellpadding="4"
            cellspacing="0"
            class="form-matrix-table"
            data-component="matrix"
          >
            <tbody>
              <tr class="form-matrix-tr form-matrix-header-tr">
                <th class="form-matrix-th" style="border:none">&nbsp;</th>
                <th
                  scope="col"
                  class="form-matrix-headers form-matrix-column-headers form-matrix-column_0"
                  style="width:100px"
                >
                  <label id="label_27_col_0">No</label>
                </th>
                <th
                  scope="col"
                  class="form-matrix-headers form-matrix-column-headers form-matrix-column_1"
                  style="width:100px"
                >
                  <label id="label_27_col_1">Low</label>
                </th>
                <th
                  scope="col"
                  class="form-matrix-headers form-matrix-column-headers form-matrix-column_2"
                  style="width:100px"
                >
                  <label id="label_27_col_2">Maybe</label>
                </th>
                <th
                  scope="col"
                  class="form-matrix-headers form-matrix-column-headers form-matrix-column_3"
                  style="width:100px"
                >
                  <label id="label_27_col_3">High</label>
                </th>
                <th
                  scope="col"
                  class="form-matrix-headers form-matrix-column-headers form-matrix-column_4"
                  style="width:100px"
                >
                  <label id="label_27_col_4">Extra High</label>
                </th>
              </tr>
              <SymtomTableRow symtomName="Abrupt Fever and chill" randomNumber="1" />
              <SymtomTableRow symtomName="Cloudy urine" randomNumber="2" />
              <SymtomTableRow symtomName="Dysuria" randomNumber="3" />
              <SymtomTableRow symtomName="Hemanturia" randomNumber="4" />
              <SymtomTableRow symtomName="Hesitancy" randomNumber="5" />
              <SymtomTableRow symtomName="Nausea and vomiting" randomNumber="6" />
              <SymtomTableRow symtomName="Nocturia" randomNumber="7" />
              <SymtomTableRow symtomName="Purulent Urine" randomNumber="8" />
              <SymtomTableRow symtomName="Suprapubic pain" randomNumber="9" />
              <SymtomTableRow symtomName="Flank pain umilateral or bilateral" randomNumber="10" />
              <SymtomTableRow symtomName="Urinary frequency" randomNumber="11" />
            </tbody>
          </table>
        </div>
      </li>
      <li class="form-line" data-type="control_button" id="id_2">
        <div id="cid_2" class="form-input-wide">
          <div
            style="text-align:center"
            data-align="center"
            class="form-buttons-wrapper form-buttons-center jsTest-button-wrapperField"
          >
            <button
              id="input_2"
              type="submit"
              class="form-submit-button submit-button jf-form-buttons jsTest-submitField"
              data-component="button"
              data-content
              @click="handleSubmit"
            >Submit</button>
          </div>
        </div>
      </li>
    </ul>
    <ul class="result-section">
      <li class="text-info">Result</li>
      <li>
        <p v-if="error" class="error">{{error}}</p>
        <p v-if="result">{{result}}</p>
      </li>
      <li>
        <CircularChart v-if="result" :percentage_result="percentage_result" /> 
      </li>

      <div class="clear"></div>
    </ul>
    <!-- .... -->

    <!-- delete later -->
    <!-- <UserInfo @USER_INFO_CHANGED="handleUserInfoChange" />

    <form @submit="handleSubmit">
      <div class="symtoms-row-section">
        <SymtomBox symtomName="Abrupt Fever and chill" @SYMTOM_BOX_CHANGED="handleSymtomBoxChange" />
        <SymtomBox symtomName="Cloudy urine" @SYMTOM_BOX_CHANGED="handleSymtomBoxChange" />
        <SymtomBox symtomName="Dysuria" @SYMTOM_BOX_CHANGED="handleSymtomBoxChange" />
      </div>
      <div class="symtoms-row-section">
        <SymtomBox symtomName="Hemanturia" @SYMTOM_BOX_CHANGED="handleSymtomBoxChange" />
        <SymtomBox symtomName="Hesitancy" @SYMTOM_BOX_CHANGED="handleSymtomBoxChange" />
        <SymtomBox symtomName="Nausea and vomiting" @SYMTOM_BOX_CHANGED="handleSymtomBoxChange" />
      </div>
      <div class="symtoms-row-section">
        <SymtomBox symtomName="Nocturia" @SYMTOM_BOX_CHANGED="handleSymtomBoxChange" />
        <SymtomBox symtomName="Purulent Urine" @SYMTOM_BOX_CHANGED="handleSymtomBoxChange" />
        <SymtomBox symtomName="Suprapubic pain" @SYMTOM_BOX_CHANGED="handleSymtomBoxChange" />
      </div>
      <div class="symtoms-row-section">
        <SymtomBox
          symtomName="Flank pain umilateral or bilateral"
          @SYMTOM_BOX_CHANGED="handleSymtomBoxChange"
        />
        <SymtomBox symtomName="Urinary frequency" @SYMTOM_BOX_CHANGED="handleSymtomBoxChange" />
      </div>
      <ul>
        <li class="text-info">Result</li>
        <li>
          <p v-if="error" class="error">{{error}}</p>
          <p v-if="result">{{result}}</p>
        </li>
        <div class="clear"></div>
      </ul>
      <input type="submit" value="Submit" />
    </form>-->
  </div>
</template>

<script>
// import SymtomBox from "./SymtomBox";
import axios from "axios";
// import UserInfo from "./UserInfo";
import SymtomTableRow from "./SymtomTableRow";
import CircularChart from "./CircularChart";

export default {
  data() {
    return {
      error: null,
      result: null,
      percentage_result: null,
      loading: false
    };
  },
  components: {
    SymtomTableRow,
    CircularChart
  },
  methods: {
    handleNameInput(e) {
      // dispatch action with payload
      this.$store.dispatch("changeUserName", {
        userName: e.target.value
      });

      //this.$emit("USER_INFO_CHANGED");
      this.error = null;
    },

    handleAgeInput(e) {
      this.$store.dispatch("changeUserAge", {
        userAge: parseFloat(e.target.value)
      });

      //this.$emit("USER_INFO_CHANGED");
      this.error = null;
    },

    handleSubmit(event) {
      event.preventDefault();

      console.log(this.$store.state);

      this.result = null;

      let symtomsLevel = this.$store.state.symtomsLevel;
      let userName = this.$store.state.userName;
      let userAge = this.$store.state.userAge;

      if (!userName || !userAge) {
        this.error = `please type your name or age`;
      }

      if (!this.error) {
        // send to server
        let data = {
          userName,
          userAge,
          symtomsLevel
        };

        // show loading... at result
        this.loading = true;

        let public_url = "https://kidney-infection-backend.herokuapp.com/";

        axios({
          method: "POST",
          url: `${public_url}/api/getUserResult`,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8"
          },
          data: data
        })
          .then(res => {
            this.result = `ban mac benh nhiem trung than muc do ${res.data.data}`;
            this.percentage_result = res.data.data * 100;
          })
          .catch(err => {
            console.log(err);
          });

        this.loading = false;
      }
    },
    handleSymtomBoxChange() {
      this.error = null;
    },
    handleUserInfoChange() {
      this.error = null;
    }
  }
};
</script>

<style>
.result-section {
  margin-bottom: 40px;
}

.error {
  color: rgb(235, 26, 26);
}

.symtoms-row-section {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.form-submit-button {
  border-radius: 10px;
  border-style: none;
  border: 0.5px solid rgb(112, 108, 108);
}

.form-matrix-column-headers {
  background-color: rgb(221, 221, 221);
  border: 1px solid rgb(192, 190, 190);
  padding: 2px;
}

.form-matrix-column-headers label {
  font-size: 12px;
  font-weight: 10;
}

.form-matrix-row-headers {
  background-color: rgb(221, 221, 221);
  border: 1px solid rgb(192, 190, 190);
  padding: 2px;
}

.form-matrix-row-headers label {
  font-size: 12px;
  font-weight: 10;
}

.form-header {
  border-bottom: 1px solid #eee;
}

.form-all {
  font-family: "Lucida Grande", sans-serif;
}
.form-all {
  width: 580px;
  width: 100%;
  max-width: 580px;
}
.form-label-left,
.form-label-right {
  width: 150px;
}
.form-label {
  white-space: normal;
}

.form-label-left {
  display: inline-block;
  white-space: normal;
  float: left;
  text-align: left;
}
.form-label-right {
  display: inline-block;
  white-space: normal;
  float: left;
  text-align: right;
}
.form-label-top {
  white-space: normal;
  display: block;
  float: none;
  text-align: left;
}
.form-radio-item label:before {
  top: 0;
}
.form-all {
  font-size: 14px;
}
.form-label {
  font-weight: bold;
}
.form-checkbox-item label,
.form-radio-item label {
  font-weight: normal;
}
.supernova {
  background-color: rgba(255, 255, 255, 0.88);
  background-color: #f5f5f5;
}
.supernova body {
  background-color: transparent;
}

.supernova .form-all,
.form-all {
  background-color: rgba(255, 255, 255, 0.88);
  border: 1px solid transparent;
}
.form-header-group {
  border-color: rgba(230, 230, 230, 0.88);
}
.form-matrix-table tr {
  border-color: rgba(230, 230, 230, 0.88);
}
.form-matrix-table tr:nth-child(2n) {
  background-color: rgba(242, 242, 242, 0.88);
}
.form-all {
  color: #555555;
}
.form-header-group .form-header {
  color: #555555;
}
.form-header-group .form-subHeader {
  color: #6f6f6f;
}
.form-sub-label {
  color: #6f6f6f;
}
.form-label-top,
.form-label-left,
.form-label-right,
.form-html {
  color: #555555;
}
.form-checkbox-item label,
.form-radio-item label {
  color: #6f6f6f;
}
.form-line.form-line-active {
  -webkit-transition-property: all;
  -moz-transition-property: all;
  -ms-transition-property: all;
  -o-transition-property: all;
  transition-property: all;
  -webkit-transition-duration: 0.3s;
  -moz-transition-duration: 0.3s;
  -ms-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease;
  -moz-transition-timing-function: ease;
  -ms-transition-timing-function: ease;
  -o-transition-timing-function: ease;
  transition-timing-function: ease;
  background-color: rgba(255, 251, 234, 0);
}
/* omer */
.form-radio-item,
.form-checkbox-item {
  padding-bottom: 0px !important;
}
.form-radio-item:last-child,
.form-checkbox-item:last-child {
  padding-bottom: 0;
}
/* omer */
.form-single-column .form-checkbox-item,
.form-single-column .form-radio-item {
  width: 100%;
}
.supernova {
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center top;
  background-attachment: fixed;
  background-size: auto;
  background-size: cover;
}

.form-all {
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center top;
}
.form-header-group {
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center top;
}
.form-line {
  margin-top: 12px;
  margin-bottom: 12px;
}
.form-line {
  padding: 12px 36px;
}
.form-all .form-submit-button,
.form-all .form-submit-reset,
.form-all .form-submit-print {
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
}
.form-all .form-sub-label {
  margin-left: 3px;
}
.form-all {
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
}

.form-section {
  border: 1px solid #eee;
  width: 600px;
  margin: 50px auto;
}

.form-section:first-child {
  -webkit-border-radius: 6px 6px 0 0;
  -moz-border-radius: 6px 6px 0 0;
  border-radius: 6px 6px 0 0;
}
.form-section:last-child {
  -webkit-border-radius: 0 0 6px 6px;
  -moz-border-radius: 0 0 6px 6px;
  border-radius: 0 0 6px 6px;
}
.form-all .qq-upload-button,
.form-all .form-submit-button,
.form-all .form-submit-reset,
.form-all .form-submit-print {
  font-size: 1em;
  padding: 9px 15px;
  font-family: "Lucida Grande", sans-serif;
  font-size: 14px;
  font-weight: normal;
}
.form-all .form-pagebreak-back,
.form-all .form-pagebreak-next {
  font-size: 1em;
  padding: 9px 15px;
  font-family: "Lucida Grande", sans-serif;
  font-size: 14px;
  font-weight: normal;
}
/*
& when ( @buttonFontType = google ) {
	@import (css) "@{buttonFontLink}";
}
*/
h2.form-header {
  line-height: 1.618em;
  font-size: 1.714em;
}
h2 ~ .form-subHeader {
  line-height: 1.5em;
  font-size: 1.071em;
}
.form-header-group {
  text-align: left;
}
/*.form-dropdown,
.form-radio-item,
.form-checkbox-item,
.form-radio-other-input,
.form-checkbox-other-input,*/
.form-captcha input,
.form-spinner input,
.form-error-message {
  padding: 4px 3px 2px 3px;
}
.form-header-group {
  font-family: "Lucida Grande", sans-serif;
}
.form-section {
  padding: 0px 0px 0px 0px;
}
.form-header-group {
  margin: 12px 36px 12px 36px;
}
.form-header-group {
  padding: 24px 0px 24px 0px;
}

.form-textbox {
  width: 98%;
  border: 1px solid rgb(226, 223, 223);
}

.form-textbox,
.form-textarea {
  padding: 4px 3px 2px 3px;
}
.form-textbox,
.form-textarea,
.form-radio-other-input,
.form-checkbox-other-input,
.form-captcha input,
.form-spinner input {
  background-color: #ffffff;
}
.form-dropdown {
  -webkit-appearance: menulist-button;
  border-color: #cccccc;
}
[data-type="control_dropdown"] .form-input,
[data-type="control_dropdown"] .form-input-wide {
  width: 150px;
}
.form-label {
  font-family: "Lucida Grande", sans-serif;
  margin-bottom: 9px;
}
li[data-type="control_image"] div {
  text-align: left;
}
li[data-type="control_image"] img {
  border: none;
  border-width: 0px !important;
  border-style: solid !important;
  border-color: false !important;
}
.form-line-column {
  width: auto;
}
.form-line-error {
  background-color: rgba(255, 255, 255, 0.88);
  -webkit-box-shadow: inset 0px 3px 11px -7px #ff3200;
  -moz-box-shadow: inset 0px 3px 11px -7px #ff3200;
  box-shadow: inset 0px 3px 11px -7px #ff3200;
}
.form-line-error input:not(#coupon-input),
.form-line-error textarea,
.form-line-error .form-validation-error {
  -webkit-transition-property: none;
  -moz-transition-property: none;
  -ms-transition-property: none;
  -o-transition-property: none;
  transition-property: none;
  -webkit-transition-duration: 0.3s;
  -moz-transition-duration: 0.3s;
  -ms-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease;
  -moz-transition-timing-function: ease;
  -ms-transition-timing-function: ease;
  -o-transition-timing-function: ease;
  transition-timing-function: ease;
  border: 1px solid #fff4f4;
  -moz-box-shadow: 0 0 3px #fff4f4;
  -webkit-box-shadow: 0 0 3px #fff4f4;
  box-shadow: 0 0 3px #fff4f4;
}
.form-line-error .form-error-message {
  margin: 0;
  position: absolute;
  color: #fff;
  display: inline-block;
  right: 0;
  font-size: 10px;
  position: absolute !important;
  box-shadow: none;
  top: 0px;
  line-height: 20px;
  color: #fff;
  background: #ff3200;
  padding: 0px 5px;
  bottom: auto;
  min-width: 105px;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
}
.form-line-error .form-error-message img,
.form-line-error .form-error-message .form-error-arrow {
  display: none;
}
.ie-8 .form-all {
  margin-top: auto;
  margin-top: initial;
}
.ie-8 .form-all:before {
  display: none;
}
</style>